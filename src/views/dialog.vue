<template>
   <div class="dialog">
      <div class="dialog-warp">
         <div class="dialog-box">
            <div class="dialog-dt">基础用法</div>
            <div class="dialog-dd">
               <div class="item" @click="show = true">提示弹窗</div>
               <div class="item" @click="show2 = true">只有内容</div>
            </div>
         </div>
      </div>
      <yok-dialog
         title="这个标题如果很长怎么显示呢，超过一行了"
         :visible="show"
         @close="show = false"
      >
         <template v-slot:info>
            <div>
               这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功这是文案内功
            </div>
         </template>
         <template v-slot:footer>
            <div class="yok-dialog__footer">
               <div class="yok-dialog-btn yok-dialog-cancel" @click="closeFn">
                  取消
               </div>
               <div class="yok-dialog-btn yok-dialog-ok">确定</div>
            </div>
         </template>
      </yok-dialog>
      <yok-dialog :visible="show2" @close="show2 = false">
         <template v-slot:info>
            <div>
               只有内容
            </div>
         </template>
         <template v-slot:footer>
            <div class="yok-dialog__footer">
               <div
                  class="yok-dialog-btn yok-dialog-point"
                  @click="show2 = false"
               >
                  我知道了
               </div>
            </div>
         </template>
      </yok-dialog>
   </div>
</template>

<script>
export default {
   data() {
      return {
         show: false,
         show2: false
      };
   },
   methods: {
      closeFn: function() {
         this.show = false;
      }
   }
};
</script>

<style lang="less">
.dialog {
   background: #f7f8fa;
   padding: 0;
   margin: 0;

   &-warp {
   }

   &-box {
      width: 100%;
   }

   &-dt {
      color: rgba(69, 90, 100, 0.6);
      border-bottom: 1px solid #ccc;
      padding: 10px;
   }

   &-dd {
      background: #fff;
      padding: 0 10px;

      .item {
         padding: 10px 0;
         border-bottom: 1px solid #ccc;
         color: #333;
      }
   }
}
</style>
