<template>
   <div id="app">
      <div v-show="path != '/'" class="index-head">
         <a href="javascript:;" @click="backFn" class="index-head-back">返回</a>
         <div class="index-head-name">{{ name }}</div>
         <div class="index-head-right"></div>
      </div>
      <router-view></router-view>
   </div>
</template>

<script>
export default {
   name: "App",
   data() {
      return {
         path: "/",
         name: "首页"
      };
   },
   methods: {
      backFn: function() {
         history.go(-1);
      }
   },
   watch: {
      $route(to, from) {
         const path = to.path;
         const data = {
            "/": "首页",
            "/button": "按钮",
            "/dialog": "对话框",
            "/toast": "吐司",
            "/notify": "消息提示",
            "/actionsheet": "动作面板",
            "/picker": "拾取器"
         };
         this.name = data[path];
         this.path = path;
      }
   }
};
</script>

<style lang="less">
.index {
   &-head {
      position: relative;
      width: 100%;
      display: flex;
      z-index: 100;
      height: 40px;
      -webkit-box-align: center;
      align-items: center;
   }

   &-head-name {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      font-size: 16px;
      text-align: center;
      font-weight: 700;
      line-height: 40px;
      text-align: center;
   }

   &-head-back {
      display: block;
      width: 45px;
      height: 45px;
      line-height: 45px;
      text-align: center;
   }

   &-head-right {
      width: 45px;
   }
}
</style>
