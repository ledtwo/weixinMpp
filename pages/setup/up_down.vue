<template>
    <view>
        <view class="lists">
            <view class="center-v" v-show="lists.length == 0">暂无数据</view>
            <view class="listone" v-for="(item, index) in lists" :key="index">
                <view class="onetop dis-jasc">
                    <!-- <text>{{$utils.formatDate(item.createdTime)}}</text> -->
                    <text>{{item.modifiedTime}}</text>
                    <text class="foncor">{{ item.updown }}</text>
                </view>
                <view class="ontbot dis-jasc">
                    <view class="botlef dis-alicen">
                        <image :src="item.thumb"></image>
                        <view class="anthimg">
                            <view>{{item.name}}</view>
                            <text>积分类型</text>
                        </view>
                    </view>
                    <view class="botrig">{{ item.num }}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            reqdata: {
                url: 'agent/integral/request/journal/list',
                data: {
                    pageNo: 1,
                    length: 30,
                    sid: this.$utils.tokens
                }
            },
            lists: [
                // {
                //     updown: '上分',
                //     num: '502.9'
                // },
                // {
                //     updown: '上分',
                //     num: '502.9'
                // },
                // {
                //     updown: '下分',
                //     num: '506.9'
                // },
                // {
                //     updown: '上分',
                //     num: '507.9'
                // },
                // {
                //     updown: '上分',
                //     num: '502.9'
                // },
                // {
                //     updown: '下分',
                //     num: '506.9'
                // },
                // {
                //     updown: '上分',
                //     num: '507.9'
                // }
            ]
        };
    },
    onReachBottom() {
        this.reqdata.data.pageNo++;
        this.getAllList();
    },
    methods: {
        getAllList() {
            this.$utils.getRequest(this.reqdata, res => {
                uni.stopPullDownRefresh();
				var list=[]
				res.data.forEach(item=>{
					list.push({
						updown:item.source=="Add"?"上分":"下分",
						num:item.userVO.integral,
						thumb:item.userVO.thumb,
						name:item.userVO.name,
						modifiedTime:this.$utils.formatDate(item.userVO.modifiedTime)
					})
				})
                this.lists = this.lists.concat(list);
            });
        }
    },
    mounted() {
        this.getAllList();
    }
};
</script>

<style lang="less">
page {
    background-color: #f7fcff;
    padding-bottom: 10rpx;
}

.center-v {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.lists {
    width: 750rpx;
    padding: 24rpx;

    .listone {
        width: 100%;
        height: 220rpx;
        margin-bottom: 24rpx;
        background-color: #fff;
        border-radius: 20rpx;
        padding: 20rpx 30rpx 24rpx 32rpx;

        .onetop {
            width: 100%;
            font-size: 24rpx;
            color: #dad3ff;

            .foncor {
                font-size: 32rpx;
                font-weight: 600;
                color: #9d9ffd;
            }
        }

        .ontbot {
            width: 100%;
            align-items: flex-end;
            margin-top: 10rpx;
            .botlef {
                image {
                    width: 84rpx;
                    height: 84rpx;
                    border-radius: 50%;
                    margin-right: 20rpx;
                }

                .anthimg {
                    font-size: 32rpx;
                    color: #333;
                    text {
                        font-size: 24rpx;
                        margin-top: 12rpx;
                        color: #bcbcbc;
                    }
                }
            }

            .botrig {
                font-size: 36rpx;
                font-weight: 600;
                color: #fe9749;
            }
        }
    }
}
</style>
