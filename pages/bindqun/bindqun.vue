<template>
	<view>
		<view class="lists">
			<view class="listone dis-jasc" v-for="(item,index) in lists" :key="index" @click="choseone(index)">
				<view class="oneimg">
					<image src="../../static/linshi/aaaa.jpg"></image>
				</view>
				<view class="onerig dis-jasc">
					<view class="oneover-hidden">科技有限公司</view>
					<image :src="item.flag ? '../../static/remenbc.png' : '../../static/remen.png'"></image>
				</view>
			</view>
		</view>
		
		<view class="tuibtn" @click="show=true">消息推送</view>
		
		<u-popup v-model="show" mode="center" border-radius="20" :closeable="true" close-icon-color="#fff" >
			<view class="showpop">
				<view class="toptile">发送类型</view>
				
				<view class="popbot">
					<view class="botlist dis-jasc">
						<view class="dis-alicen" v-for="(item,index) in choselist" :key="index" @click="choone(index)">
							<image :src="item.flag ? '../../static/remenbc.png' : '../../static/remen.png'"></image>
							<text>{{item.text}}</text>
						</view>
					</view>
					<view class="surbtn">确定并发送</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				lists:[
					{
						flag:true
					},{
						flag:true
					},{
						flag:true
					},{
						flag:false
					},{
						flag:true
					},{
						flag:true
					}
				],
				choselist:[
					{
						flag:true,
						text:"图片"
					},{
						flag:false,
						text:"数字"
					},{
						flag:true,
						text:"链接"
					}
				]
			};
		},
		methods:{
			choseone(index){
				this.lists[index].flag ? this.lists[index].flag = false : this.lists[index].flag = true
			},
			choone(index){
				this.choselist[index].flag ? this.choselist[index].flag = false : this.choselist[index].flag = true
			}
		}
	}
</script>

<style lang="less">
page{
	background-color: #F7FCFF;
}

.lists{
	width: 702rpx;
	background-color: #fff;
	border-radius: 20rpx;
	margin: 24rpx;
	margin-bottom: 0;
	padding: 48rpx 0 30rpx 38rpx;
	
	.listone{
		margin-bottom: 34rpx;
		
		.oneimg{
			image{
				width: 80rpx;
				height: 80rpx;
				border-radius: 10rpx;
			}
		}
		
		.onerig{
			width: 544rpx;
			height: 104rpx;
			padding-right: 36rpx;
			border-bottom: 1px solid #F0F0F0;
			
			view{
				width: 440rpx;
				font-size: 32rpx;
				color:#333;
			}
			
			image{
				width: 48rpx;
				height: 48rpx;
			}
		}
	}
}

.tuibtn{
	width: 702rpx;
	height: 92rpx;
	line-height: 92rpx;
	text-align: center;
	background-color: #9599F6;
	border-radius: 50rpx;
	font-size: 32rpx;
	color:#fff;
	margin: 0 auto;
	margin-top: 46rpx;
}

.showpop{
		width: 702rpx;
		
		.toptile{
			width: 702rpx;
			height: 88rpx;
			line-height: 88rpx;
			border-radius: 20rpx 20rpx 0 0;
			background: linear-gradient(180deg, #959AF7 0%, #B397EA 100%);
			padding-left: 38rpx;
			font-size: 28rpx;
			color:#fff
		}
		
		.popbot{
			width: 100%;
			background-color: #fff;
			padding: 82rpx 46rpx 54rpx 46rpx;
			
			.botlist{
				image{
					width: 40rpx;
					height: 40rpx;
					margin-right: 24rpx;
				}
				text{
					font-size: 28rpx;
					color:#333;
				}
			}
			
			.surbtn{
				width: 100%;
				height: 90rpx;
				line-height: 90rpx;
				text-align: center;
				background-color: #9599F6;
				border-radius: 50rpx;
				font-size: 28rpx;
				color:#fff;
				margin-top: 110rpx;
			}
		}
	}
</style>
