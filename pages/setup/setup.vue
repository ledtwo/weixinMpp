<template>
    <view>
        <view class="boxs dis-jasc">
            <view class="tile">账号</view>
            <view class="tirig">
                <text>{{ account }}</text>
                (到期时间：{{ effectiveEndTime }})
            </view>
        </view>

        <view class="boxs dis-jasc mtop" @click="clickone(6)">
            <view class="tile">修改密码</view>
            <u-icon name="arrow-right" color="#999" size="28"></u-icon>
        </view>

        <view class="boxs dis-jasc mtop">
            <view class="tile">私聊下注开关</view>
            <u-switch size="40" v-model="checked" @change="switchs" active-color="#B199F7" inactive-color="#F3F3F3"></u-switch>
        </view>

        <view class="opendown">
            <view class="odtile dis-jasc" @click="showrome = !showrome">
                <view class="tile">房间开关</view>
                <u-icon :name="showrome ? 'arrow-down' : 'arrow-right'" color="#999" size="28"></u-icon>
            </view>
            <view class="lists" v-show="showrome">
                <view class="odlist dis-jasc" v-for="(item, index) in roomlist" :key="index">
                    <view class="onetile">{{ item.tiles }}</view>
                    <view class="onerig dis-alicen">
                        <view class="rigle dis-alicen">
                            <image @click="roomchose(index)" :src="item.chose ? '../../static/remenbc.png' : '../../static/remenc.png'"></image>
                            <view class="timbox dis-jasc" @click="selecone(index)">
                                <text>{{ item.text }}</text>
                                <u-icon name="arrow-down" color="#999" size="24"></u-icon>
                            </view>
                        </view>
                        <u-switch size="40" v-model="item.flag" @change="switchRooms(index)" active-color="#B199F7" inactive-color="#F3F3F3"></u-switch>
                    </view>
                </view>
            </view>
        </view>

        <view class="boxs dis-jasc mtop" v-for="(item, index) in list" :key="index" @click="clickone(index)">
            <view class="tile">{{ item.tiles }}</view>
            <u-icon name="arrow-right" color="#999" size="28"></u-icon>
        </view>

        <view class="retus dis-jacc" @click="comout">
            <image src="../../static/tui.png"></image>
            <text>退出登录</text>
        </view>

        <u-popup v-model="showpops" mode="center" border-radius="20" :closeable="true" close-icon-color="#fff">
            <view class="showpop">
                <view class="toptile">{{ poptile }}</view>

                <!-- 修改密码 -->
                <view class="changpw" v-show="addpwd">
                    <view class="inputs dis-alicen" style="margin-top: 0;">
                        <view class="dis-jacc"><image src="../../static/pw.png"></image></view>
                        <input type="text" placeholder="请输入原密码" password v-model="oldPassword" />
                    </view>
                    <view class="inputs dis-alicen">
                        <view class="dis-jacc"><image src="../../static/pw.png"></image></view>
                        <input type="text" placeholder="请输入新密码" password v-model="newPassword" />
                    </view>
                    <view class="surbtn" @click="mudifyPwd">确定</view>
                </view>

                <!-- 添加假人 -->
                <view class="addpeo" v-show="!addpwd">
                    <view class="addimg dis-jacc"><image :src="suijimg"></image></view>
                    <view class="addbtn" @click="suijic">随机更换头像</view>
                    <view class="addinput dis-jasc">
                        <text>假人昵称</text>
                        <input type="text" placeholder="请输入假人名称" v-model="userName" />
                    </view>
                    <view class="addsure" @click="addjiaren">确定添加</view>
                </view>
            </view>
        </u-popup>

        <u-modal v-model="show" title="提示" show-cancel-button content="是否清空流水?" @confirm="surebtn" @cancel="show = false"></u-modal>

        <u-select v-model="showselect" :list="seleclist" value-name="value" label-name="label" @confirm="selecs" @cancel="showselect = false"></u-select>
        <u-toast ref="uToast" />
    </view>
</template>

