(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-handicap-handicap"],{"0f18":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{detail:{},agentId:"",show:!0,reminpw:!0,reminimg:"../../static/remenbc.png",list:[{name:"幸运"}],current:0,checked:!0,pho:"",pwd:"",address:""}},onShow:function(){this.isntlogin(),this.getRoomList()},methods:{getRoomList:function(){var t=this,e={url:"agent/agentRoom",data:{sid:this.$utils.tokens}};this.$utils.getRequest(e,(function(e){e.length&&(t.agentId=e[0].agentId?e[0].agentId:e[0].id,uni.setStorageSync("agentId",JSON.stringify(t.agentId)),t.detail=e[0].roomVO)}))},isntlogin:function(){var t;switch(this.current){case 0:t=uni.getStorageSync("accountone");break;case 1:this.$refs.uToast.show({title:"建设中!",type:"warning"}),t=uni.getStorageSync("accountwo");break;case 2:this.$refs.uToast.show({title:"建设中!",type:"warning"}),t=uni.getStorageSync("accounthree");break;case 3:this.$refs.uToast.show({title:"建设中!",type:"warning"}),t=uni.getStorageSync("accountfour");break}this.show=!t},remind:function(){this.reminpw?(this.reminpw=!1,this.reminimg="../../static/remenc.png"):(this.reminpw=!0,this.reminimg="../../static/remenbc.png")},subcation:function(t){console.log(t),this.current=t,this.isntlogin()},switchs:function(t){var e=this,i=this.checked?1:0,n={methods:"POST",url:"agent/updateRoomStatus/"+this.agentId,data:{flyOrder:i,sid:this.$utils.tokens}};this.$utils.getRequest(n,(function(t){console.log("房间操作:",t),t.succeeded&&(e.getRoomList(),e.$refs.uToast.show({title:"操作成功!",type:"success"}))}))},logins:function(){var t=this;if(""!=this.address&&" "!=this.address)if(""!=this.pho&&" "!=this.pho)if(""!=this.pwd&&" "!=this.pwd){var e={thirdPartyUserName:this.pho,thirdPartyPassward:this.pwd,thirdPartyUrl:this.address},i={methods:"POST",url:"agent/pankou/login",data:{agentRoomId:this.agentId,thirdPartyUserName:this.pho,thirdPartyPassward:this.pwd,thirdPartyUrl:this.address,sid:this.$utils.tokens}};this.$utils.getRequest(i,(function(i){if(console.log("盘口登录:",i),i.succeeded){if(t.show=!1,t.reminpw)switch(t.current){case 0:uni.setStorageSync("accountone",JSON.stringify(e));break;case 1:uni.setStorageSync("accountwo",JSON.stringify(e));break;case 2:uni.setStorageSync("accounthree",JSON.stringify(e));break;case 3:uni.setStorageSync("accountfour",JSON.stringify(e));break}t.$refs.uToast.show({title:"登录成功!",type:"success"})}else t.$refs.uToast.show({title:"登录失败!",type:"warning"})}))}else this.$refs.uToast.show({title:"请输入密码!",type:"warning"});else this.$refs.uToast.show({title:"请输入账号!",type:"warning"});else this.$refs.uToast.show({title:"请输入网址!",type:"warning"})}}};e.default=n},"2c1b":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-4b3d33b0]{background-color:#f6fbfe;padding-bottom:%?20?%}.notlogin .logos[data-v-4b3d33b0]{text-align:center;font-size:%?40?%;color:#9e9ffd;margin-top:%?200?%}.notlogin .inputs[data-v-4b3d33b0]{width:%?668?%;height:%?60?%;margin:0 auto;margin-top:%?130?%;border-bottom:1px solid #f6f6f6}.notlogin .inputs uni-image[data-v-4b3d33b0]{width:%?26?%;height:%?36?%}.notlogin .inputs uni-input[data-v-4b3d33b0]{width:%?600?%;height:%?60?%;line-height:%?60?%;padding-left:%?22?%;font-size:%?26?%;color:#333}.notlogin .remenpw[data-v-4b3d33b0]{font-size:%?22?%;color:#999;padding:%?38?% 0 0 %?42?%}.notlogin .remenpw uni-image[data-v-4b3d33b0]{width:%?36?%;height:%?36?%;margin-right:%?20?%}.notlogin .loginbtn[data-v-4b3d33b0]{width:%?690?%;height:%?90?%;line-height:%?90?%;text-align:center;background-color:#9e9ffd;-webkit-border-radius:%?50?%;border-radius:%?50?%;font-size:%?32?%;color:#fff;margin:0 auto;margin-top:%?90?%}.utoptab[data-v-4b3d33b0]{width:%?702?%;margin:%?24?%}.lists[data-v-4b3d33b0]{width:%?750?%;padding:%?24?%}.lists .listone[data-v-4b3d33b0]{width:100%;margin-bottom:%?24?%;background-color:#fff;-webkit-border-radius:%?20?%;border-radius:%?20?%}.lists .listone .onetop[data-v-4b3d33b0]{width:100%;background-color:#e5e1fc;-webkit-border-radius:%?20?% %?20?% 0 0;border-radius:%?20?% %?20?% 0 0;padding:%?22?% %?34?% %?32?% %?26?%;font-size:%?28?%;color:#b9b4e4}.lists .listone .onetop .topone uni-image[data-v-4b3d33b0]{width:%?28?%;height:%?28?%}.lists .listone .onetop .toptil[data-v-4b3d33b0]{text-align:center}.lists .listone .onetop .topnum[data-v-4b3d33b0]{font-size:%?60?%;font-weight:600;color:#6d5ede;text-align:center}.lists .listone .onetop .toplast[data-v-4b3d33b0]{margin-top:%?34?%}.lists .listone .onebot[data-v-4b3d33b0]{width:100%;height:%?76?%;padding:0 %?36?% 0 %?26?%;font-size:%?26?%;color:#999}.lists .listone .onebot uni-text[data-v-4b3d33b0]{margin-right:%?8?%}body.?%PAGE?%[data-v-4b3d33b0]{background-color:#f6fbfe}",""]),t.exports=e},4154:function(t,e,i){var n=i("66c1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("b6d7d6f4",n,!0,{sourceMap:!1,shadowMode:!1})},"43e5":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAlCAYAAABcZvm2AAAABHNCSVQICAgIfAhkiAAAATlJREFUSEvtV9FRhDAU3A38SwlnB3bgWYFXAgkVWIFagRWQUMJdBWIHduCVgP/Ac8LoeYOHMAx6P8lnMm/37WZn8kLnJGnRPhFIsfASoFBQd1qzorX1FuTtwhzfcCI7Y+INrWvkz0g+gY2OeD4iQt1ozXKuSudkLWifj+tPKgpEfYuDdSF1h0yEMIQwhDAA4ZkIz8TBgX8LA4BXQKq5UxDABMDV6BQ0n2C48rwD5GBfIjsySv3A7j8GIk0xdWafrEgE74pq5Um+Gul+IdLuSVyM2T2ZCCIvxsTrPqC1dQnyejkioCLUZV+RoH0D4FP265quqIORkoi01tw7JytB4wD+UHmKsSPKbVNN8Xms66Fzf7+ZiRLmrnkgcD8XaKxOgMdMR54DyF2dUrCZ4vcY8NF5JcQ203Hh9z4AsglwNfekjwQAAAAASUVORK5CYII="},"66c1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-subsection[data-v-4d0e09b6]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;position:relative}.u-item[data-v-4d0e09b6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:%?26?%;height:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#303133;padding:0 %?6?%}.u-item-bg[data-v-4d0e09b6]{background-color:#2979ff;position:absolute;z-index:-1}.u-none-border-right[data-v-4d0e09b6]{border-right:none!important}.u-item-first[data-v-4d0e09b6]{-webkit-border-top-left-radius:%?8?%;border-top-left-radius:%?8?%;-webkit-border-bottom-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-4d0e09b6]{-webkit-border-top-right-radius:%?8?%;border-top-right-radius:%?8?%;-webkit-border-bottom-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-4d0e09b6]{-webkit-transition:all .35s;transition:all .35s;color:#303133;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;z-index:3}',""]),t.exports=e},"675b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAXhJREFUSEvtlk1OAkEQhV8NY8LCRFyaQPQI4w1ggyGEiCcQT6BH0JMwngAThvCzQU8g3oCEiS6VhIUa6TI9QWGAsTqkw8reTaqrv6qX1zVN/cZr5tOd1EFUxQZLMRdKldy9lEqdYHRHoFNpY1LcGNQNQo4OYX4AIFa2DFSu65dKB0OpUFoA3ZxUctdSwqbxf9Ba5Xqt0FOMS2a+TXKgFem6QegDONdVEOGiWM7q79iyAmo3R3mHqP9z8jqYFZAG9FphjRn1JJg1kAQzBrXbL0cpxqF0j5Sa1gioLXdmBNKuYsajBEmKE+F4CyAeq5TrGYFm+ntTxRmpK4dIyxZZHeAxEeWL5ezAGCQBVs0wh0T3y9ZQjds7DrEG6jafqyDVWJZrUQUrHc1H0Gonvza3Id3sOXD110/QSkcmRtk+iAHfcVIr412qducj/VQ423+T9lEnCIcEeYYlHWT+CoqsOfUB2pOqWhc3Bulk7Zp3d+JtAkp/7Q5MpPsGQLQvIlfu6j0AAAAASUVORK5CYII="},"6b0b":function(t,e,i){"use strict";var n=i("9e0d"),o=i.n(n);o.a},"72f5":function(t,e,i){"use strict";i.r(e);var n=i("f4cc"),o=i("878d");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("6b0b");var s,a=i("f0c5"),d=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"4b3d33b0",null,!1,n["a"],s);e["default"]=d.exports},"7e75":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-item u-line-1",class:[t.noBorderRight(n),"u-item-"+n],style:[t.itemStyle(n)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(n)}}},[i("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(n)]},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},r=[]},8010:function(t,e,i){"use strict";i.r(e);var n=i("7e75"),o=i("8ba2");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("a1e8");var s,a=i("f0c5"),d=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"4d0e09b6",null,!1,n["a"],s);e["default"]=d.exports},"878d":function(t,e,i){"use strict";i.r(e);var n=i("0f18"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"8ba2":function(t,e,i){"use strict";i.r(e);var n=i("9eff"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"9e0d":function(t,e,i){var n=i("2c1b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("c57e4c06",n,!0,{sourceMap:!1,shadowMode:!1})},"9eff":function(t,e,i){"use strict";i("99af"),i("d81d"),i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,e){if("object"!=typeof t){var i={width:0,name:t};return i}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(e){if("subsection"==t.mode){var i="";return e<t.list.length-1&&(i+=" u-none-border-right"),0==e&&(i+=" u-item-first"),e==t.list.length-1&&(i+=" u-item-last"),i}}},textStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode?e==t.currentIndex?i.color="#ffffff":i.color=t.activeColor:e==t.currentIndex?i.color=t.activeColor:i.color=t.inactiveColor,e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),i.fontSize=t.fontSize+"rpx",i}},itemStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode&&(i.borderColor=t.activeColor,i.borderWidth="1px",i.borderStyle="solid"),i}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var e=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){e.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),i=0;i<this.list.length;i++)e.select(".u-item-"+i).boundingClientRect();e.exec((function(e){e.length||setTimeout((function(){t.getTabsInfo()}),10),e.map((function(e,i){t.listInfo[i].width=e.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var e=0;this.listInfo.map((function(i,n){n<t.currentIndex&&(e+=i.width)})),"subsection"==this.mode?this.itemBgStyle.left=e+"px":"button"==this.mode&&(this.itemBgStyle.left=e+this.buttonPadding+"px")}}};e.default=n},a1e8:function(t,e,i){"use strict";var n=i("4154"),o=i.n(n);o.a},bb2c:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAhCAYAAAAoNdCeAAAABHNCSVQICAgIfAhkiAAAAeNJREFUSEvtlt9R20AQxr+V/I5TQUgFcSoI6YBUEN8574gO4goCBVgHFeAOIjpwKohLUN7RfcxpJOZsS76TmGGYAT3qdu+3f29XEPEZw1MLeyHgDJCzRmVLoBCy0HpyG3ENJCSUm+oKwEVAbiNIlFKyOSbXCzOGU8L+ATALGdScl4Lk2zFgLyzPqxsIfjyByHsr6dVPJWv3zxjOLOw5iEwEJx7wk1JSdhnYCTOGZ41Xrc61VmnWdUENpS2egMSt1uk8GrbjFXmv9aQtis6IrszDXCCmPRQkH7q86/RslVdla6lF8r0N3bHc+TpN7op9+U5Ybip6VrocbENFkucPBUS+OjkClwuVuire+YIwrdJge7gb92DLhUp/vTHYylSZoO6p2AYOpbA9LwmsEySXrjqlAf2O1R4pt9Eq/SKrvNqK4OPIS6LVXDuIX+bRmiMECSzfYSMCt6syOowk/ntjJcqQQTAHoCRzb56dWtq1CD7H0IbBQLVQkxv/YjfNLa1rnXZ49nIHwfoe5IOJ3oN7vTD2hJGw/wBMQ3kb5BmAEmTW7ohulyTsXezjPRTmG++2p6A3vsJzYKGoHZy/wwaHrEuhDuOLDs+XWAtI/F3odFbvhA4IYh77qMbGtZ4OwFokydzC8whrSSK7JyWq1AAAAABJRU5ErkJggg=="},f4cc:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uSubsection:i("8010").default,uSwitch:i("889d").default,uToast:i("3fa4").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"notlogin"},[n("v-uni-view",{staticClass:"logos"},[t._v("LOGO")]),n("v-uni-view",{staticClass:"inputs dis-alicen"},[n("v-uni-image",{attrs:{src:i("43e5")}}),n("v-uni-input",{attrs:{type:"text",placeholder:"请输入网址"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),n("v-uni-view",{staticClass:"inputs dis-alicen",staticStyle:{"margin-top":"40rpx"}},[n("v-uni-image",{attrs:{src:i("43e5")}}),n("v-uni-input",{attrs:{type:"text",placeholder:"请输入账号"},model:{value:t.pho,callback:function(e){t.pho=e},expression:"pho"}})],1),n("v-uni-view",{staticClass:"inputs dis-alicen",staticStyle:{"margin-top":"40rpx"}},[n("v-uni-image",{attrs:{src:i("bb2c")}}),n("v-uni-input",{attrs:{type:"text",password:!0,placeholder:"请输入密码"},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}})],1),n("v-uni-view",{staticClass:"remenpw dis-alicen",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.remind.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:t.reminimg}}),n("v-uni-text",[t._v("记住密码")])],1),n("v-uni-view",{staticClass:"loginbtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logins.apply(void 0,arguments)}}},[t._v("登录即可查看盘口数据")])],1),t.show?t._e():n("v-uni-view",[n("v-uni-view",{staticClass:"utoptab"},[n("u-subsection",{attrs:{list:t.list,current:t.current,"active-color":"#fff","inactive-color":"#333","bg-color":"#fff","button-color":"#A897ED","font-size":"30",height:"96"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.subcation.apply(void 0,arguments)}}})],1),t.detail?n("v-uni-view",{staticClass:"lists"},[n("v-uni-view",{staticClass:"listone"},[n("v-uni-view",{staticClass:"onetop"},[n("v-uni-view",{staticClass:"topone dis-jasc"},[n("v-uni-text",[t._v("本期号码")]),n("v-uni-image",{attrs:{src:i("675b")}})],1),n("v-uni-view",{staticClass:"toptil"},[t._v("幸运")]),n("v-uni-view",{staticClass:"topnum"},[t._v(t._s(t.detail.currentNum))])],1),n("v-uni-view",{staticClass:"onebot dis-jasc"},[n("v-uni-view",{staticClass:"botime"},[t._v("更新时间："+t._s(t.$utils.formatDate(t.detail.openTime,!0)))]),n("v-uni-view",{staticClass:"botrig dis-alicen"},[n("v-uni-text",[t._v("开启飞单")]),n("u-switch",{attrs:{size:"40","active-color":"#B199F7","inactive-color":"#F3F3F3"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchs.apply(void 0,arguments)}},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)],1)],1)],1):t._e()],1),n("u-toast",{ref:"uToast"})],1)},r=[]}}]);