<template>
    <view>
        <!-- 未登录 -->
        <view class="notlogin" v-show="show">
            <view class="logos">LOGO</view>
            <view class="inputs dis-alicen">
                <image src="../../static/phc.png"></image>
                <input type="text" placeholder="请输入网址" v-model="address" />
            </view>
            <view class="inputs dis-alicen" style="margin-top: 40rpx">
                <image src="../../static/phc.png"></image>
                <input type="text" placeholder="请输入账号" v-model="pho" />
            </view>
            <view class="inputs dis-alicen" style="margin-top: 40rpx">
                <image src="../../static/pwc.png"></image>
                <input type="text" password placeholder="请输入密码" v-model="pwd" />
            </view>
            <view class="remenpw dis-alicen" @click="remind">
                <image :src="reminimg"></image>
                <text>记住密码</text>
            </view>
            <view class="loginbtn" @click="logins">登录即可查看盘口数据</view>
        </view>

        <!-- 登录 -->
        <view v-if="!show">
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
                    @change="subcation"
                ></u-subsection>
            </view>

            <view class="lists" v-if="detail">
                <view class="listone">
                    <view class="onetop">
                        <view class="topone dis-jasc">
                            <text>本期号码</text>
                            <image src="../../static/tuic.png"></image>
                        </view>
                        <view class="toptil">幸运</view>
                        <view class="topnum">{{detail.currentNum}}</view>
                        <view class="toplast dis-jasc">
                            <text>{{$utils.formatDate(detail.openTime,true)}}</text>
                        </view>
                    </view>
                    <view class="onebot dis-jasc">
                        <view class="botime">更新时间：08/18 15:25:06</view>
                        <view class="botrig dis-alicen">
                            <text>开启飞单</text>
                            <u-switch size="40" v-model="checked" @change="switchs" active-color="#B199F7" inactive-color="#F3F3F3"></u-switch>
                        </view>
                    </view>
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
            detail:{},
            agentId: '',
            show: true,
            reminpw: true, //记住密码
            reminimg: '../../static/remenbc.png',
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
            checked: true,
            pho: '',
            pwd: '',
            address: ''
        };
    },
    onShow() {
        // this.current = uni.getStorageSync('topcheck');
        this.isntlogin();
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
                // debugger;
                if (res.length) {
                    this.agentId = res[0].agentId ? res[0].agentId : res[0].id;
                    uni.setStorageSync('agentId', JSON.stringify(this.agentId));
                    this.detail=res[0].roomVO
                }
            });
        },
        // 顶部切换判断是否登录
        isntlogin() {
            // accountone幸运  accountwo重庆  accounthree新疆  accountfour快乐8
            var status;
            switch (this.current) {
                case 0:
                    status = uni.getStorageSync('accountone');
                    break;
                case 1:
                    this.$refs.uToast.show({
                        title: '建设中!',
                        type: 'warning'
                    });
                    status = uni.getStorageSync('accountwo');
                    break;
                case 2:
                    this.$refs.uToast.show({
                        title: '建设中!',
                        type: 'warning'
                    });
                    status = uni.getStorageSync('accounthree');
                    break;
                case 3:
                    this.$refs.uToast.show({
                        title: '建设中!',
                        type: 'warning'
                    });
                    status = uni.getStorageSync('accountfour');
                    break;
            }
            if (status) {
                this.show = false;
            } else {
                this.show = true;
            }
        },
        // 记住密码
        remind() {
            if (this.reminpw) {
                this.reminpw = false;
                this.reminimg = '../../static/remenc.png';
            } else {
                this.reminpw = true;
                this.reminimg = '../../static/remenbc.png';
            }
        },
        // 导航切换
        subcation(e) {
            console.log(e);
            this.current = e;
            this.isntlogin();
        },
        switchs(num) {
            if (this.lists[num].checked) {
                this.$set(this.lists, num, {
                    checked: true
                });
            } else {
                this.$set(this.lists, num, {
                    checked: false
                });
            }
        },
        logins() {
            if (this.address == '' || this.address == ' ') {
                this.$refs.uToast.show({
                    title: '请输入网址!',
                    type: 'warning'
                });
                return;
            }
            if (this.pho == '' || this.pho == ' ') {
                this.$refs.uToast.show({
                    title: '请输入账号!',
                    type: 'warning'
                });
                return;
            }

            if (this.pwd == '' || this.pwd == ' ') {
                this.$refs.uToast.show({
                    title: '请输入密码!',
                    type: 'warning'
                });
                return;
            }
            
            var userinfo = {
                thirdPartyUserName: this.pho,
                thirdPartyPassward: this.pwd,
                thirdPartyUrl: this.address
            };

            var pram = {
                methods: 'POST',
                // url: 'agent/updateRoomStatus/' + this.agentId,
                url:"agent/pankou/login",
                data: {
                    agentRoomId:this.agentId,
                    thirdPartyUserName: this.pho,
                    thirdPartyPassward: this.pwd,
                    thirdPartyUrl: this.address,
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(pram, res => {
                console.log('盘口登录:', res);
                // debugger;
                if (res.succeeded) {
                    this.show = false;
                    // 记住密码
                    if (this.reminpw) {
                        switch (this.current) {
                            case 0:
                                uni.setStorageSync('accountone', JSON.stringify(userinfo));
                                break;
                            case 1:
                                uni.setStorageSync('accountwo', JSON.stringify(userinfo));
                                break;
                            case 2:
                                uni.setStorageSync('accounthree', JSON.stringify(userinfo));
                                break;
                            case 3:
                                uni.setStorageSync('accountfour', JSON.stringify(userinfo));
                                break;
                        }
                    }
                    this.$refs.uToast.show({
                        title: '操作成功!',
                        type: 'success'
                    });
                }
            });
        }
    }
};
</script>

