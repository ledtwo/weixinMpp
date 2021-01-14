<template>
	<view>
		<view class="logos">LOGO</view>
		<view class="inputs dis-alicen">
			<image src="../../static/ph.png"></image>
			<input type="number" placeholder="请输入账号" v-model="usename" placeholder-style="color:#fff" />
		</view>
		<view class="inputs dis-alicen" style="margin-top: 70rpx;">
			<image src="../../static/pw.png"></image>
			<input type="text" password placeholder="请输入密码" v-model="pwd" placeholder-style="color:#fff" />
		</view>
		<view class="remenpw dis-alicen" @click="remind">
			<image :src="reminimg"></image>
			<text>记住密码</text>
		</view>
		<view class="loginbtn" @click="logins">登录</view>
		
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				reminpw:true,//记住密码
				reminimg:"../../static/remenb.png",
				usename:"",
				pwd:""
			}
		},
		onLoad() {
			var phpwd = uni.getStorageSync("userpwd")
			if(phpwd){
				var str = JSON.parse(phpwd)
				this.usename = str.usename
				this.pwd = str.pwd
			}
		},
		methods: {
			logins(){
				if(this.usename == "" || this.usename == " "){
					this.$refs.uToast.show({
						title: '请输入账号!',
						type: 'warning'
					})
					return;
				}
				
				if(this.pwd == "" || this.pwd == " "){
					this.$refs.uToast.show({
						title: '请输入密码!',
						type: 'warning'
					})
					return;
				}
				
				var pram = {
					url:"agent/loginIn",
					methods:'POST',
					data:{
						userName:this.usename,
						password:this.pwd
					}
				}
				
				this.$utils.getRequest(pram ,res=>{
					if(res.sid){
						console.log(res.sid);
						this.$utils.tokens = res.sid
						var userinfo={
							usename:this.usename,
							pwd:this.pwd
						}
						// 记住密码
						if(this.reminpw){
							uni.setStorageSync('userpwd', JSON.stringify(userinfo))
						}
						
						uni.switchTab({
							url:"../index/index"
						})
					}
                    if(res == {}){
                        this.$refs.uToast.show({
                        	title: '账号已过期!',
                        	type: 'warning'
                        })
                    }
				})
				
				
				
			},
			// 记住密码
			remind(){
				if(this.reminpw){
					this.reminpw = false
					this.reminimg = "../../static/remen.png"
				}else{
					this.reminpw = true
					this.reminimg = "../../static/remenb.png"
				}
			}
		}
	}
</script>

<style lang="less">
page{
	background: linear-gradient(180deg, #BF9CF6 0%, #9D9FFD 100%);
	padding-top: 300rpx;
}
.logos{
	text-align: center;
	font-size: 40rpx;
	color:#fff;
}
.inputs{
	width: 668rpx;
	height: 60rpx;
	margin: 0 auto;
	margin-top: 200rpx;
	border-bottom: 1px solid #F6F6F6;
	image{
		width: 26rpx;
		height: 36rpx;
	}
	input{
		width:600rpx ;
		height: 60rpx;
		line-height: 60rpx;
		padding-left: 22rpx;
		font-size: 26rpx;
		color:#fff;
	}
}

.remenpw{
	font-size: 22rpx;
	color:#fff;
	padding: 38rpx 0 0 42rpx;
	image{
		width: 36rpx;
		height: 36rpx;
		margin-right: 20rpx;
	}
}

.loginbtn{
	width: 690rpx;
	height: 90rpx;
	line-height: 90rpx;
	text-align: center;
	background-color: #fff;
	border-radius: 50rpx;
	font-size: 32rpx;
	color:#A29EFB;
	margin: 0 auto;
	margin-top: 96rpx;
}
</style>
