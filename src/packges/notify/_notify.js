import Vue from 'vue';
import settings from './notify.vue';

let NotifyConstructor = Vue.extend(settings)
let instance;
let instanceArr = [];
let id=0;
const defaultOptions = {
    msg:'',
    duration: 3000, //显示时间(毫秒)
    visible:false,
    center:'',
    type:'',
    onClose:null
}
let currentOptions = {
    ...defaultOptions
}


function showNotify(ops){
    if(!ops.notifyStyle){
        currentOptions.notifyStyle = null
    }
    Object.assign(currentOptions,ops)
    if(instanceArr[id]){
        instance = instanceArr[id];
        instance.data = currentOptions;
        instance.hide(true);
    }else{
        instance = new NotifyConstructor({
            data:currentOptions
        });
        instance = Object.assign(instance, ops);
        instanceArr[id] = instance
    }
    instance.vm = instance.$mount();
    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
        instance.show();
    });
}

let Notify = {
    'primary':function(msg,ops){
        showNotify({
            msg,
            type:'primary',
            ...ops,
        })
    },
    'success':function(msg,ops){
        showNotify({
            msg,
            type:'success',
            ...ops,
        })
    },
    'warning':function(msg,ops){
        showNotify({
            msg,
            type:'warning',
            ...ops,
        })
    },
    'danger':function(msg,ops){
        showNotify({
            msg,
            type:'danger',
            ...ops,
        })
    }
}

export default Notify;

