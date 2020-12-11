<template>
   <div class="actionsheet">
      <div class="actionsheet-warp">
         <div class="actionsheet-box">
            <div class="actionsheet-dt">基础用法</div>
            <div class="actionsheet-dd">
               <div class="item" @click="openRadioFn">
                  <div class="title">二选一</div>
                  <div class="val">{{ choose }}</div>
               </div>
               <div class="item" @click="show2 = true">
                  <div class="title">带取消按钮</div>
                  <div class="val">{{ choose2 }}</div>
               </div>
               <div class="item" @click="openDiyFn">自定义内容</div>
            </div>
         </div>
      </div>
      <yok-actionsheet
         :visible="show"
         @close="show = false"
         :menu-items="option"
         option-tag="tab"
         @choose="chooseFn"
      >
      </yok-actionsheet>
      <yok-actionsheet
         :visible="show2"
         @close="show2 = false"
         :menu-items="option2"
         @choose="choose2Fn"
         cancel-txt="取消"
      >
      </yok-actionsheet>
      <yok-actionsheet :visible="show3" @close="show3 = false">
         <div @click="show3 = false" class="content">
            <a href="javascript:;" class="close">关闭</a>
            这是自定义内容这是自定义内容这是自定义内容这容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容这是自定义内容
         </div>
      </yok-actionsheet>
   </div>
</template>

<script>
export default {
   data() {
      return {
         show: false,
         show2: false,
         show3: false,
         option: [
            {
               id: 1,
               tab: "火星"
            },
            {
               id: 2,
               tab: "地球"
            }
         ],
         choose: "",
         option2: [
            {
               id: 1,
               name: "男"
            },
            {
               id: 2,
               name: "女"
            }
         ],
         choose2: ""
      };
   },
   methods: {
      openFn: function() {
         this.show = true;
      },
      openRadioFn: function() {
         this.show = true;
      },
      chooseFn: function(item) {
         this.choose = item.tab;
         this.show = false;
      },
      choose2Fn: function(item) {
         this.choose2 = item.name;
         this.show2 = false;
      },
      openDiyFn: function() {
         this.show3 = true;
      }
   }
};
</script>

<style lang="less">
.actionsheet {
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
         display: flex;
         justify-content: space-between;
         .val {
            padding-right: 10px;
         }
      }
   }
   .content {
      padding: 10px;
      margin-top: 30px;
   }
   .close {
      position: absolute;
      color: red;
      right: 15px;
      top: 10px;
   }
}
</style>
