<template>
	<view>
		<view class="rili">
			<view class="topsli dis-jasc">
				<view class="tetx">报表分析</view>
				<view class="tbox dis-jasc" @click="show=true">
					<text>{{nowym}}</text>
					<u-icon name="arrow-down-fill" color="#999" size="24"></u-icon>
				</view>
			</view>
			<view class="theweek dis-alicen">
				<view :class="{mright:index==6}" v-for="(item,index) in week" :key="index">{{item}}</view>
			</view>
			<view class="theweek dis-fw">
				<view style="font-size: 32rpx;" :class="{mright:((index+1)%7)==7,todaycl:(nowym==todayym&&datnum==index) || clickone == index}" v-for="(item,index) in days" :key="index" @click="choseone(index)">{{item}}</view>
			</view>
		</view>
		
		
		<view class="lastlist">
			<view class="listfr dis-jasc" @click="showlist=true">
				<view>彩种分类：</view>
				<view>
					<text>{{caiz}}</text>
					<u-icon name="arrow-down" color="#999" size="28"></u-icon>
				</view>
			</view>
			<view class="listfr dis-jasc" @click="showtime=true">
				<view>查看日期：</view>
				<view>
					<text>{{nowmot}}</text>
					<u-icon name="arrow-down" color="#999" size="28"></u-icon>
				</view>
			</view>
			<view class="lastone dis-jasc" :class="{hantbor:index ==4}" v-for="(item,index) in lastlists" :key="index">
				<view>{{item.tiles}}</view>
				<view class="fens">{{item.num}}<text>{{item.dan}}</text></view>
			</view>
		</view>
		
		<u-select v-model="showlist" :list="list" @confirm="lists" @cancel="showlist=false"></u-select>
		
		<u-select v-model="showtime" :list="listtime" @confirm="listime" @cancel="showtime=false"></u-select>
		
		<u-picker v-model="show" mode="time" :params="params" @confirm="onConfirm" @cancel="show=false"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showlist:false,//彩种分类
				caiz:"全部",
				showtime:false,//查看日期
				nowmot:"本月全部",
				show:false,
				params: {
					year: true,
					month: true,
					day: false,
					hour: false,
					minute: false,
					second: false
				},
				week:['一','二','三','四','五','六','日'],
				daynum:[31,28,31,30,31,30,31,31,30,31,30,31],//每个月的天数
				days:[],
				nowym:"",
				todayym:"",//今天得年月
				datnum:null,
				year:null,
				month:null,
				clickone:-1,
				lastlists:[
					{
						tiles:"本月上分：",
						num:"1625",
						dan:"分"
					},{
						tiles:"本月下分：",
						num:"1325",
						dan:"分"
					},{
						tiles:"本月下注次数：",
						num:"25",
						dan:"次"
					},{
						tiles:"本月流水：",
						num:"1556.6"
					},{
						tiles:"本月盈亏：",
						num:"1494.6"
					}
				],
				list: [
					{
						value: '1',
						label: '全部'
					},{
						value: '2',
						label: '幸运'
					},{
						value: '3',
						label: '重庆'
					},{
						value: '4',
						label: '新疆'
					},{
						value: '5',
						label: '快乐8'
					}
				],
				listtime:[
					{
						value: '1',
						label: '本月全部'
					},{
						value: '2',
						label: '2020-12-21'
					}
				]
			};
		},
		onLoad() {
			let time = new Date()
			this.nowym = time.getFullYear() + "年" + ((time.getMonth()+1).toString().length == 1 ? "0" + (time.getMonth()+1) : (time.getMonth()+1)) + "月"
			this.todayym = time.getFullYear() + "年" + ((time.getMonth()+1).toString().length == 1 ? "0" + (time.getMonth()+1) : (time.getMonth()+1)) + "月"
			this.year = time.getFullYear()
			this.month = time.getMonth()+1
			this.datnum=time.getDate()-1
			
			this.isyear(this.year)
			this.nowmonth()
		},
		methods:{
			// 彩种分类
			lists(e){
				this.caiz=e[0].label
			},
			// 查看日期
			listime(e){
				this.nowmot = e[0].label
				if(e[0].value==1){
					this.lastlists[0].tiles="本月上分："
					this.lastlists[1].tiles="本月下分："
					this.lastlists[2].tiles="本月下注次数："
					this.lastlists[3].tiles="本月流水："
					this.lastlists[4].tiles="本月盈亏："
				}else{
					this.lastlists[0].tiles="今日上分："
					this.lastlists[1].tiles="今日下分："
					this.lastlists[2].tiles="今日下注次数："
					this.lastlists[3].tiles="今日流水："
					this.lastlists[4].tiles="今日盈亏："
				}
			},
			// 点击某一天
			choseone(index){
				var ti=this.year + "-" + this.month + "-" + this.days[index]
				this.listtime[1].label = ti
				this.nowmot = ti
				this.clickone =index
				
				this.lastlists[0].tiles="今日上分："
				this.lastlists[1].tiles="今日下分："
				this.lastlists[2].tiles="今日下注次数："
				this.lastlists[3].tiles="今日流水："
				this.lastlists[4].tiles="今日盈亏："
			},
			// 判断平年闰年
			isyear(val){
				if(val%4==0 && val%100!=0 || val%100==0 && val%400==0){
					this.daynum[1]=29
				}else{
					this.daynum[1]=28
				}
			},
			// 计算当月多少天
			nowmonth(){
				var daylength = this.daynum[this.month-1]
				this.days.splice(0)
				
				for(let i=0;i<daylength;i++){
					this.days.push(i+1)
				}
				
				
				// 获取当月一号是周几，然后向数组前添加空字符占位
				var times=new Date(this.year,this.month-1,1).getDay()
				if(times==0){
					times=6
				}else{
					times--
				}
				for(let f=0;f<times;f++){
					this.days.unshift(" ")
				}
				console.log(times)
			},
			onConfirm(e){
				console.log(e);
				this.clickone =-1
				this.nowym = e.year+"年"+e.month+"月"
				this.year = e.year
				this.month = e.month
				this.isyear(e.year)
				this.nowmonth()
			}
		}
	}
