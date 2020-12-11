<template>
   <div>
      <transition name="yokFade">
         <div class="yok-mask" @click="cancel" v-show="visible"></div>
      </transition>
      <transition name="actionsheet">
         <div class="yok-actionsheet__warp" v-if="visible">
            <ul class="yok-actionsheet-menu">
               <li
                  class="yok-actionsheet-item"
                  v-for="item in menuItems"
                  @click="checkFn(item)"
               >
                  {{ item[optionTag] }}
               </li>
            </ul>
            <a
               href="javascript:;"
               class="yok-actionsheet-cancel"
               @click="cancel"
               v-if="cancelTxt"
               >{{ cancelTxt }}</a
            >
            <slot></slot>
         </div>
      </transition>
   </div>
</template>

<script>
export default {
   name: "yok-actionsheet",
   data() {
      return {
         name: "name"
      };
   },
   props: {
      visible: {
         type: Boolean,
         default: false
      },
      menuItems: {
         type: Array
      },
      optionTag: {
         type: String,
         default: "name"
      },
      cancelTxt: {
         type: String,
         default: ""
      }
   },
   methods: {
      cancel: function() {
         this.$emit("close");
      },
      checkFn: function(item) {
         this.$emit("choose", item);
      }
   },
   watch: {
      visible: function(val) {}
   }
};
</script>
