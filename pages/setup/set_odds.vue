<template>
    <view>
        <view class="utoptab" v-if="roomlist.length!=0">
            <u-subsection
                :list="roomlist"
                :current="current"
                active-color="#fff"
                inactive-color="#333"
                bg-color="#fff"
                button-color="#A897ED"
                font-size="30"
                height="96"
                @change="sectionChange"
            ></u-subsection>
        </view>

        <view class="lists">
            <view class="listone" v-for="(item, index) in listarr" :key="index">
                <view class="onetop dis-jasc">
                    <view class="fonts">{{ item.name }}</view>
                    <input type="text" placeholder="请输入" v-model="item.odds" />
                    <view class="btn" @click="updateOdds(item)">保存</view>
                </view>
                <view class="onebot dis-jasc">
                    <view class="">最大限额</view>
                    <input type="number" placeholder="请输入" v-model="item.max" />
                    <view class="">最小限额</view>
                    <input type="number" placeholder="请输入" v-model="item.min" />
                </view>
            </view>
        </view>
        <u-toast ref="uToast" />
    </view>
</template>

<script>
export default {
    data() {
        return {
            roomlist:[],
            roomId:1,
            list: [
                {
                    name: '幸运'
                },
                {
                    name: '重庆'
                },
                {
                    name: '新疆'
                },
                {
                    name: '快乐8'
                }
            ],
            current: 0,
            listarr: [],
            oddName: [
                {
                    code: 'Three_Show',
                    name: '三字现'
                },
                {
                    code: 'Four_Decide',
                    name: '四字定'
                },
                {
                    code: 'Two_Show',
                    name: '二字现'
                },
                {
                    code: 'Two_Decide',
                    name: '二字定'
                },
                {
                    code: 'Five_Two_Decide',
                    name: '五位二定'
                },
                {
                    code: 'Four_Show',
                    name: '四字现'
                },
                {
                    code: 'Three_Decide',
                    name: '三字定'
                },
                {
                    code: 'One_Decide',
                    name: '一字定'
                }
            ]
        };
    },
    onShow() {},
    onLoad() {
        this.getRoomList();
    },
    methods: {
        // 获取房间信息
        getRoomList() {
            var pram = {
                url: 'agent/agentRoom',
                data: {
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(pram, res => {
                var roomlist = [];
                if (res) {
                    res.forEach(item => {
                        roomlist.push({
                            name: item.roomVO.name,
                            id:item.id
                        });
                    });
                }
                this.roomlist = roomlist;
                this.roomId = roomlist[this.current].id;
                this.getOddsList();
            });
        },
        sectionChange(index) {
            if (index == 0) {
                this.current = index;
                this.roomId = this.roomlist[index].id
                this.getOddsList();
            } else {
                this.current = 0;
                this.$refs.uToast.show({
                    title: '功能未开放!',
                    type: 'warning'
                });
            }
        },
        getOddsList() {
            var pram = {
                url: 'agent/odds/'+this.roomId,
                methods: 'GET',
                data: {
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(pram, res => {
                var list = [];
                for (let i in res) {
                    this.oddName.forEach(item => {
                        if (item.code == res[i].modeType) {
                            res[i].name = item.name;
                        }
                    });
                    list.push(res[i]);
                }
                this.listarr = list;
            });
        },
        updateOdds(item) {
            var pram = {
                url: 'agent/oddsUpdate/'+this.roomId,
                methods: 'POST',
                data: {
                    sid: this.$utils.tokens,
                    odds: item.odds,
                    min: item.min,
                    max: item.max,
                    modeType: item.modeType
                }
            };
            this.$utils.getRequest(pram, res => {
                if (res.succeeded) {
                    this.$refs.uToast.show({
                        title: '赔率更新成功!',
                        type: 'success'
                    });
                } else {
                    this.$refs.uToast.show({
                        title: '赔率更新失败!',
                        type: 'error'
                    });
                }
                this.getOddsList();
            });
        }
    }
};
</script>

<style lang="less">
page {
    background-color: #f7fcff;
    padding-bottom: 30rpx;
}
.utoptab {
    width: 702rpx;
    margin: 24rpx;
}

.lists {
    width: 750rpx;
    padding: 0 24rpx;

    .listone {
        width: 702rpx;
        background-color: #fff;
        border-radius: 10rpx;
        margin-bottom: 24rpx;
        padding: 18rpx 24rpx;

        .onetop {
            width: 100%;

            .fonts {
                font-size: 30rpx;
                color: #333;
            }
            input {
                width: 320rpx;
                height: 64rpx;
                line-height: 64rpx;
                border: 1px solid #ddd7ff;
                border-radius: 10rpx;
                padding-left: 20rpx;
                font-size: 24rpx;
            }
            .btn {
                width: 140rpx;
                height: 72rpx;
                line-height: 72rpx;
                text-align: center;
                background-color: #9d9ffd;
                font-size: 28rpx;
                color: #fff;
                border-radius: 20rpx;
            }
        }
        .onebot {
            margin-top: 36rpx;
            view {
                font-size: 24rpx;
                color: #333;
            }
            input {
                width: 180rpx;
                height: 52rpx;
                line-height: 52rpx;
                border: 1px solid #ddd7ff;
                border-radius: 10rpx;
                padding-left: 16rpx;
                font-size: 20rpx;
            }
        }
    }
}
</style>
