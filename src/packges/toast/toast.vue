<template>
<transition name="toast">
    <div :id="id" :class="toastBodyClass" v-if="visible" :style="{
        bottom: center ? 'auto' : bottom + 'px',
        'background-color': coverColor,
      }" @click="clickCover">
        <div class="yok-toast-inner" :style="{
          'text-align': textAlignCenter ? 'center' : 'left',
          'background-color': bgColor,
          ...toastStyle,
        }">
            <span v-if="hasIcon" class="yok-toast-icon-wrapper">
                <i :class="['yok-toast-icon', type, { 'yok-toast-icon-rotate': type === 'loading' && loadingRotate }]" :style="{ 'background-image': cusIcon }"></i>
            </span>
            <span class="yok-toast-text" v-html="msg"></span>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: 'yok-toast',
    props: {},
    data() {
        return {
            id: '',
            msg: '',
            visible: false,
            duration: 2000, //显示时间(毫秒)
            timer: null,
            center: true,
            type: '',
            customClass: '',
            bottom: 30,
            icon: null,
            textAlignCenter: true,
            loadingRotate: true,
            bgColor: 'rgba(46, 46, 46, 0.7)',
            onClose: null,
            textTimer: null,
            cover: false,
            coverColor: 'rgba(0, 0, 0, 0)',
            toastStyle: {},
            closeOnClickOverlay: false,
        };
    },
    watch: {
        visible(val) {
            if (val) {
                this.show();
            }
        },
    },
    computed: {
        cusIcon() {
            return this.icon ? `url("${this.icon}")` : '';
        },
        toastBodyClass() {
            return [
                'yok-toast',
                {
                    'yok-toast-center': this.center
                },
                {
                    'yok-toast-has-icon': this.hasIcon
                },
                {
                    'yok-toast-cover': this.cover
                },
                {
                    'yok-loading': this.type == 'loading'
                },
                this.customClass,
                'yok-toast-' + this.size,
            ];
        },
        hasIcon() {
            if (this.type !== 'text') {
                return true;
            } else {
                return this.cusIcon;
            }
        },
    },
    methods: {
        show(force) {
            this.clearTimer();
            clearTimeout(this.textTimer);
            if (this.duration) {
                this.timer = setTimeout(() => {
                    this.hide(force);
                }, this.duration);
            }
        },
        hide(force) {
            this.clearTimer();
            this.visible = false;
            if (force) {
                clearTimeout(this.textTimer);
            } else {
                this.textTimer = setTimeout(() => {
                    clearTimeout(this.textTimer);
                    this.msg = '';
                }, 300);
            }
            typeof this.onClose === 'function' && this.onClose();
        },
        clearTimer() {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
        },
        clickCover() {
            if (this.closeOnClickOverlay) {
                this.hide();
            }
        },
    },
    destroyed() {
        this.textTimer = null;
        this.timer = null;
    },
};
</script>
