import picker from './picker.vue'
import './picker.less';
picker.install = function (Vue) {
    Vue.component(picker.name, picker);
};
export default picker;