<template>
   <div class="yok-picker__list">
      <div class="yok-picker__roller" ref="roller">
         <div
            v-for="(item, index) in list"
            class="yok-picker-item"
            :style="{
               transform:
                  'rotate3d(1, 0, 0, -' +
                  (index + 1) * 20 +
                  'deg) translate3d(0px, 0px, 104px)'
            }"
         >
            {{ item[optionTag] }}
         </div>
      </div>
      <div class="yok-picker__content"></div>
   </div>
</template>

<script>
export default {
   name: "yok-picker-list",
   data() {
      return {
         touchParams: {
            startY: 0,
            endY: 0,
            startTime: 0,
            endTime: 0
         },
         // currIndex: 1,
         transformY: 0, // 旋转起始位置
         scrollDistance: 0, //实时旋转位置
         lineSpacing: 36,
         rotation: 20,
         timer: null,

         keyIndex: 0
      };
   },
   props: {
      list: {
         type: Array,
         default: []
      },
      itemIndex: {
         type: Number,
         default: 1
      },
      optionTag: {
         type: String,
         default: "name"
      },
      defaultValue: {
         type: Array,
         default: () => []
      }
   },
   mounted() {
      this.$nextTick(() => {
         this.setDefaultVal();
         this.$el.addEventListener("touchstart", this.touchStart);
         this.$el.addEventListener("touchmove", this.touchMove);
         this.$el.addEventListener("touchend", this.touchEnd);
      });
   },
   beforeDestroy() {
      // 移除监听
      this.$el.removeEventListener("touchstart", this.touchStart);
      this.$el.removeEventListener("touchmove", this.touchMove);
      this.$el.removeEventListener("touchend", this.touchEnd);
   },
   methods: {
      setDefaultVal() {
         // 设置默认选中项
         this.list.find((item, index) => {
            let move = 0;
            if (this.defaultValue.indexOf(item.id) > -1) {
               index = index + 1;
               if (this.defaultValue.length > 0) {
                  move = this.rotation * index;
               } else {
                  move = 0;
               }
               // this.currIndex = index;
               this.setTransform(0, "end", 1000, move + "deg");
            }
         });
      },
      // 设置 transform 值
      setTransform(translateY = 0, type, time = 1000, deg) {
         // console.log(translateY, "旋转位置");
         if (type === "end") {
            this.$refs.roller.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
         } else {
            this.$refs.roller.style.webkitTransition = "";
         }
         this.$refs.roller.style.webkitTransform = `rotate3d(1, 0, 0, ${deg})`;
         this.scrollDistance = translateY;
      },
      /*
       * move 移动距离
       * time 移动时间
       */
      setMove(move, type, time) {
         let updateMove = move + this.transformY;
         if (type === "end") {
            // 限定滚动距离
            if (updateMove > 0) {
               updateMove = 0;
            }
            if (updateMove < -(this.list.length - 1) * this.lineSpacing) {
               updateMove = -(this.list.length - 1) * this.lineSpacing;
            }

            // 设置滚动距离为lineSpacing的倍数值
            let endMove =
               Math.round(updateMove / this.lineSpacing) * this.lineSpacing;
            let deg = `${(Math.abs(Math.round(endMove / this.lineSpacing)) +
               1) *
               this.rotation}deg`;
            this.setTransform(endMove, type, time, deg);
            this.timer = setTimeout(() => {
               this.setChooseValue(endMove);
            }, time / 2);

            // this.currIndex = Math.abs(Math.round(endMove / this.lineSpacing)) + 1;
         } else {
            let deg = "0deg";
            if (updateMove < 0) {
               deg = `${(Math.abs(updateMove / this.lineSpacing) + 1) *
                  this.rotation}deg`;
            } else {
               deg = `${(-updateMove / this.lineSpacing + 1) *
                  this.rotation}deg`;
            }
            this.setTransform(updateMove, null, null, deg);
            // this.currIndex = Math.abs(Math.round(updateMove / this.lineSpacing)) + 1;
         }
      },

      setChooseValue: function(move) {
         this.$emit(
            "chooseItem",
            this.list[Math.round(-move / this.lineSpacing)],
            this.itemIndex
         );
      },

      touchStart(event) {
         event.preventDefault();
         let changedTouches = event.changedTouches[0];
         this.touchParams.startY = changedTouches.pageY;
         this.touchParams.startTime = event.timestamp || Date.now();
         this.transformY = this.scrollDistance;
      },

      touchMove(event) {
         event.preventDefault();
         let changedTouches = event.changedTouches[0];
         this.touchParams.lastY = changedTouches.pageY;
         this.touchParams.lastTime = event.timestamp || Date.now();
         let move = this.touchParams.lastY - this.touchParams.startY;
         this.setMove(move);
      },

      touchEnd(event) {
         event.preventDefault();
         let changedTouches = event.changedTouches[0];
         this.touchParams.lastY = changedTouches.pageY;
         this.touchParams.lastTime = event.timestamp || Date.now();
         let move = this.touchParams.lastY - this.touchParams.startY;

         let moveTime = this.touchParams.lastTime - this.touchParams.startTime;
         // 300毫秒内的滑动 距离*2
         if (moveTime <= 300) {
            move = move * 2;
            moveTime = moveTime + 1000;
            this.setMove(move, "end", moveTime);
         } else {
            this.setMove(move, "end");
         }
      },

      initStatus() {
         // this.currIndex = 1;
         this.transformY = 0;
         this.setMove(0, "end", 1000);
      }
   }
};
</script>
