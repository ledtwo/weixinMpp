<template>
    <view>
        <view class="ttopbg"></view>
        <view class="theight"></view>
        <view class="navbox">
            <view class="inbox">
                <view :class="{ activd: index == activenum }" v-for="(item, index) in navlist" :key="index" @click="choseone(index)">{{ item }}</view>
            </view>
        </view>
        <u-toast ref="uToast" />
    </view>
</template>

<script>
export default {
    data() {
        return {
            navlist: ['幸运', '重庆', '新疆', '快乐8'],
            activenum: 0
        };
    },
    methods: {
        choseone(index) {
            if (index == 0) {
                this.activenum = index;
                this.$emit('usemethod', index);
            } else {
                this.$refs.uToast.show({
                    title: '功能未开放!',
                    type: 'warning'
                });
            }
        }
    },
    props: {}
};
</script>

<style lang="less">
.ttopbg {
    width: 750rpx;
    height: var(--status-bar-height);
    position: fixed;
    background-color: #f7fcff;
    top: 0;
    left: 0;
    z-index: 9999;
}
.theight {
    width: 750rpx;
    height: 90rpx;
    margin-top: var(--status-bar-height);
}
.navbox {
    width: 750rpx;
    height: 90rpx;
    background-color: #f7fcff;
    position: fixed;
    top: var(--status-bar-height);
    left: 0;
    z-index: 9999;
    color: #fff;
    display: flex;
    align-items: flex-end;

    .inbox {
        height: 68rpx;
        margin-left: 24rpx;
        background-color: #fff;
        border-radius: 34rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;

        view {
            width: 138rpx;
            height: 68rpx;
            border-radius: 34rpx;
            text-align: center;
            line-height: 68rpx;
            font-size: 28rpx;
            color: #333;
        }

        .activd {
            width: 138rpx;
            background: linear-gradient(180deg, #959af7 0%, #b397ea 100%);
            color: #fff;
        }
    }
}
</style>
