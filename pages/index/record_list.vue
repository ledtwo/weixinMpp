<template>
    <view>
        <view class="utoptab">
            <u-subsection
                :list="list"
                :current="current"
                active-color="#fff"
                inactive-color="#333"
                bg-color="#fff"
                button-color="#A897ED"
                font-size="30"
                height="96"
            ></u-subsection>
        </view>

        <view class="lists">
            <view class="listone dis-pl" v-for="(item, index) in 8" :key="index">
                <view class="timg"><image src="../../static/linshi/casour.jpg"></image></view>
                <view class="onerig">
                    <view class="rigtop dis-jasc">
                        <view class="rtlest">
                            <view class="rnotime dis-alicen">
                                <view class="">张三</view>
                                <view class="">已开奖</view>
                                <view class="">20200256018</view>
                            </view>
                            <view class="rigtime">2020-09-19</view>
                        </view>
                        <view class="btn" @click="show = true">号码明细</view>
                    </view>
                    <view class="rigbot">
                        <u-collapse :accordion="false" arrow-color="#D4D4D4">
                            <u-collapse-item title="只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来">
                                只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来
                            </u-collapse-item>
                        </u-collapse>
                    </view>
                </view>
            </view>
        </view>

        <u-popup v-model="show" mode="center" border-radius="20" :closeable="true" close-icon-color="#fff">
            <view class="showpop">
                <view class="toptile">号码明细</view>
                <scroll-view scroll-y="true"><view v-for="(item, index) in 56" :key="index">2XX6</view></scroll-view>
            </view>
        </u-popup>
    </view>
</template>

<script>
export default {
    data() {
        return {
            reqdata: {
                url: '/agent/user/bet/list',
                data: {
                    pageNo: 1,
                    length: 30,
                    sid: this.$utils.tokens
                }
            },
            show: false,
            lists: [
            ],
            current: 0
        };
    },
    methods: {
        getAllList() {
            debugger
            this.$utils.getRequest(this.reqdata, res => {
                console.log('下注列表:', res);
                debugger
                uni.stopPullDownRefresh();
                this.lists = res.data;
            });
        }
    },
    mounted(){
        this.getAllList()
    }
};
</script>

<style lang="less">
page {
    background-color: #f7fcff;
    padding-bottom: 10rpx;
}
.utoptab {
    width: 702rpx;
    margin: 24rpx;
}

.lists {
    width: 750rpx;
    padding: 24rpx;

    .listone {
        width: 100%;
        background-color: #fff;
        border-radius: 20rpx;
        padding: 26rpx 28rpx 18rpx 30rpx;
        margin-bottom: 24rpx;

        .timg {
            margin-right: 10rpx;
            image {
                width: 84rpx;
                height: 84rpx;
                border-radius: 50%;
            }
        }

        .onerig {
            .rigtop {
                width: 550rpx;
                align-items: flex-start;

                .rnotime {
                    view {
                        margin-right: 12rpx;
                        font-size: 32rpx;
                        color: #333;
                        &:nth-of-type(2) {
                            height: 36rpx;
                            line-height: 36rpx;
                            padding: 0 8rpx;
                            border-radius: 8rpx;
                            border: 1px solid #a29ffc;
                            font-size: 22rpx;
                            color: #a29ffc;
                        }
                        &:nth-of-type(3) {
                            height: 36rpx;
                            line-height: 36rpx;
                            padding: 0 8rpx;
                            border-radius: 8rpx;
                            border: 1px solid #fe9749;
                            font-size: 22rpx;
                            color: #fe9749;
                        }
                    }
                }
                .rigtime {
                    font-size: 22rpx;
                    color: #dad3ff;
                    margin-top: 12rpx;
                }
                .btn {
                    width: 142rpx;
                    height: 62rpx;
                    border-radius: 20rpx;
                    background-color: #9d9ffd;
                    line-height: 62rpx;
                    text-align: center;
                    font-size: 24rpx;
                    color: #fff;
                }
            }

            .rigbot {
                width: 550rpx;
            }
        }
    }
}

.showpop {
    width: 702rpx;

    .toptile {
        width: 702rpx;
        height: 88rpx;
        line-height: 88rpx;
        border-radius: 20rpx 20rpx 0 0;
        background: linear-gradient(180deg, #959af7 0%, #b397ea 100%);
        padding-left: 38rpx;
        font-size: 28rpx;
        color: #fff;
    }
    scroll-view {
        width: 702rpx;
        height: 1000rpx;
        padding: 10rpx 0 20rpx 40rpx;

        view {
            display: inline-block;
            padding: 0 32rpx;
            background-color: #f1ecff;
            border-radius: 10rpx;
            height: 54rpx;
            line-height: 54rpx;
            margin: 30rpx 30rpx 0 0;
            font-size: 28rpx;
            color: #9699f6;
        }
    }
}
</style>
