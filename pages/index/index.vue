<template>
    <view>
        <topsNav @usemethod="usemethod"></topsNav>

        <view class="bigbox">
            <view class="firstbox dis-jasc">
                <view class="firsone dis-fdjacc" v-for="(item, index) in somemun" :key="index">
                    <view>{{ item.til }}</view>
                    <view class="fffcol">{{ item.mon }}</view>
                </view>
            </view>

            <view class="firstbox dis-jasc" v-if="show">
                <view class="firsone dis-fdjacc" v-for="(item, index) in twomun" :key="index">
                    <view>{{ item.til }}</view>
                    <view class="fffcol">{{ item.mon }}</view>
                </view>
            </view>

            <view class="logins dis-jacc" v-if="!show">
                <view class="loginbtn dis-jacc" @click="wanglogin">
                    <text>登录网盘</text>
                    <u-icon name="arrow-right" color="#fff" size="28"></u-icon>
                </view>
            </view>

            <view class="bindsqun" v-if="showmore">
                <view class="bindsone dis-jasc" v-for="(item, index) in 2" :key="index">
                    <view class="onelist dis-alicen">
                        <view class="listimg dis-jacc"><image src="../../static/linshi/aaaa.jpg"></image></view>

                        <view class="listmsg dis-fdjcac">
                            <view class="listop dis-alicen">
                                <view>JHB654545</view>
                                <view class="bindbtn" @click="binds">绑定群聊</view>
                            </view>
                            <view class="listbo">账号：156</view>
                        </view>
                    </view>
                    <view class="oncerig"><image src="../../static/tui.png"></image></view>
                </view>
            </view>

            <view class="addsome dis-alicen" v-if="showmore" @click="addadmin">
                <image src="../../static/add.png"></image>
                <text>添加账号</text>
            </view>

            <view class="lastmore dis-jacc" @click="showmore = !showmore">
                <text>{{ showmore ? '点击隐藏' : '点击展开' }}</text>
                <u-icon :name="showmore ? 'arrow-up' : 'arrow-down'" color="#DAD3FF" size="28"></u-icon>
            </view>
        </view>

        <view class="friends dis-alicen" v-for="(item, index) in jifenlist" :key="index">
            <view class="imgs"><image :src="item.userVO.thumb"></image></view>
            <view class="fright">
                <view class="ritop dis-jasc">
                    <view class="onename ovfl-hieen">{{ item.userVO.name }}</view>
                    <view>{{ item.tims }}</view>
                </view>
                <view class="ribot dis-jasc">
                    <view class="botle">申请积分：{{ item.opType == 'Reduce' ? '下分' : '上分' }}{{ item.integral }}</view>
                    <view class="botri dis-alicen">
                        <view class="riagre" @click="agree(0, index)">同意</view>
                        <view class="riisnt" @click="agree(1, index)">忽略</view>
                    </view>
                </view>
            </view>
        </view>

        <view class="utabs">
            <u-tabs
                :list="list"
                :is-scroll="false"
                :current="current"
                height="100"
                font-size="30"
                active-color="#9791E9"
                inactive-color="#949A9A"
                bg-color="#F7FCFF"
                bar-width="72"
                bar-height="8"
                @change="change"
            ></u-tabs>
        </view>

        <!-- 玩家列表 -->
        <view class="lastlist" v-show="current == 0" @click="longtap = -1">
            <view class="listone dis-alicen" v-for="(item, index) in lastlists" :key="index" @longpress="showalert(index)">
                <view class="oneimg">
                    <image :src="item.thumb"></image>

                    <view class="flatbox" v-show="index == longtap">
                        <view class="boxleft dis-alicen">
                            <view @tap="listtap(0, index)">上下分</view>
                            <view @tap="listtap(1, index)">资料</view>
                            <view @tap="listtap(2, index)">报表</view>
                            <view @tap="listtap(3, index)">反水</view>
                        </view>
                        <view class="boxleft dis-alicen">
                            <view @tap="listtap(4, index)">记录</view>
                            <view @tap="listtap(5, index)">拉黑</view>
                            <view @tap="listtap(6, index)">链接</view>
                            <view @tap="listtap(7, index)" style="color:#FF8383">删除</view>
                        </view>
                    </view>
                </view>
                <view class="onecont">
                    <view class="onetop dis-jasc">
                        <view class="topleft dis-fw">
                            <view>{{ item.name }}</view>
                            <view class="flys" v-show="item.checked">飞</view>
                            <view class="updow">今日上分:33</view>
                            <view class="updow">今日下分:45</view>
                        </view>
                        <view class="uswitchs">
                            <u-switch size="40" v-model="item.checked" @change="switchs(index)" active-color="#B199F7" inactive-color="#F3F3F3"></u-switch>
                        </view>
                    </view>
                    <view class="onebot dis-jasc">
                        <view class="botleft dis-alicen">
                            <view>流水: {{ item.journal }}</view>
                            <view>盈亏：{{ item.costOrObtain }}</view>
                        </view>
                        <view class="botright">
                            <text>{{ item.integral }}</text>
                            积分
                        </view>
                    </view>
                </view>
            </view>

            <u-empty text="暂无数据" mode="favor" margin-top="30" v-if="lastlists.length == 0"></u-empty>
        </view>

        <!-- 假人列表 -->
        <view class="lastlist" v-show="current == 1" @click="longtapeo = -1">
            <view class="listone dis-alicen" v-for="(item, index) in notpeos" :key="index" @longpress="showalert(index)">
                <view class="oneimg">
                    <image :src="item.thumb"></image>

                    <view class="flatsbox dis-alicen" v-show="index == longtapeo">
                        <view @tap="listtap(0, index)">上下分</view>
                        <view style="color:#FF8383">删除</view>
                    </view>
                </view>
                <view class="onecont">
                    <view class="onetop dis-jasc">
                        <view class="topleft dis-fw">
                            <view>{{ item.name }}</view>
                            <view class="updow">今日上分:33</view>
                            <view class="updow">今日下分:45</view>
                        </view>
                    </view>
                    <view class="onebot dis-jasc">
                        <view class="botleft dis-alicen">
                            <view>流水: {{ item.journal }}</view>
                            <view>盈亏：{{ item.costOrObtain }}</view>
                        </view>
                        <view class="botright">
                            <text>{{ item.integral }}</text>
                            积分
                        </view>
                    </view>
                </view>
            </view>
            <u-empty text="暂无数据" mode="favor" margin-top="30" v-if="notpeos.length == 0"></u-empty>
        </view>

        <!-- 下注监控 -->
        <view v-if="current == 2">
            <view class="lists">
                <view class="listone dis-pl" v-for="(item, index) in betList" :key="index">
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
                            <view class="btn" @click="showxia = true">号码明细</view>
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
                <!-- <u-empty text="暂无数据" mode="favor" margin-top="30" v-show="notpeos.length == 0"></u-empty> -->
            </view>

            <u-popup v-model="showxia" mode="center" border-radius="20" :closeable="true" close-icon-color="#fff">
                <view class="showpop">
                    <view class="toptile">号码明细</view>
                    <scroll-view scroll-y="true"><view v-for="(item, index) in 56" :key="index">2XX6</view></scroll-view>
                </view>
            </u-popup>
        </view>

        <u-popup v-model="showpops" mode="center" border-radius="20" :closeable="true" close-icon-color="#fff">
            <view class="showpop">
                <view class="toptile">{{ poptile }}</view>

                <!-- 二维码 -->
                <view class="ercode" v-show="showone">
                    <view>1.请用另一台设备（可让身边好友帮忙）拍摄二维码</view>
                    <view class="codtwo">2.再用微信“扫一扫”对着另一台设备拍摄的二维码扫码</view>
                    <view class="codimg">
                        <view class="warn" v-show="wxLoadingFlag">{{ warningText }}</view>
                        <image :src="qrUrl"></image>
                    </view>

                    <view class="codtil dis-alicen">
                        <u-icon name="warning-fill" color="#FF7900" size="32"></u-icon>
                        <text>不支持微信内截图/长按识别扫码</text>
                    </view>
                    <view class="codte">小提示：</view>
                    <view class="codlas">1.扫码后，扫码微信号将变成机器人（不影响微信号正常使用）</view>
                </view>

                <!-- 登录密码 -->
                <view class="showlogin" v-show="!showone">
                    <view class="theone dis-alicen">
                        <view class="dis-jacc"><image src="../../static/pw.png"></image></view>
                        <input type="text" placeholder="请输入登录密码" />
                    </view>
                    <view class="thetwo dis-alicen">
                        <image src="../../static/remenbc.png"></image>
                        <text>下次自动登录</text>
                    </view>
                    <view class="makesurebtn">确定并登录</view>
                </view>
            </view>
        </u-popup>

        <u-popup v-model="showuser" mode="center" border-radius="20" :closeable="true" close-icon-color="#fff">
            <view class="showpop">
                <view class="toptile">{{ usertile }}</view>

                <!-- 上下分 -->
                <view class="updownf" v-if="usersnum == 0">
                    <view class="topqie dis-alicen">
                        <view :class="{ bgcs: upfen == 0 }" @click="upclci(0)">上分</view>
                        <view :class="{ bgcs: upfen == 1 }" @click="upclci(1)">下分</view>
                    </view>
                    <view class="iputs dis-jasc">
                        <text>{{ upfen == 0 ? '上分' : '下分' }}</text>
                        <view class="dis-alicen">
                            <input type="number" placeholder="请输入" v-model="downfen" />
                            <text>分</text>
                        </view>
                    </view>
                    <view class="makesurebtn" @click="makeupdown">确定</view>
                </view>

                <!-- 修改资料 -->
                <view class="msguser" v-if="usersnum == 1">
                    <view class="usehead dis-jacc"><image :src="suijimg"></image></view>
                    <view class="heabtn" @click="suijic">随机更换头像</view>
                    <view class="heaiput dis-jasc">
                        <text>昵称</text>
                        <input type="text" placeholder="请输入昵称" v-model="xiugaizi" />
                    </view>
                    <view class="makesurebtn" @click="surxiugai">确定</view>
                </view>

                <!-- 反水 -->
                <view class="retuwater" v-if="usersnum == 2">
                    <view class="reinput dis-jasc">
                        <text>反水比例</text>
                        <view class="dis-alicen">
                            <input type="text" value="" />
                            <text>%</text>
                        </view>
                    </view>
                    <view class="retils dis-alicen">
                        <u-icon name="warning-fill" color="#FF7900" size="32"></u-icon>
                        <text>温馨提示：反水比例按照10000流水基数，百分之几由自己设定，请在上方输入并保存！</text>
                    </view>
                    <view class="makesurebtn">保存</view>
                </view>
            </view>
        </u-popup>

        <u-toast ref="uToast" />
    </view>
