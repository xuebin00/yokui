<template>
<div class="toast">
    <div class="toast-warp">
        <div class="toast-box">
            <div class="toast-dt">基础用法</div>
            <div class="toast-dd">
                <div class="item" @click="openFn">文字提示</div>
            </div>
        </div>
        <div class="toast-box">
            <div class="toast-dt">加载提示</div>
            <div class="toast-dd">
                <div class="item" @click="loadingFn">Loading</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            show2: false
        }
    },
    methods: {
        openFn: function () {
            this.$toast.text('这个文字很长会怎么展示。。。这个文字很长会怎么展示。。。这个文字很长会怎么展示。。。', {
                duration: 1000,
                size: 'small',
                toastStyle: {
                    'background-color': 'red'
                },
                onClose: function () {
                    console.log('关闭回调？？？')
                }
            })
        },
        loadingFn: function () {
            this.$toast.loading('加载中...', {
                coverColor: "rgba(0,0,0,0.5)",
                closeOnClickOverlay: true
            })
        },
        closeFn: function () {
            this.show = false
        }
    },
}
</script>

<style lang="less">
.toast {
    background: #f7f8fa;
    padding: 0;
    margin: 0;

    &-warp {}

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
        }
    }
}
</style>
