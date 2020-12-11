<template>
   <transition name="notify">
      <div
         class="yok-notify"
         v-show="visible"
         :class="'yok-' + type"
         :style="notifyStyle"
      >
         {{ msg }}
      </div>
   </transition>
</template>

<script>
export default {
   data() {
      return {
         msg: "",
         duration: 3000, //显示时间(毫秒)
         visible: false,
         center: "",
         type: "primary",
         timer: "",
         notifyStyle: {}
      };
   },
   methods: {
      show: function() {
         this.clearTimer();
         this.visible = true;
         var _this = this;
         if (this.duration) {
            this.timer = setTimeout(function() {
               _this.hide();
            }, this.duration);
         }
      },
      hide: function(init) {
         this.clearTimer();
         this.visible = false;
         if (!init) {
            typeof this.onClose === "function" ? this.onClose() : "";
         }
      },
      clearTimer: function() {
         if (this.timer) {
            clearTimeout(this.timer);
         }
      }
   }
};
</script>