</template>

<script>
import topsNav from '../../components/main_nav.vue';
export default {
    components: {
        topsNav
    },
    data() {
        return {
            uuid: '',
            qrUrl: '',
            wxTime: '', //超时时间
            wxLoadingFlag: true,
            warningText: '正在加载...',
            // 定时器
            checkFlag: '',
            // 分割线
            userid: '',
            topstatus: 0, //0幸运  1重庆  2新疆   3快乐8
            upfen: 0, //
            downfen: '', //上分下分
            usersnum: 0, //上下分0  修改资料1  反水2
            showuser: false, //长按弹框
            usertile: '', //长按弹框标题
            showpops: false, //弹框
            longtap: -1, //玩家列表长按弹出选择框
            longtapeo: -1, //假人列表长按弹出选择框
            showone: false,
            poptile: '二维码登录', //弹出框标题
            show: false,
            showmore: false,
            showxia: false, //下注监控号码明细
			betList:[],//下注监控列表
            somemun: [
                {
                    til: '合计',
                    mon: '3288.78'
                },
                {
                    til: '投注流水',
                    mon: '3288.78'
                },
                {
                    til: '中奖流水',
                    mon: '3288.78'
                }
            ],
            twomun: [
                {
                    til: '盘口余额',
                    mon: '3288.78'
                },
                {
                    til: '本期飞单',
                    mon: '3288.78'
                },
                {
                    til: '今日飞单',
                    mon: '3288.78'
                }
            ],
            list: [
                {
                    name: '玩家列表'
                },
                {
                    name: '假人列表'
                },
                {
                    name: '下注监控'
                }
            ],
            current: 0,
            lastlists: [],
            notpeos: [],
            jifenlist: [], //积分列表
            reqdata: {
                url: 'agent/user/list',
                data: {
                    pageNo: 1,
                    length: 30,
                    sid: this.$utils.tokens
                }
            },
            suijimg: '',
            xiugaizi: ''
        };
    },
    watch:{
        showpops(newVal){
            if(!newVal){
                clearInterval(this.checkFlag)
            }
        }
    },
    onLoad() {
        this.getBetTotal(); //获取代理积分统计
        this.getwanjia(); // 获取玩家列表
		this.getxiazhu();
    },
    onReachBottom() {
        this.reqdata.data.pageNo++;
        this.getwanjia();
    },
    onPullDownRefresh() {
        this.reqdata.data.pageNo = 1;
        this.lastlists.splice(0);
        this.notpeos.splice(0);
        this.getwanjia(); // 获取玩家列表
        this.getjifen(); // 获取积分请求列表
    },
    onShow() {
        // accountone幸运  accountwo重庆  accounthree新疆  accountfour快乐8
        this.isntlogin();
        this.getwanjia(); //获取玩家列表
        this.getjifen(); // 获取积分请求列表
    },
    methods: {
        //代理积分统计
        getBetTotal() {
            var pram = {
                url: 'agent/user/bet/total',
                methods: 'GET',
                data: {
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(pram, res => {
                this.somemun[0].mon = res.totalIntegral;
                this.somemun[1].mon = res.costTotalIntegral;
                this.somemun[2].mon = res.obtainTotalIntegral;
            });
        },
        //代理盘口积分统计
        getPankouTotal() {
            var pram = {
                url: 'agent/user/bet/pankou/total',
                methods: 'GET',
                data: {
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(pram, res => {
                this.twomun[0].mon = res.leftAmount;
                this.twomun[1].mon = res.periodTotalIntegral;
                this.twomun[2].mon = res.todayTotalIntegral;
            });
        },
        // 获取积分请求列表
        getjifen() {
            var pram = {
                url: 'agent/integral/request/list',
                methods: 'POST',
                data: {
                    pageNo: 1,
                    length: 10,
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(pram, res => {
                console.log('积分列表:', res);
                res.data.forEach(val => {
                    val.tims = this.$utils.formatDate(val.createdTime);
                });
                this.jifenlist = res.data;
            });
        },
        // 获取玩家列表
        getwanjia() {
            this.$utils.getRequest(this.reqdata, res => {
                console.log('玩家列表:', res);
                uni.stopPullDownRefresh();
                var data = res.data || [];
                data.forEach(val => {
                    val.checked = false;
                });
                for (let i = 0; i < data.length; i++) {
                    if (data[i].userType == 'Mock') {
                        this.notpeos.push(data[i]);
                    } else {
                        if (data[i].flyOrder == 1) {
                            data[i].checked = true;
                        } else {
                            data[i].checked = false;
                        }
                        this.lastlists.push(data[i]);
                    }
                }
            });
        },
        // 同意拒绝
        agree(num, nuns) {
            // 嗯，更新请求状态表(/agent/{requestId}/{status} （
            // Success, Failed）)这个是同意还是拒绝
            var pram;
            if (num == 0) {
                //同意 agent/integral/request/{requestId}/{status}   Success, Failed
                pram = {
                    url: 'agent/integral/request/' + this.jifenlist[nuns].id + '/' + 'Success',
                    // methods:"POST",
                    data: {
                        sid: this.$utils.tokens
                    }
                };
            } else {
                pram = {
                    url: 'agent/integral/request/' + this.jifenlist[nuns].id + '/' + 'Failed',
                    data: {
                        sid: this.$utils.tokens
                    }
                };
            }

            this.$utils.getRequest(pram, res => {
                this.getjifen();
                console.log('>>>>>>>>>>>', res);
            });
        },
        // 获取下注监控列表
        getxiazhu() {
            var pram = {
                url: 'agent/user/bet/list',
				methods:"POST",
                data: {
                    pageNo: 1,
                    length: 10,
                    period: 1, //期号
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(pram, res => {
                console.log('下注监控列表:', res);
            });
        },
        // 顶部切换
        usemethod(e) {
            this.topstatus = e;
            this.isntlogin();
        },
        // 顶部切换判断是否登录
        isntlogin() {
            // accountone幸运  accountwo重庆  accounthree新疆  accountfour快乐8
            var status;
            switch (this.topstatus) {
                case 0:
                    status = uni.getStorageSync('accountone');
                    break;
                case 1:
                    status = uni.getStorageSync('accountwo');
                    break;
                case 2:
                    status = uni.getStorageSync('accounthree');
                    break;
                case 3:
                    status = uni.getStorageSync('accountfour');
                    break;
            }
            if (status) {
                this.show = true;
            } else {
                this.show = false;
            }
        },
        switchs(num) {
            let flyOrder = this.lastlists[num].checked ? 1 : 0;
            // this.lastlists[num].checked = this.lastlists[num].checked?false:true;
            // 是否飞单
            this.userid = this.lastlists[num].id;
            var pram = {
                url: 'agent/user/update/' + this.userid,
                data: {
                    flyOrder: flyOrder,
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(pram, res => {
                console.log('修改信息:', res);
                if (res.succeeded) {
                    this.showuser = false;
                    this.$refs.uToast.show({
                        title: '修改成功!',
                        type: 'success'
                    });
                    // this.reqdata.data.pageNo = 1;
                    // this.lastlists.splice(0);
                    // this.notpeos.splice(0);
                    // this.getwanjia()
                }
            });
        },
        change(e) {
            this.current = e;
            this.longtap = -1;
            this.longtapeo = -1;
        },
        // 显示弹出框
        showalert(index) {
            if (this.current == 0) {
                this.longtap = index;
            } else if (this.current == 1) {
                this.longtapeo = index;
            }
        },
        // 弹出框列表事件
        listtap(index, num) {
            this.longtap = -1;
            switch (index) {
                case 0:
                    this.showuser = true;
                    this.usersnum = 0;
                    this.usertile = '上下分';
                    if (this.current == 0) {
                        this.userid = this.lastlists[num].id;
                    } else if (this.current == 1) {
                        this.userid = this.notpeos[num].id;
                    }
                    break;
                case 1:
                    this.showuser = true;
                    this.usersnum = 1;
                    this.usertile = '资料修改';
                    var su = Math.ceil(Math.random() * 10);
                    this.suijimg = 'http://my.fxfskhx.cn/static/img/thumb/pic-' + su * su * su + '.jpg';
                    if (this.current == 0) {
                        this.userid = this.lastlists[num].id;
                    } else if (this.current == 1) {
                        // this.userid = this.notpeos[num].id
                    }
                    break;
                case 2:
                    uni.navigateTo({
                        url: '../report_form/report_form'
                    });
                    console.log(this.lastlists[num].id);
                    break;
                case 3:
                    this.showuser = true;
                    this.usersnum = 2;
                    this.usertile = '反水';
                    console.log(this.lastlists[num].id);
                    break;
                case 4:
                    uni.navigateTo({
                        url: 'record_list'
                    });
                    console.log(this.lastlists[num].id);
                    break;
                case 7:
                    if (this.current == 0) {
                        this.userid = this.lastlists[num].id;
                    } else if (this.current == 1) {
                        this.userid = this.notpeos[num].id;
                    }
                    console.log(this.lastlists[num].id);
                    this.suSanchu();
                    // 删除
                    break;
            }
        },
        suijic() {
            var su = Math.ceil(Math.random() * 10);
            this.suijimg = 'http://my.fxfskhx.cn/static/img/thumb/pic-' + su * su * su + '.jpg';
        },
        suSanchu() {
            var pram = {
                url: 'agent/user/updateStatus/' + this.userid + '/Delete',
                data: {
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(pram, res => {
                console.log('删除玩家:', res);
                if (res.succeeded) {
                    this.$refs.uToast.show({
                        title: '删除成功!',
                        type: 'success'
                    });
                    setTimeout(() => {
                        this.reqdata.data.pageNo = 1;
                        this.lastlists.splice(0);
                        this.notpeos.splice(0);
                        this.getwanjia();
                    }, 500);
                }
            });
        },
        surxiugai() {
            var pram = {
                url: 'agent/user/update/' + this.userid,
                data: {
                    name: this.xiugaizi,
                    thumb: this.suijimg,
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(pram, res => {
                console.log('修改信息:', res);
                if (res.succeeded) {
                    this.showuser = false;
                    this.$refs.uToast.show({
                        title: '修改成功!',
                        type: 'success'
                    });
                    this.reqdata.data.pageNo = 1;
                    this.lastlists.splice(0);
                    this.notpeos.splice(0);
                    this.getwanjia();
                }
            });
        },
        // 上下分切换
        upclci(index) {
            this.upfen = index;
        },
        // 上下分确定
        makeupdown() {
            var pram = {
                url: 'agent/integral',
                methods: 'POST',
                data: {
                    userId: this.userid,
                    opType: this.upfen == 0 ? 'Add' : 'Reduce', //Add, Reduce
                    integral: this.downfen,
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(pram, res => {
                console.log('上下分:', res);
                if (res.succeeded) {
                    this.downfen = '';
                    this.showuser = false;
                    this.$refs.uToast.show({
                        title: '操作成功!',
                        type: 'success'
                    });
                }
            });
        },
        // 添加账号
        addadmin() {
            this.showpops = true;
            this.showone = true;
            this.poptile = '二维码登录';
            let reqConfig = {
                methods: 'POST',
                url: 'agent/account/getQrCodeUrl',
                data: {
                    sid: this.$utils.tokens
                }
            };
            this.$utils.getRequest(reqConfig, res => {
                console.log('二维码信息:', res);
                this.qrUrl = res.qrUrl;
                this.uuid = res.uuid;
                this.wxTime = res.expiredTime;
                this.refreshIsLogin();
            });
        },
        hideWxLoadingFlag() {
            this.wxLoadingFlag = false;
        },
        // 检查二维码是否已经登录
        refreshIsLogin() {
            let reqConfig = {
                methods: 'POST',
                url: 'agent/account/checkQrCode',
                data: {
                    uuid: this.uuid,
                    sid: this.$utils.tokens
                }
            };
            let self = this
            this.checkFlag = setInterval(() => {
                this.$utils.getRequest(reqConfig, res => {
                    console.log('二维码信息:', res);
                    if(res.succeeded && res.uuid){
                        clearInterval(self.checkFlag)
                        self.$refs.uToast.show({
                            title: '登录成功!',
                            type: 'success'
                        });
                        this.showpops = false
                    }
                });
            }, 2000);
        },
        // 网盘登录
        wanglogin() {
            uni.setStorageSync('topcheck', this.topstatus);
            uni.switchTab({
                url: '../handicap/handicap'
            });
        },
        // 绑定群聊
        binds() {
            uni.navigateTo({
                url: '../bindqun/bindqun'
            });
        }
    }
};
</script>

<style lang="less">
page {
    background-color: #f7fcff;
    padding-bottom: 20rpx;
}
.bigbox {
    width: 700rpx;
    margin: 24rpx;
    border-radius: 20rpx;
    background: linear-gradient(180deg, #c09cf6 0%, #9da0fe 100%);
    padding-bottom: 18rpx;

    .firstbox {
        width: 100%;
        padding: 26rpx 44rpx 0 44rpx;
        .firsone {
            font-size: 26rpx;
            color: #eee;

            .fffcol {
                font-size: 36rpx;
                color: #fff;
                margin-top: 6rpx;
            }
        }
    }

    .logins {
        width: 100%;
        padding: 46rpx 0 18rpx 0;

        .loginbtn {
            width: 192rpx;
            height: 58rpx;
            border: 1px solid #fff;
            border-radius: 40rpx;
            text {
                font-size: 28rpx;
                color: #fff;
                margin-right: 8rpx;
            }
        }
    }

    .bindsqun {
        width: 100%;
        border-top: 1px solid #beb3f9;
        margin-top: 42rpx;

        .bindsone {
            width: 100%;
            height: 158rpx;
            border-bottom: 1px solid #beb3f9;
            padding: 0 38rpx;

            .onelist {
                .listimg {
                    margin-right: 20rpx;
                    width: 92rpx;
                    height: 92rpx;
                    border-radius: 50%;
                    background-color: #ceb1f3;
                    image {
                        width: 84rpx;
                        height: 84rpx;
                        border-radius: 50%;
                    }
                }

                .listmsg {
                    height: 92rpx;
                    align-items: flex-start;

                    .listop {
                        color: #fff;
                        font-size: 28rpx;

                        .bindbtn {
                            padding: 0 14rpx;
                            height: 42rpx;
                            font-size: 20rpx;
                            margin-left: 24rpx;
                            line-height: 40rpx;
                            text-align: center;
                            border: 1px solid #fff;
                            border-radius: 24rpx;
                        }
                    }

                    .listbo {
                        font-size: 22rpx;
                        color: #eee;
                    }
                }
            }

            .oncerig {
                image {
                    width: 32rpx;
                    height: 32rpx;
                }
            }
        }
    }

    .addsome {
        padding: 34rpx 0 0 40rpx;
        font-size: 28rpx;
        color: #eee;
        image {
            width: 84rpx;
            height: 84rpx;
            margin-right: 28rpx;
        }
    }

    .lastmore {
        margin-top: 28rpx;
        font-size: 24rpx;
        color: #dad3ff;
        text {
            margin-right: 12rpx;
        }
    }
}

.friends {
    width: 700rpx;
    height: 176rpx;
    margin: 0 auto;
    margin-bottom: 24rpx;
    background-color: #fff;
    border-radius: 20rpx;
    box-shadow: 0px 0px 12px rgba(64, 64, 64, 0.07);

    .fright {
        .ritop {
            width: 520rpx;
            fonts: 24rpx;
            color: #dad3ff;
            .onename {
                width: 360rpx;
                font-size: 32rpx;
                font-weight: 600;
                color: #9d9ffd;
            }
        }
        .ribot {
            width: 520rpx;
            margin-top: 30rpx;
            .botle {
                padding: 0 14rpx;
                height: 42rpx;
                line-height: 42rpx;
                border: 1px solid #fe9749;
                border-radius: 8rpx;
                font-size: 22rpx;
                color: #fe9749;
            }
            .botri {
                view {
                    width: 110rpx;
                    height: 44rpx;
                    line-height: 44rpx;
                    text-align: center;
                    border-radius: 8rpx;
                    font-size: 24rpx;
                    color: #fff;
                    background-color: #9d9ffd;
                }
                .riisnt {
                    background-color: #ff8383;
                    margin-left: 16rpx;
                }
            }
        }
    }

    .imgs {
        margin: 0 22rpx;
        image {
            width: 104rpx;
            height: 104rpx;
            border-radius: 50%;
        }
    }
}

.utabs {
    width: 700rpx;
    margin: 0 auto;
    padding: 30rpx 0;
}

.lastlist {
    width: 750rpx;
    padding: 0 25rpx;

    .listone {
        width: 700rpx;
        background-color: #fff;
        border-radius: 10rpx;
        margin: 0 auto;
        margin-bottom: 24rpx;
        padding: 24rpx 0 18rpx 16rpx;

        .oneimg {
            margin-right: 10rpx;
            position: relative;
            image {
                width: 84rpx;
                height: 84rpx;
                border-radius: 50%;
                z-index: 10;
            }

            .flatsbox {
                width: 292rpx;
                height: 102rpx;
                box-shadow: 0px 0px 12px rgba(42, 42, 42, 0.23);
                background-color: #fff;
                border-radius: 10rpx;
                position: absolute;
                left: 80rpx;
                top: -90rpx;
                z-index: 20;
                font-size: 28rpx;
                color: #333;
                view {
                    flex: 1;
                    height: 102rpx;
                    line-height: 102rpx;
                    text-align: center;
                }
            }

            .flatbox {
                width: 523rpx;
                height: 216rpx;
                box-shadow: 0px 0px 12px rgba(42, 42, 42, 0.23);
                position: absolute;
                background-color: #fff;
                border-radius: 10rpx;
                left: 14rpx;
                top: -218rpx;
                z-index: 20;
                font-size: 28rpx;
                color: #333;

                .boxleft {
                    width: 100%;
                    height: 108rpx;
                    view {
                        flex: 1;
                        height: 108rpx;
                        line-height: 108rpx;
                        text-align: center;
                    }
                }
            }
        }

        .onecont {
            .onetop {
                width: 570rpx;
                .topleft {
                    view {
                        margin: 0 10rpx 10rpx 0;
                        &:nth-of-type(1) {
                            font-size: 30rpx;
                            color: #333;
                        }
                    }

                    .flys {
                        width: 38rpx;
                        height: 34rpx;
                        line-height: 34rpx;
                        border-radius: 4rpx;
                        text-align: center;
                        border: 1px solid #a696f8;
                        font-size: 20rpx;
                        color: #a696f8;
                    }

                    .updow {
                        height: 34rpx;
                        line-height: 34rpx;
                        border-radius: 4rpx;
                        padding: 0 10rpx;
                        border: 1px solid #fe9749;
                        font-size: 20rpx;
                        color: #fe9749;
                    }
                }
            }

            .onebot {
                width: 570rpx;
                padding-top: 12rpx;

                .botleft {
                    width: 380rpx;
                    font-size: 20rpx;
                    color: #ba9bf6;

                    view {
                        height: 40rpx;
                        line-height: 40rpx;
                        padding: 0 16rpx;
                        border: 1px solid #ba9bf6;
                        border-radius: 6rpx;
                        margin-right: 8rpx;
                    }
                }

                .botright {
                    font-size: 24rpx;
                    color: #999;
                    text {
                        font-size: 34rpx;
                        font-weight: 600;
                        color: #fe9749;
                        margin-right: 6rpx;
                    }
                }
            }
        }
    }
}

.showpop {
    width: 702rpx;

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

    .ercode {
        width: 100%;
        padding: 36rpx 60rpx 50rpx 40rpx;
        font-size: 24rpx;
        color: #333;

        .codtwo {
            margin-top: 32rpx;
        }

        .codimg {
            position: relative;
            margin: 10rpx 0;
            .warn {
                position: absolute;
                top: 0;
                left: 0;
                width: 236rpx;
                height: 236rpx;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #808080a3;
            }
            image {
                width: 236rpx;
                height: 236rpx;
            }
        }

        .codtil {
            text {
                margin-left: 14rpx;
            }
        }
        .codte {
            margin: 32rpx 0 20rpx 0;
        }

        .codlas {
            line-height: 44rpx;
        }
    }

    .showlogin {
        width: 100%;
        padding: 102rpx 46rpx 58rpx 46rpx;

        .theone {
            width: 100%;
            height: 78rpx;
            background-color: #f6f2ff;
            border-radius: 10rpx;
            view {
                width: 82rpx;
                height: 78rpx;
                background-color: #9d9ffd;
                border-radius: 10rpx 0 0 10rpx;
                image {
                    width: 28rpx;
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

        .thetwo {
            margin-top: 54rpx;
            color: #999;
            font-size: 22rpx;
            image {
                width: 36rpx;
                height: 36rpx;
                margin-right: 20rpx;
            }
        }
    }

    .updownf {
        width: 100%;
        padding: 46rpx 30rpx 66rpx 30rpx;

        .topqie {
            view {
                width: 120rpx;
                height: 60rpx;
                line-height: 60rpx;
                text-align: center;
                border-radius: 40rpx;
                font-size: 32rpx;
                color: #999;
            }
            .bgcs {
                background: linear-gradient(180deg, #9599f6 0%, #b297ea 100%);
                color: #fff;
            }
        }

        .iputs {
            width: 100%;
            height: 108rpx;
            margin-top: 80rpx;
            padding-left: 16rpx;
            border-top: 1px solid #efefff;
            border-bottom: 1px solid #efefff;
            font-size: 32rpx;
            color: #333;
            input {
                width: 440rpx;
                height: 80rpx;
                line-height: 80rpx;
                font-size: 40rpx;
                color: #9599f6;
                font-weight: 600;
                text-align: right;
                margin-right: 6rpx;
            }
        }
    }

    .msguser {
        width: 100%;
        padding: 54rpx 28rpx 60rpx 34rpx;

        .usehead {
            image {
                width: 160rpx;
                height: 160rpx;
                border-radius: 50%;
            }
        }

        .heabtn {
            width: 208rpx;
            height: 60rpx;
            line-height: 60rpx;
            text-align: center;
            background-color: #9d9ffd;
            border-radius: 10rpx;
            font-size: 28rpx;
            color: #fff;
            margin: 0 auto;
            margin-top: 36rpx;
        }

        .heaiput {
            width: 100%;
            height: 108rpx;
            border-top: 1px solid #efefff;
            border-bottom: 1px solid #efefff;
            margin-top: 44rpx;
            input {
                width: 430rpx;
                height: 80rpx;
                line-height: 80rpx;
                text-align: right;
                font-size: 32rpx;
                color: #9599f6;
            }
        }
    }

    .retuwater {
        width: 100%;
        padding: 84rpx 30rpx 60rpx 30rpx;

        .reinput {
            width: 100%;
            height: 108rpx;
            border-top: 1px solid #efefff;
            border-bottom: 1px solid #efefff;
            padding: 0 16rpx;
            font-size: 32rpx;
            color: #333;

            input {
                width: 420rpx;
                height: 80rpx;
                line-height: 80rpx;
                text-align: right;
                font-size: 40rpx;
                color: #9599f6;
                font-weight: 600;
                padding-right: 6rpx;
            }
        }

        .retils {
            width: 100%;
            font-size: 24rpx;
            color: #ff7900;
            margin: 36rpx 0 64rpx 0;
            padding: 0 6rpx;
            text {
                margin-left: 4rpx;
            }
        }
    }

    .makesurebtn {
        width: 608rpx;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        background-color: #9599f6;
        border-radius: 50rpx;
        margin: 0 auto;
        margin-top: 76rpx;
        font-size: 28rpx;
        color: #fff;
    }
}

.lists {
    width: 750rpx;
    padding: 24rpx;
    padding-top: 0;

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
</style>
