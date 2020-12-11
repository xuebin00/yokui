import Button from './dialog.vue'
import './dialog.less';
Button.install = function(Vue) {
    Vue.component(Button.name, Button);
};
export default Button;