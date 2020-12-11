<template>
<div class="toast">
    <div class="toast-warp">
        <div class="toast-box">
            <div class="toast-dt">基础用法</div>
            <div class="toast-dd">
                <div class="item" @click="openFn('primary')">主要通知</div>
                <div class="item" @click="openFn('success')">成功通知</div>
                <div class="item" @click="openFn('danger')">危险通知</div>
                <div class="item" @click="openFn('warning')">警告通知</div>
                <div class="item" @click="diyFn">自定义样式</div>
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
        openFn: function (type) {
            this.$notify[type]('这个文字很长会怎么展示这个文字很长会怎么展示这个文字很长会怎么展示', {
                duration: 3000,
                size: 'small',
                onClose: function () {
                    console.log('关闭回调？？？')
                }
            })
        },
        diyFn: function () {
            this.$notify.success('自定义背景色', {
                duration: 2000,
                notifyStyle: {
                    'background-color': 'red',
                    'color': 'green'
                },
            })
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
