<template>
   <div>
      <transition name="yokFade">
         <div class="yok-mask" @click="cancel" v-show="visible"></div>
      </transition>
      <transition name="picker">
         <div class="yok-picker" v-if="visible">
            <div class="yok-picker_warp">
               <div class="yok-picker__control">
                  <a
                     href="javascript:;"
                     class="yok-picker-cancel-btn"
                     @click="cancel"
                     >取消</a
                  >
                  <span href="javascript:;" class="yok-picker-title"
                     >选择城市</span
                  >
                  <a href="javascript:;" class="yok-picker-ok-btn" @click="okFn"
                     >确定</a
                  >
               </div>
               <div class="yok-picker__panel">
                  <template v-for="(item, index) in dataList">
                     <yok-picker-list
                        :list="item"
                        :item-index="index + 1"
                        :ref="`picker-list-${index}`"
                        :option-tag="optionTag"
                        :default-value="defaultValue"
                        @chooseItem="chooseItem"
                     ></yok-picker-list>
                  </template>
               </div>
            </div>
         </div>
      </transition>
   </div>
</template>

<script>
import pickerList from "./picker-list";
export default {
   name: "yok-picker",
   data() {
      return {
         name: "name",
         chooseValueData: [],
         cacheValueData: []
      };
   },
   components: {
      [pickerList.name]: pickerList
   },
   props: {
      title: {
         type: String,
         default: ""
      },
      visible: {
         type: Boolean,
         default: false
      },
      optionTag: {
         type: String,
         default: "name"
      },
      cancelTxt: {
         type: String,
         default: ""
      },
      dataList: {
         type: Array,
         default: []
      },
      defaultValue: {
         type: Array,
         default: () => []
      }
   },
   mounted() {
      if (this.defaultValue.length == 0) {
         this.dataList.forEach((item, index) => {
            this.cacheValueData.push(item[0].id);
            this.chooseValueData.push(item[0].id);
         });
      } else {
         this.cacheValueData = [...this.defaultValue];
         this.chooseValueData = [...this.defaultValue];
      }
   },
   methods: {
      cancel: function() {
         this.$emit("close-update", this.chooseValueData);
         this.$emit("close");
      },
      /*
       * val 滑动列选中的数据
       * itemIndex 滑动列 index+1
       */
      chooseItem(val, itemIndex) {
         if (itemIndex < this.dataList.length) {
            this.$emit("choose", this, val, itemIndex);
         }
         // console.log(val, itemIndex);
         this.cacheValueData[itemIndex - 1] = val.id;
         console.log(this.cacheValueData, "选中值");
      },
      /*
       * 重置下一列
       * index 滑动列 index
       */
      updateChooseval(index) {
         let ref = `picker-list-${index}`;
         this.$refs[ref] && this.$refs[ref][0].initStatus();
      },
      transVal() {
         let newData = [];
         console.log(this.dataList, "数据");
         console.log(this.cacheValueData, "数据");
         this.dataList.forEach((item, index) => {
            let val = [];
            if (this.cacheValueData.length > 0) {
               val = item.find(d => {
                  return d.id === this.cacheValueData[index];
               });
            } else {
               val = item[0];
            }
            console.log(val);
            newData.push({
               id: val.id,
               [this.optionTag]: val[this.optionTag]
            });
         });
         return newData;
      },
      okFn() {
         this.chooseValueData = [...this.cacheValueData];
         this.$emit("confirm", this.transVal());
         this.$emit("close");
      }
   }
};
</script>
