<template>
	<view>
		<view class="lists">
			<view class="listone" v-for="(item,index) in lists" :key="index">
				<view class="onetop dis-jasc">
					<text>2020-09-19 15:15:20</text>
					<text class="foncor">{{item.updown}}</text>
				</view>
				<view class="ontbot dis-jasc">
					<view class="botlef dis-alicen">
						<image src="../../static/linshi/casour.jpg"></image>
						<view class="anthimg">
							<view>张三</view>
							<text>积分类型</text>
						</view>
					</view>
					<view class="botrig">{{item.num}}</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data(){
			return {
				lists:[
					{
						updown:'上分',
						num:"502.9"
					},{
						updown:'上分',
						num:"502.9"
					},{
						updown:'下分',
						num:"506.9"
					},{
						updown:'上分',
						num:"507.9"
					},{
						updown:'上分',
						num:"502.9"
					},{
						updown:'下分',
						num:"506.9"
					},{
						updown:'上分',
						num:"507.9"
					}
				]
			}
		}
	}
</script>

<style lang="less">
	page{
		background-color: #F7FCFF;
		padding-bottom: 10rpx;
	}
	
	.lists{
		width: 750rpx;
		padding: 24rpx;
		
		.listone{
			width: 100%;
			height: 220rpx;
			margin-bottom: 24rpx;
			background-color: #fff;
			border-radius: 20rpx;
			padding: 20rpx 30rpx 24rpx 32rpx;
			
			.onetop{
				width: 100%;
				font-size: 24rpx;
				color:#DAD3FF;
				
				.foncor{
					font-size: 32rpx;
					font-weight: 600;
					color:#9D9FFD
				}
			}
			
			.ontbot{
				width: 100%;
				align-items: flex-end;
				margin-top: 50rpx;
				
				.botlef{
					image{
						width: 84rpx;
						height: 84rpx;
						border-radius: 50%;
						margin-right: 20rpx;
					}
					
					.anthimg{
						font-size: 32rpx;
						color:#333;
						text{
							font-size: 24rpx;
							margin-top: 12rpx;
							color:#BCBCBC
						}
					}
				}
				
				.botrig{
					font-size: 36rpx;
					font-weight: 600;
					color:#FE9749
				}
			}
		}
	}
</style>
