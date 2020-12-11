<template>
    <button
        class="yok-button"
        @click="handleClick"
        :disabled="buttonDisabled || loading"
        :type="nativeType"
        :class="[
            type ? 'yok-button--' + type : '',
            buttonSize ? 'yok-button--' + buttonSize : '',
            {
                'is-disabled': buttonDisabled || loading,
                'is-loading': loading,
                'is-plain': plain,
                'is-round': round
            }
        ]"
    >
        <i class="yok-icon-loading" v-if="loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script>
export default {
    name: 'yok-button',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: String,
        nativeType: {
            type: String,
            default: 'button'
        },
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        round: Boolean
    },

    computed: {
        _elFormItemSize() {
            return (this.elFormItem || {}).elFormItemSize;
        },
        buttonSize() {
            return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
        },
        buttonDisabled() {
            return this.disabled || (this.elForm || {}).disabled;
        }
    },
    mounted() {
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
}
</script>