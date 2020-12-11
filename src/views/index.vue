<template>
   <div>
      <div class="menu-title">YokUi</div>
      <div class="menu-box">
         <div class="dt">数据录入</div>
         <div class="dd">
            <yok-button>Calendar 日历</yok-button>
            <yok-button>DatePicker 日期选择</yok-button>
            <yok-button>Switch 开关</yok-button>
            <yok-button @click="go('/picker')">Picker 拾取器</yok-button>
            <yok-button>Radio 单选</yok-button>
            <yok-button>CheckBox 多选</yok-button>
         </div>
         <div class="dt">操作反馈</div>
         <div class="dd">
            <yok-button @click="go('/dialog')">Dialog 对话框</yok-button>
            <yok-button @click="go('/toast')">Toast 吐司</yok-button>
            <yok-button @click="go('/actionsheet')"
               >ActionSheet 动作面板</yok-button
            >
            <yok-button @click="go('/notify')">Notify 消息提示</yok-button>
         </div>
         <div class="dt">基础</div>
         <div class="dd">
            <yok-button>Icon 图标</yok-button>
            <yok-button @click="go('/button')">Button 按钮</yok-button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Index",
   data() {
      return {};
   },
   methods: {
      go(url) {
         console.log(this.$router);
         this.$router.push(url);
      }
   }
};
</script>

<style lang="less">
.menu-title {
   font-size: 18px;
   font-weight: 600;
   text-align: center;
   padding-top: 30px;
}

.menu {
   &-box {
      text-align: center;

      .dt {
         padding: 30px 0 10px;
      }

      .dd {
         .yok-button {
            width: 100%;
            margin-bottom: 5px;
         }
      }
   }
}
</style>
