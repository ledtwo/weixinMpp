<template>
	<view>
		<view class="ttopbg"></view>
		<view class="theight"></view>
		<view class="navbox">
			<view class="inbox">
				<view :class="{activd:index == activenum}" v-for="(item,index) in navlist" :key="index" @click="choseone(index)">{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				navlist:["幸运","重庆","新疆","快乐8"],
				activenum:0
			}
		},
		methods:{
			choseone(index){
				this.activenum = index
				this.$emit("usemethod",index)
			}
		},
		props:{
			
		}
	}
</script>

<style lang="less">
	.ttopbg{
		width: 750rpx;
		height: var(--status-bar-height);
		position: fixed;
		background-color: #F7FCFF;
		top: 0;
		left: 0;
		z-index: 9999;
	}
	.theight{
		width: 750rpx;
		height: 90rpx;
		margin-top:var(--status-bar-height);
	}
	.navbox{
		width: 750rpx;
		height:90rpx;
		background-color: #F7FCFF;
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		z-index: 9999;
		color:#fff;
		display: flex;
		align-items: flex-end;
		
		.inbox{
			height: 68rpx;
			margin-left: 24rpx;
			background-color: #fff;
			border-radius: 34rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			view{
				width: 138rpx;
				height: 68rpx;
				border-radius: 34rpx;
				text-align: center;
				line-height: 68rpx;
				font-size: 28rpx;
				color:#333;
			}
			
			.activd{
				width: 138rpx;
				background: linear-gradient(180deg, #959AF7 0%, #B397EA 100%);
				color:#fff
			}
		}
	}
</style>
