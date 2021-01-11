<template>
	<view>
		<view class="lists dis-jasc" v-for="(item,index) in 20" :key="index">
			<view class="dis-alicen">
				<image src="../../static/linshi/casour.jpg"></image>
				<text>浓妆艳抹</text>
			</view>
			<view class="listbtn">移出黑名单</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	page{
		background-color: #F7FCFF;
		padding-bottom: 20rpx;
	}
	.lists{
		width: 702rpx;
		height: 136rpx;
		border-radius: 10rpx;
		background-color: #fff;
		padding: 0 32rpx 0 18rpx;
		margin: 0 auto;
		margin-top: 24rpx;
		
		image{
			width: 84rpx;
			height: 84rpx;
			border-radius: 50%;
			margin-right: 18rpx;
		}
		text{
			font-size: 30rpx;
			color:#333;
		}
		.listbtn{
			width: 164rpx;
			height: 62rpx;
			line-height: 62rpx;
			text-align: center;
			border: 1px solid #9D9FFD;
			border-radius: 10rpx;
			font-size: 24rpx;
			color:#9D9FFD
		}
	}
	
</style>