</script>

<style lang="less">
page{
	background-color: #F7FCFF;
	padding-bottom: 40rpx;
}
.rili{
	width: 702rpx;
	background-color: #fff;
	border-radius: 10rpx;
	margin: 24rpx;
	padding: 34rpx;
	padding-right: 20rpx;
	
	.topsli{
		width: 100%;
		color:#333;
		.tetx{
			font-size: 30rpx;
			font-weight: 600;
		}
		.tbox{
			width: 246rpx;
			height: 60rpx;
			border: 1px solid #E7EAEC;
			border-radius: 10rpx;
			font-size: 28rpx;
			padding:0 26rpx;
		}
	}
	
	.theweek{
		width: 100%;
		padding-top: 20rpx;
		font-size: 28rpx;
		color:#333;
		view{
			width: 60rpx;
			height: 60rpx;
			line-height: 60rpx;
			margin:25rpx 34rpx 0 0;
			text-align: center;
			border-radius: 10rpx;
		}
	}
	
	.mright{
		margin-right: 0;
	}
	.todaycl{
		background-color: #9D9FFD;
		color:#fff
	}
}

.lastlist{
	width: 702rpx;
	background-color: #fff;
	border-radius: 20rpx;
	margin: 0 24rpx;
	padding: 0 26rpx;
	font-size: 30rpx;
	color:#333;
	
	.listfr{
		width: 100%;
		height: 106rpx;
		border-bottom: 1px solid #F0F0F0;
		text{
			margin-right: 22rpx;
		}
	}
	
	.lastone{
		width: 100%;
		height: 106rpx;
		border-bottom: 1px solid #F0F0F0;
		.fens{
			font-size: 36rpx;
			font-weight: 600;
			color:#9D9FFD;
			text{
				font-size: 30rpx;
				font-weight: 400;
				color:#333;
				margin-left: 6rpx;
			}
		}
	}
	.hantbor{
		border: none;
	}
}

</style>
