(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setup-set_odds"],{"09a5":function(t,e,i){"use strict";i.r(e);var n=i("f25d"),o=i("be1b");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("9408");var a,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"2cafbb2d",null,!1,n["a"],a);e["default"]=u.exports},"18ad":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-toast[data-v-2a6a561c]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;-webkit-border-radius:%?8?%;border-radius:%?8?%;background:#585858;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-2a6a561c]{opacity:1}.u-icon[data-v-2a6a561c]{margin-right:%?10?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-2a6a561c]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-2a6a561c]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-2a6a561c]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-2a6a561c]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-2a6a561c]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-2a6a561c]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-2a6a561c]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-2a6a561c]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-2a6a561c]{color:#fff;background-color:#585858}',""]),t.exports=e},"3fa4":function(t,e,i){"use strict";i.r(e);var n=i("be7e"),o=i("6aaf");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("fe08");var a,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"2a6a561c",null,!1,n["a"],a);e["default"]=u.exports},4154:function(t,e,i){var n=i("66c1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("b6d7d6f4",n,!0,{sourceMap:!1,shadowMode:!1})},"436b":function(t,e,i){"use strict";i("c975"),i("a9e3"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=n},"66c1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-subsection[data-v-4d0e09b6]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;position:relative}.u-item[data-v-4d0e09b6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:%?26?%;height:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#303133;padding:0 %?6?%}.u-item-bg[data-v-4d0e09b6]{background-color:#2979ff;position:absolute;z-index:-1}.u-none-border-right[data-v-4d0e09b6]{border-right:none!important}.u-item-first[data-v-4d0e09b6]{-webkit-border-top-left-radius:%?8?%;border-top-left-radius:%?8?%;-webkit-border-bottom-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.u-item-last[data-v-4d0e09b6]{-webkit-border-top-right-radius:%?8?%;border-top-right-radius:%?8?%;-webkit-border-bottom-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.u-item-text[data-v-4d0e09b6]{-webkit-transition:all .35s;transition:all .35s;color:#303133;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;z-index:3}',""]),t.exports=e},"6aaf":function(t,e,i){"use strict";i.r(e);var n=i("436b"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"78e0":function(t,e,i){var n=i("e57a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("7172dffa",n,!0,{sourceMap:!1,shadowMode:!1})},"7e75":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-subsection",style:[t.subsectionStyle]},[t._l(t.listInfo,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-item u-line-1",class:[t.noBorderRight(n),"u-item-"+n],style:[t.itemStyle(n)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(n)}}},[i("v-uni-view",{staticClass:"u-item-text u-line-1",style:[t.textStyle(n)]},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"u-item-bg",style:[t.itemBarStyle]})],2)},r=[]},8010:function(t,e,i){"use strict";i.r(e);var n=i("7e75"),o=i("8ba2");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("a1e8");var a,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"4d0e09b6",null,!1,n["a"],a);e["default"]=u.exports},8847:function(t,e,i){"use strict";i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{roomlist:[],roomId:1,list:[{name:"幸运"},{name:"重庆"},{name:"新疆"},{name:"快乐8"}],current:0,listarr:[],oddName:[{code:"Three_Show",name:"三字现"},{code:"Four_Decide",name:"四字定"},{code:"Two_Show",name:"二字现"},{code:"Two_Decide",name:"二字定"},{code:"Five_Two_Decide",name:"五位二定"},{code:"Four_Show",name:"四字现"},{code:"Three_Decide",name:"三字定"},{code:"One_Decide",name:"一字定"}]}},onShow:function(){},onLoad:function(){this.getRoomList()},methods:{getRoomList:function(){var t=this,e={url:"agent/agentRoom",data:{sid:this.$utils.tokens}};this.$utils.getRequest(e,(function(e){var i=[];e&&e.forEach((function(t){i.push({name:t.roomVO.name,id:t.id})})),t.roomlist=i,t.roomId=i[t.current].id,t.getOddsList()}))},sectionChange:function(t){0==t?(this.current=t,this.roomId=this.roomlist[t].id,this.getOddsList()):(this.current=0,this.$refs.uToast.show({title:"功能未开放!",type:"warning"}))},getOddsList:function(){var t=this,e={url:"agent/odds/"+this.roomId,methods:"GET",data:{sid:this.$utils.tokens}};this.$utils.getRequest(e,(function(e){var i=[],n=function(n){t.oddName.forEach((function(t){t.code==e[n].modeType&&(e[n].name=t.name)})),i.push(e[n])};for(var o in e)n(o);t.listarr=i}))},updateOdds:function(t){var e=this,i={url:"agent/oddsUpdate/"+this.roomId,methods:"POST",data:{sid:this.$utils.tokens,odds:t.odds,min:t.min,max:t.max,modeType:t.modeType}};this.$utils.getRequest(i,(function(t){t.succeeded?e.$refs.uToast.show({title:"赔率更新成功!",type:"success"}):e.$refs.uToast.show({title:"赔率更新失败!",type:"error"}),e.getOddsList()}))}}};e.default=n},"8ba2":function(t,e,i){"use strict";i.r(e);var n=i("9eff"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},9408:function(t,e,i){"use strict";var n=i("78e0"),o=i.n(n);o.a},"9eff":function(t,e,i){"use strict";i("99af"),i("d81d"),i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-subsection",props:{list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},mode:{type:String,default:"button"},fontSize:{type:[Number,String],default:28},animation:{type:Boolean,default:!0},height:{type:[Number,String],default:70},bold:{type:Boolean,default:!0},bgColor:{type:String,default:"#eeeeef"},buttonColor:{type:String,default:"#ffffff"},vibrateShort:{type:Boolean,default:!1}},data:function(){return{listInfo:[],itemBgStyle:{width:0,left:0,backgroundColor:"#ffffff",height:"100%",transition:""},currentIndex:this.current,buttonPadding:3,borderRadius:5,firstTimeVibrateShort:!0}},watch:{current:{immediate:!0,handler:function(t){this.currentIndex=t,this.changeSectionStatus(t)}}},created:function(){this.listInfo=this.list.map((function(t,e){if("object"!=typeof t){var i={width:0,name:t};return i}return t.width=0,t}))},computed:{noBorderRight:function(){var t=this;return function(e){if("subsection"==t.mode){var i="";return e<t.list.length-1&&(i+=" u-none-border-right"),0==e&&(i+=" u-item-first"),e==t.list.length-1&&(i+=" u-item-last"),i}}},textStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode?e==t.currentIndex?i.color="#ffffff":i.color=t.activeColor:e==t.currentIndex?i.color=t.activeColor:i.color=t.inactiveColor,e==t.currentIndex&&t.bold&&(i.fontWeight="bold"),i.fontSize=t.fontSize+"rpx",i}},itemStyle:function(){var t=this;return function(e){var i={};return"subsection"==t.mode&&(i.borderColor=t.activeColor,i.borderWidth="1px",i.borderStyle="solid"),i}},subsectionStyle:function(){var t={};return t.height=uni.upx2px(this.height)+"px","button"==this.mode&&(t.backgroundColor=this.bgColor,t.padding="".concat(this.buttonPadding,"px"),t.borderRadius="".concat(this.borderRadius,"px")),t},itemBarStyle:function(){var t={};return t.backgroundColor=this.activeColor,t.zIndex=1,"button"==this.mode&&(t.backgroundColor=this.buttonColor,t.borderRadius="".concat(this.borderRadius,"px"),t.bottom="".concat(this.buttonPadding,"px"),t.height=uni.upx2px(this.height)-2*this.buttonPadding+"px",t.zIndex=0),Object.assign(this.itemBgStyle,t)}},mounted:function(){var t=this;setTimeout((function(){t.getTabsInfo()}),10)},methods:{changeSectionStatus:function(t){var e=this;"subsection"==this.mode&&(t==this.list.length-1&&(this.itemBgStyle.borderRadius="0 ".concat(this.buttonPadding,"px ").concat(this.buttonPadding,"px 0")),0==t&&(this.itemBgStyle.borderRadius="".concat(this.buttonPadding,"px 0 0 ").concat(this.buttonPadding,"px")),t>0&&t<this.list.length-1&&(this.itemBgStyle.borderRadius="0")),setTimeout((function(){e.itemBgLeft()}),10),this.vibrateShort&&this.firstTimeVibrateShort,this.firstTimeVibrateShort=!1},click:function(t){t!=this.currentIndex&&(this.currentIndex=t,this.changeSectionStatus(t),this.$emit("change",Number(t)))},getTabsInfo:function(){for(var t=this,e=uni.createSelectorQuery().in(this),i=0;i<this.list.length;i++)e.select(".u-item-"+i).boundingClientRect();e.exec((function(e){e.length||setTimeout((function(){t.getTabsInfo()}),10),e.map((function(e,i){t.listInfo[i].width=e.width})),("subsection"==t.mode||"button"==t.mode)&&(t.itemBgStyle.width=t.listInfo[0].width+"px"),t.itemBgLeft()}))},itemBgLeft:function(){var t=this;this.animation?this.itemBgStyle.transition="all 0.35s":this.itemBgStyle.transition="all 0s";var e=0;this.listInfo.map((function(i,n){n<t.currentIndex&&(e+=i.width)})),"subsection"==this.mode?this.itemBgStyle.left=e+"px":"button"==this.mode&&(this.itemBgStyle.left=e+this.buttonPadding+"px")}}};e.default=n},a1e8:function(t,e,i){"use strict";var n=i("4154"),o=i.n(n);o.a},be1b:function(t,e,i){"use strict";i.r(e);var n=i("8847"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},be7e:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uIcon:i("6b83").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?i("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),i("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},r=[]},ced9:function(t,e,i){var n=i("18ad");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("9d233cb2",n,!0,{sourceMap:!1,shadowMode:!1})},e57a:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-2cafbb2d]{background-color:#f7fcff;padding-bottom:%?30?%}.utoptab[data-v-2cafbb2d]{width:%?702?%;margin:%?24?%}.lists[data-v-2cafbb2d]{width:%?750?%;padding:0 %?24?%}.lists .listone[data-v-2cafbb2d]{width:%?702?%;background-color:#fff;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-bottom:%?24?%;padding:%?18?% %?24?%}.lists .listone .onetop[data-v-2cafbb2d]{width:100%}.lists .listone .onetop .fonts[data-v-2cafbb2d]{font-size:%?30?%;color:#333}.lists .listone .onetop uni-input[data-v-2cafbb2d]{width:%?320?%;height:%?64?%;line-height:%?64?%;border:1px solid #ddd7ff;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding-left:%?20?%;font-size:%?24?%}.lists .listone .onetop .btn[data-v-2cafbb2d]{width:%?140?%;height:%?72?%;line-height:%?72?%;text-align:center;background-color:#9d9ffd;font-size:%?28?%;color:#fff;-webkit-border-radius:%?20?%;border-radius:%?20?%}.lists .listone .onebot[data-v-2cafbb2d]{margin-top:%?36?%}.lists .listone .onebot uni-view[data-v-2cafbb2d]{font-size:%?24?%;color:#333}.lists .listone .onebot uni-input[data-v-2cafbb2d]{width:%?180?%;height:%?52?%;line-height:%?52?%;border:1px solid #ddd7ff;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding-left:%?16?%;font-size:%?20?%}body.?%PAGE?%[data-v-2cafbb2d]{background-color:#f7fcff}",""]),t.exports=e},f25d:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uSubsection:i("8010").default,uToast:i("3fa4").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[0!=t.roomlist.length?i("v-uni-view",{staticClass:"utoptab"},[i("u-subsection",{attrs:{list:t.roomlist,current:t.current,"active-color":"#fff","inactive-color":"#333","bg-color":"#fff","button-color":"#A897ED","font-size":"30",height:"96"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sectionChange.apply(void 0,arguments)}}})],1):t._e(),i("v-uni-view",{staticClass:"lists"},t._l(t.listarr,(function(e,n){return i("v-uni-view",{key:n,staticClass:"listone"},[i("v-uni-view",{staticClass:"onetop dis-jasc"},[i("v-uni-view",{staticClass:"fonts"},[t._v(t._s(e.name))]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入"},model:{value:e.odds,callback:function(i){t.$set(e,"odds",i)},expression:"item.odds"}}),i("v-uni-view",{staticClass:"btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.updateOdds(e)}}},[t._v("保存")])],1),i("v-uni-view",{staticClass:"onebot dis-jasc"},[i("v-uni-view",{},[t._v("最大限额")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入"},model:{value:e.max,callback:function(i){t.$set(e,"max",i)},expression:"item.max"}}),i("v-uni-view",{},[t._v("最小限额")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入"},model:{value:e.min,callback:function(i){t.$set(e,"min",i)},expression:"item.min"}})],1)],1)})),1),i("u-toast",{ref:"uToast"})],1)},r=[]},fe08:function(t,e,i){"use strict";var n=i("ced9"),o=i.n(n);o.a}}]);