(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-record_list"],{"16cf":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var n={uCollapse:e("6f5d").default,uCollapseItem:e("b423").default,uPopup:e("2722").default,uToast:e("3fa4").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"lists"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.lists.length,expression:"lists.length == 0"}],staticStyle:{"text-align":"center"}},[t._v("暂无数据")]),t._l(t.lists,(function(i,n){return e("v-uni-view",{key:n,staticClass:"listone dis-pl"},[e("v-uni-view",{staticClass:"timg"},[e("v-uni-image",{attrs:{src:i.thumb}})],1),e("v-uni-view",{staticClass:"onerig"},[e("v-uni-view",{staticClass:"rigtop dis-jasc"},[e("v-uni-view",{staticClass:"rtlest"},[e("v-uni-view",{staticClass:"rnotime dis-alicen"},[e("v-uni-view",{},[t._v(t._s(i.userName))]),e("v-uni-view",{},[t._v(t._s("Completed"==i.status?"已开奖":"未开奖"))]),e("v-uni-view",{},[t._v(t._s(i.period))])],1),e("v-uni-view",{staticClass:"rigtime"},[t._v(t._s(t.$utils.formatDate(i.modifiedTime)))])],1),e("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getNumDetail(i.id)}}},[t._v("号码明细")])],1),e("v-uni-view",{staticClass:"rigbot"},[e("u-collapse",{attrs:{accordion:!1,"arrow-color":"#D4D4D4"}},[e("u-collapse-item",{attrs:{title:i.content}},[t._v(t._s(i.content))])],1)],1)],1)],1)}))],2),e("u-popup",{attrs:{mode:"center","border-radius":"20",closeable:!0,"close-icon-color":"#fff"},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[e("v-uni-view",{staticClass:"showpop"},[e("v-uni-view",{staticClass:"toptile"},[t._v("号码明细")]),e("v-uni-scroll-view",{attrs:{"scroll-y":"true","lower-threshold":"10"},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.loadMore.apply(void 0,arguments)}}},t._l(t.numList,(function(i,n){return e("v-uni-view",{key:n},[t._v(t._s(i))])})),1)],1)],1),e("u-toast",{ref:"uToast"})],1)},a=[]},"18ad":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-toast[data-v-2a6a561c]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;-webkit-border-radius:%?8?%;border-radius:%?8?%;background:#585858;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-2a6a561c]{opacity:1}.u-icon[data-v-2a6a561c]{margin-right:%?10?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-2a6a561c]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-2a6a561c]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-2a6a561c]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-2a6a561c]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-2a6a561c]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-2a6a561c]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-2a6a561c]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-2a6a561c]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-2a6a561c]{color:#fff;background-color:#585858}',""]),t.exports=i},2562:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,"uni-page-body[data-v-b0b58766]{background-color:#f7fcff;padding-bottom:%?10?%}.utoptab[data-v-b0b58766]{width:%?702?%;margin:%?24?%}.lists[data-v-b0b58766]{width:%?750?%;padding:%?24?%}.lists .listone[data-v-b0b58766]{width:100%;background-color:#fff;-webkit-border-radius:%?20?%;border-radius:%?20?%;padding:%?26?% %?28?% %?18?% %?30?%;margin-bottom:%?24?%}.lists .listone .timg[data-v-b0b58766]{margin-right:%?10?%}.lists .listone .timg uni-image[data-v-b0b58766]{width:%?84?%;height:%?84?%;-webkit-border-radius:50%;border-radius:50%}.lists .listone .onerig .rigtop[data-v-b0b58766]{width:%?550?%;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.lists .listone .onerig .rigtop .rnotime uni-view[data-v-b0b58766]{margin-right:%?12?%;font-size:%?32?%;color:#333}.lists .listone .onerig .rigtop .rnotime uni-view[data-v-b0b58766]:nth-of-type(2){height:%?36?%;line-height:%?36?%;padding:0 %?8?%;-webkit-border-radius:%?8?%;border-radius:%?8?%;border:1px solid #a29ffc;font-size:%?22?%;color:#a29ffc}.lists .listone .onerig .rigtop .rnotime uni-view[data-v-b0b58766]:nth-of-type(3){height:%?36?%;line-height:%?36?%;padding:0 %?8?%;-webkit-border-radius:%?8?%;border-radius:%?8?%;border:1px solid #fe9749;font-size:%?22?%;color:#fe9749}.lists .listone .onerig .rigtop .rigtime[data-v-b0b58766]{font-size:%?22?%;color:#dad3ff;margin-top:%?12?%}.lists .listone .onerig .rigtop .btn[data-v-b0b58766]{width:%?142?%;height:%?62?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;background-color:#9d9ffd;line-height:%?62?%;text-align:center;font-size:%?24?%;color:#fff}.lists .listone .onerig .rigbot[data-v-b0b58766]{width:%?550?%}.showpop[data-v-b0b58766]{width:%?702?%}.showpop .toptile[data-v-b0b58766]{width:%?702?%;height:%?88?%;line-height:%?88?%;-webkit-border-radius:%?20?% %?20?% 0 0;border-radius:%?20?% %?20?% 0 0;background:-webkit-gradient(linear,left top,left bottom,from(#959af7),to(#b397ea));background:-webkit-linear-gradient(top,#959af7,#b397ea);background:linear-gradient(180deg,#959af7,#b397ea);padding-left:%?38?%;font-size:%?28?%;color:#fff}.showpop uni-scroll-view[data-v-b0b58766]{width:%?702?%;height:%?1000?%;padding:%?10?% 0 %?20?% %?40?%}.showpop uni-scroll-view uni-view[data-v-b0b58766]{display:inline-block;padding:0 %?32?%;background-color:#f1ecff;-webkit-border-radius:%?10?%;border-radius:%?10?%;height:%?54?%;line-height:%?54?%;margin:%?30?% %?30?% 0 0;font-size:%?28?%;color:#9699f6}body.?%PAGE?%[data-v-b0b58766]{background-color:#f7fcff}",""]),t.exports=i},"3fa4":function(t,i,e){"use strict";e.r(i);var n=e("be7e"),o=e("6aaf");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("fe08");var r,s=e("f0c5"),l=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"2a6a561c",null,!1,n["a"],r);i["default"]=l.exports},"436b":function(t,i,e){"use strict";e("c975"),e("a9e3"),e("b64b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var i=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){i.isShow=!1,clearTimeout(i.timer),i.timer=null,"function"===typeof i.tmpConfig.callback&&i.tmpConfig.callback(),i.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};i.default=n},"4b9a":function(t,i,e){var n=e("2562");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("9a0122b0",n,!0,{sourceMap:!1,shadowMode:!1})},6332:function(t,i,e){"use strict";var n=e("4b9a"),o=e.n(n);o.a},"6aaf":function(t,i,e){"use strict";e.r(i);var n=e("436b"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},"820f":function(t,i,e){"use strict";e.r(i);var n=e("16cf"),o=e("ddb6");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("6332");var r,s=e("f0c5"),l=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"b0b58766",null,!1,n["a"],r);i["default"]=l.exports},be7e:function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var n={uIcon:e("6b83").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[e("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?e("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),e("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},a=[]},ced9:function(t,i,e){var n=e("18ad");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("9d233cb2",n,!0,{sourceMap:!1,shadowMode:!1})},ddb6:function(t,i,e){"use strict";e.r(i);var n=e("f0c3"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},f0c3:function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("2909")),a={data:function(){return{show:!1,lists:[],current:0,userId:null,numList:[],id:0,pageNo:1,pageNoNum:1,flag:!0}},onLoad:function(t){this.userId=t.id},onReachBottom:function(){this.pageNo++,this.getAllList()},methods:{getAllList:function(){var t=this,i={url:"agent/user/bet/list",methods:"POST",data:{pageNo:this.pageNo,length:30,userId:this.userId,sid:this.$utils.tokens}};this.$utils.getRequest(i,(function(i){t.lists=i.data}))},getNumDetail:function(t){var i=this;this.show=!0,this.id=t;var e={url:"agent/user/bet/numListByBetId",data:{pageNo:this.pageNoNum,length:52,betId:this.id,sid:this.$utils.tokens}};this.$utils.getRequest(e,(function(t){var e;0!=t.data.length?(i.flag=!0,(e=i.numList).push.apply(e,(0,o.default)(t.data))):i.flag=!1}))},loadMore:function(){this.flag?(this.pageNoNum++,this.getNumDetail(this.id)):this.$refs.uToast.show({title:"已经到底啦!",type:"warning"})}},mounted:function(){this.getAllList()}};i.default=a},fe08:function(t,i,e){"use strict";var n=e("ced9"),o=e.n(n);o.a}}]);