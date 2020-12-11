<template>
   <div>
      <transition name="yokFade">
         <div class="yok-mask" v-show="visible"></div>
      </transition>
      <transition name="dialog">
         <div class="yok-dialog" v-show="visible" @click.self="cancel">
            <div class="yok-dialog__warp">
               <div class="yok-dialog__body">
                  <div class="yok-dialog__title">{{ title }}</div>
                  <div class="yok-dialog__content">
                     <slot name="info"></slot>
                  </div>
               </div>
               <slot name="footer"></slot>
            </div>
         </div>
      </transition>
   </div>
</template>

<script>
export default {
   name: "yok-dialog",
   data() {
      return {};
   },
   props: {
      canceltext: {
         type: String,
         default: "取消"
      },
      oktext: {
         type: String,
         default: "确定"
      },
      title: {
         type: String,
         default: ""
      },
      visible: {
         type: Boolean,
         default: false
      }
   },
   methods: {
      cancel: function() {
         this.$emit("close");
      }
   },
   watch: {
      visible: function(val) {}
   }
};
</script>
