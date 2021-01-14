// const FormalUrl = "http://106.53.221.198/" 
const FormalUrl = "https://qd.tskp1i6.cn/" 
let tokens = ""

const getRequest = (param, data) => {
	if(param.showtoast){
		uni.showLoading({
			title: param.showtoast,
			mask: true
		});
	}
	// 登录后传输header
	param.header = {
		'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
	};
	return new Promise((resolve, reject) => {
		uni.request({
			url:FormalUrl + param.url,
			method:param.methods || 'GET',
			header: param.header,
			data: param.data,
			responseType:param.responseType||"text",
			success: (res) => {
				uni.hideLoading();
				data(res.data);
				resolve(res.data);
			},
			fail: (res) => {
				data(res);
				reject(res);
				uni.hideLoading();
				uni.showToast({
					title: '当前您的网络欠佳，请稍候刷新!',
					icon: 'none',
					duration: 2000
				});
			}
		})
	})
}


const validation=function(num,str){
    var rex
    switch(num){
        case 1 :// 验证手机号开头两位和字符串长度
            rex=/^((13[0-9])|(14[0-9])|(15[0-9])|(16[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\d{8}$/
            break;
        case 2 :// 由数字或英文字母组成
            rex=/^[A-Za-z0-9]+$/
            break;
        case 3 :// 13-19位纯数字
            rex=/^([0-9]{1})(\d{12}|\d{13}|\d{14}|\d{15}|\d{16}|\d{17}|\d{18})$/
            break;
        case 4 :// 验证身份证
            // rex=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
            rex=/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
            break;
        case 5 ://禁止使用特殊字符
            rex=/[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im;
            break;
    }

    return rex.test(str)
}

const formatDate=function (time,flag) {
	var date = new Date(time);
	  var y = date.getFullYear();
	  var m = date.getMonth() + 1;
	  m = m < 10 ? ('0' + m) : m;
	  var d = date.getDate();
	  d = d < 10 ? ('0' + d) : d;
	  var h = date.getHours();
	  h = h < 10 ? ('0' + h) : h;
	  var minute = date.getMinutes();
	  var second = date.getSeconds();
	  minute = minute < 10 ? ('0' + minute) : minute;
	  second = second < 10 ? ('0' + second) : second;
      let timeStr
      if(flag){
          timeStr = y + '-' + m + '-' + d + '　' + h + ':' + minute + ':' + second;
      }else{
          timeStr = y + '-' + m + '-' + d
      }
	  return timeStr;
  }



export default {
	getRequest,
	validation,
	tokens,
	formatDate
}