<script>
export default {
    data() {
        return {
            suijimg: '',
            account: '',
            effectiveEndTime: '', //到期时间
            showselect: false, //单选
            showpops: false,
            showrome: false, //显示房间列表
            roomenum: 0, //点击第几个模式
            addpwd: false, //true修改密码 false添加假人
            poptile: '修改密码',
            show: false,
            oldPassword: '', //原密码
            newPassword: '', //新密码
            userName: '', //添加假人名称
            checked: false,
            list: [
                {
                    tiles: '赔率设置'
                },
                {
                    tiles: '添加假人'
                },
                {
                    tiles: '清空流水'
                },
                {
                    tiles: '拉黑列表'
                },
                {
                    tiles: '上下分记录'
                },
                {
                    tiles: '订单中心'
                }
            ],
            roomlist: [
                //房间开关列表
                {
                    tiles: '幸运五星',
                    chose: true, //是否选中
                    flag: true, //是否开启
                    text: '24小时模式'
                },
                {
                    tiles: '重庆时时彩',
                    chose: true,
                    flag: true,
                    text: '9点-4点模式'
                },
                {
                    tiles: '天津时时彩',
                    chose: false,
                    flag: true,
                    text: '9点-4点模式'
                },
                {
                    tiles: '北京快乐 8',
                    chose: true,
                    flag: false,
                    text: '24小时模式'
                }
            ],
            seleclist: [
                {
                    value: '1',
                    label: '24小时模式'
                },
                {
                    value: '2',
                    label: '9点-4点模式'
                }
            ]
        };
    },
    onLoad() {
        this.getinfo();
        this.suijic();
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
                var roomList = [];
                if (res) {
                    res.forEach(item => {
                        let text='';
                        if(item.startHour&&item.endHour){
                            if(item.startHour==0&&item.endHour==24){
                                text="24小时模式"
                            }else if(item.startHour==9&&item.endHour==4){
                                text="9点-4点模式"
                            }else{
                                text="24小时模式"
                            }
                        }else{
                            text="24小时模式"
                        }
                        roomList.push({
                            tiles: item.roomVO.name,
                            flag: item.status == 'Opened' ? true : false,
                            chose: true,
                            text: text,
                            id: item.id,
                            flyOrder:item.flyOrder,
                            thirdPartyUserName:item.thirdPartyUserName,
                            thirdPartyPassward:item.thirdPartyPassward,
                            thirdPartyUrl:item.thirdPartyUrl,
                            status:item.status
                        });
                    });
                }
                this.roomlist = roomList;
            });
        },
        // 获取用户信息
        getinfo() {
            var pram = {
                url: 'agent/agentInfo',
                data: {
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(pram, res => {
                this.account = res.account;
                this.effectiveEndTime = this.$utils.formatDate(res.effectiveEndTime);
                if (res.permitPrivateChat == 1) {
                    this.checked = true;
                } else {
                    this.checked = false;
                }
            });
        },
        clickone(index) {
            switch (index) {
                case 0:
                    uni.navigateTo({
                        url: 'set_odds'
                    });
                    break;
                case 1:
                    this.showpops = true;
                    this.addpwd = false;
                    this.poptile = '添加假人';
                    break;
                case 2:
                    this.show = true;
                    break;
                case 3:
                    this.$refs.uToast.show({
                        title: '建设中!',
                        type: 'warning'
                    });
                    // uni.navigateTo({
                    //     url: 'to_block'
                    // });
                    break;
                case 4:
                    uni.navigateTo({
                        url: 'up_down'
                    });
                    break;
                case 5:
                    uni.navigateTo({
                        url: 'orders'
                    });
                    break;
                case 6:
                    this.showpops = true;
                    this.addpwd = true;
                    this.poptile = '修改密码';
                    break;
            }
        },
        //修改密码
        mudifyPwd() {
            var pram = {
                url: 'agent/updatePassword',
                methods: 'POST',
                data: {
                    sid: this.$utils.tokens,
                    oldPassword: this.oldPassword,
                    password: this.newPassword
                }
            };
            this.$utils.getRequest(pram, res => {
                if (res.succeeded) {
                    this.$refs.uToast.show({
                        title: '密码修改成功!',
                        type: 'success'
                    });
                    this.showpops = false;
                    this.oldPassword = '';
                    this.newPassword = '';
                } else if ((res.responseCode = 'INCORRECT_PASSWORD')) {
                    this.$refs.uToast.show({
                        title: '原密码不正确!',
                        type: 'warning'
                    });
                } else {
                    this.$refs.uToast.show({
                        title: '系统异常!',
                        type: 'warning'
                    });
                }
            });
        },
        // 添加假人
        addjiaren() {
            var su = Math.ceil(Math.random() * 10);
            var suijimg = 'http://qd.tskp1i6.cn/static/img/thumb/pic-' + su * su * su + '.jpg';
            var pram = {
                url: 'agent/user/addMockUser',
                methods: 'POST',
                data: {
                    userName: this.userName,
                    thumb: suijimg,
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(pram, res => {
                if (res.succeeded) {
                    console.log('添加假人:', res);
                    this.$refs.uToast.show({
                        title: '添加成功!',
                        type: 'success'
                    });
                    this.userName = '';
                    this.showpops = false;
                }
            });
        },
        suijic() {
            var su = Math.ceil(Math.random() * 10);
            this.suijimg = 'http://qd.tskp1i6.cn/static/img/thumb/pic-' + su * su * su + '.jpg';
        },
        // todo
        switchRooms(num) {
            let status = this.roomlist[num].flag ? "Opened" : "Closed";
            // 是否关闭房间
            let roomId = this.roomlist[num].id;
            var pram = {
                methods:'POST',
                url: 'agent/updateRoomStatus/' + roomId,
                data: {
                    status: status,
                    sid: this.$utils.tokens
                }
            }
            this.$utils.getRequest(pram, res => {
                console.log('房间操作:', res);
                if (res.succeeded) {
                    this.showuser = false;
                    this.$refs.uToast.show({
                        title: '操作成功!',
                        type: 'success'
                    });
                }
            });
        },
        switchs(e) {
            var permitPrivateChat;
            if (e) {
                permitPrivateChat = 1;
            } else {
                permitPrivateChat = 0;
            }
            var pram = {
                url: 'agent/update',
                methods: 'POST',
                data: {
                    sid: this.$utils.tokens,
                    permitPrivateChat: permitPrivateChat
                }
            };
            this.$utils.getRequest(pram, res => {
                if (res.succeeded) {
                    this.$refs.uToast.show({
                        title: e ? '开启私聊!' : '关闭私聊!',
                        type: 'success'
                    });
                }
            });
            console.log(this.roomlist);
        },
        // 确认清空流水
        surebtn() {
            var pram = {
                url: 'agent/user/clearIntegral',
                methods: 'POST',
                data: {
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(pram, res => {
                // console.log("清空流水:",res);
                if (res.succeeded) {
                    this.$refs.uToast.show({
                        title: '流水已清空!',
                        type: 'success'
                    });
                }
            });
        },
        // 房间列表是否选中
        roomchose(index) {
            // if (this.roomlist[index].chose) {
            //     this.roomlist[index].chose = false;
            // } else {
            //     this.roomlist[index].chose = true;
            // }
        },
        selecs(e) {
            let startHour,endHour;
            // let flyOrder=this.roomList[this.roomenum].flyOrder;
            // let thirdPartyUserName=this.roomList[this.roomenum].thirdPartyUserName;
            // let thirdPartyPassward=this.roomList[this.roomenum].thirdPartyPassward;
            // let thirdPartyUrl=this.roomList[this.roomenum].thirdPartyUrl;
            // let status=this.roomList[this.roomenum].status;
            if(e[0].value==1){
                startHour=0;
                endHour=24;
            }else{
                startHour=9;
                endHour=4
            }
            var pram = {
                url:"agent/updateRoomStatus/"+this.roomlist[this.roomenum].id,
                methods:"POST",
                data:{
                    sid:this.$utils.tokens,
                    startHour:startHour,
                    endHour:endHour,
                    // flyOrder:flyOrder,
                    // thirdPartyUserName:thirdPartyUserName,
                    // thirdPartyPassward:thirdPartyPassward,
                    // thirdPartyUrl:thirdPartyUrl,
                    // status:status
                }
            }
            this.$utils.getRequest(pram,res=>{
                if(res.succeeded){
                    this.$refs.uToast.show({
                        title: '更新成功!',
                        type: 'success'
                    });
                }else{
                    this.$refs.uToast.show({
                        title: '更新失败!',
                        type: 'error'
                    });
                }
            })
            this.roomlist[this.roomenum].text = e[0].label;
        },
        // 点击第几个单列
        selecone(index) {
            this.roomenum = index;
            this.showselect = true;
        },
        // 退出登录
        comout() {
            uni.clearStorageSync();
            this.$utils.tokens = '';
            setTimeout(() => {
                uni.reLaunch({
                    url: '../logins/logins'
                });
            }, 200);
        }
    }
};
</script>

<style lang="less">
page {
    background-color: #f7fcff;
    padding-bottom: 30rpx;
}
.boxs {
    width: 702rpx;
    height: 112rpx;
    background-color: #fff;
    border-radius: 20rpx;
    margin: 24rpx;
    padding: 0 30rpx;
    .tile {
        font-size: 32rpx;
        color: #333;
    }
    .tirig {
        font-size: 24rpx;
        color: #999;
        text {
            font-size: 32rpx;
            color: #9d9ffd;
            margin-right: 12rpx;
        }
    }
}

.opendown {
    width: 750rpx;
    padding: 0 24rpx;
    background-color: #fff;
    margin-bottom: 24rpx;

    .odtile {
        width: 100%;
        height: 112rpx;
        font-size: 32rpx;
        color: #333;
        padding: 0 28rpx 0 32rpx;
    }

    .lists {
        width: 100%;
        padding: 0 20rpx 0 34rpx;

        .odlist {
            width: 100%;
            height: 104rpx;
            border-bottom: 1px solid #f0f0f0;
            padding-right: 10rpx;

            .onetile {
                font-size: 28rpx;
                color: #999;
            }

            .onerig {
                .rigle {
                    margin-right: 24rpx;
                    image {
                        width: 36rpx;
                        height: 36rpx;
                        margin-right: 16rpx;
                    }
                    .timbox {
                        width: 190rpx;
                        height: 40rpx;
                        line-height: 40rpx;
                        border-radius: 6rpx;
                        border: 1px solid #9599f6;
                        padding: 0 10rpx;
                        font-size: 20rpx;
                        color: #9599f6;
                    }
                }
            }
        }
    }
}

.retus {
    width: 702rpx;
    height: 112rpx;
    border-radius: 20rpx;
    background-color: #ff8383;
    margin: 24rpx;
    font-size: 32rpx;
    color: #fff;

    image {
        width: 34rpx;
        height: 34rpx;
        margin-right: 14rpx;
    }
}
.mtop {
    margin-top: 0;
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

    .changpw {
        width: 100%;
        padding: 80rpx 42rpx 70rpx 42rpx;

        .inputs {
            width: 100%;
            height: 78rpx;
            border-radius: 10rpx;
            background-color: #f6f2ff;
            margin-top: 64rpx;
            view {
                width: 82rpx;
                height: 78rpx;
                line-height: 78rpx;
                text-align: center;
                background-color: #9d9ffd;
                border-radius: 10rpx 0 0 10rpx;

                image {
                    width: 30rpx;
                    height: 34rpx;
                }
            }
            input {
                width: 510rpx;
                height: 78rpx;
                line-height: 78rpx;
                padding-left: 24rpx;
                font-size: 24rpx;
            }
        }

        .surbtn {
            width: 100%;
            height: 80rpx;
            line-height: 80rpx;
            text-align: center;
            border-radius: 50rpx;
            background-color: #9599f6;
            font-size: 28rpx;
            color: #fff;
            margin-top: 76rpx;
        }
    }

    .addpeo {
        width: 100%;
        padding: 54rpx 28rpx 60rpx 34rpx;

        .addimg {
            width: 100%;
            image {
                width: 160rpx;
                height: 160rpx;
                border-radius: 50%;
            }
        }

        .addbtn {
            width: 208rpx;
            height: 60rpx;
            line-height: 60rpx;
            text-align: center;
            border-radius: 10rpx;
            background-color: #9d9ffd;
            font-size: 28rpx;
            color: #fff;
            margin: 36rpx auto;
            margin-bottom: 44rpx;
        }

        .addinput {
            width: 100%;
            height: 108rpx;
            border-top: 1px solid #efefff;
            border-bottom: 1px solid #efefff;
            font-size: 32rpx;
            color: #333;

            input {
                width: 470rpx;
                height: 80rpx;
                line-height: 80rpx;
                text-align: right;
                font-size: 32rpx;
                color: #9599f6;
                padding-right: 10rpx;
            }
        }

        .addsure {
            width: 100%;
            height: 80rpx;
            line-height: 80rpx;
            text-align: center;
            border-radius: 50rpx;
            background-color: #9599f6;
            font-size: 28rpx;
            color: #fff;
            margin-top: 50rpx;
        }
    }
}
</style>
