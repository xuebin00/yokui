import Button from './button.vue'
import './button.less';
Button.install = function(Vue) {
    Vue.component(Button.name, Button);
};
export default Button;