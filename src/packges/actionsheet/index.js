import actionsheet from './actionsheet.vue'
import './actionsheet.less';
actionsheet.install = function (Vue) {
    Vue.component(actionsheet.name, actionsheet);
};
export default actionsheet;