<style lang="less">
page {
    background-color: #f6fbfe;
    padding-bottom: 20rpx;
}

.notlogin {
    .logos {
        text-align: center;
        font-size: 40rpx;
        color: #9e9ffd;
        margin-top: 200rpx;
    }
    .inputs {
        width: 668rpx;
        height: 60rpx;
        margin: 0 auto;
        margin-top: 130rpx;
        border-bottom: 1px solid #f6f6f6;
        image {
            width: 26rpx;
            height: 36rpx;
        }
        input {
            width: 600rpx;
            height: 60rpx;
            line-height: 60rpx;
            padding-left: 22rpx;
            font-size: 26rpx;
            color: #333;
        }
    }

    .remenpw {
        font-size: 22rpx;
        color: #999;
        padding: 38rpx 0 0 42rpx;
        image {
            width: 36rpx;
            height: 36rpx;
            margin-right: 20rpx;
        }
    }

    .loginbtn {
        width: 690rpx;
        height: 90rpx;
        line-height: 90rpx;
        text-align: center;
        background-color: #9e9ffd;
        border-radius: 50rpx;
        font-size: 32rpx;
        color: #fff;
        margin: 0 auto;
        margin-top: 90rpx;
    }
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
        margin-bottom: 24rpx;
        background-color: #fff;
        border-radius: 20rpx;

        .onetop {
            width: 100%;
            background-color: #e5e1fc;
            border-radius: 20rpx 20rpx 0 0;
            padding: 22rpx 34rpx 32rpx 26rpx;
            font-size: 28rpx;
            color: #b9b4e4;

            .topone {
                image {
                    width: 28rpx;
                    height: 28rpx;
                }
            }
            .toptil {
                text-align: center;
            }

            .topnum {
                font-size: 60rpx;
                font-weight: 600;
                color: #6d5ede;
                text-align: center;
            }

            .toplast {
                margin-top: 34rpx;
            }
        }

        .onebot {
            width: 100%;
            height: 76rpx;
            padding: 0 36rpx 0 26rpx;
            font-size: 26rpx;
            color: #999;
            text {
                margin-right: 8rpx;
            }
        }
    }
}
</style>
