(function(t){function e(e){for(var n,r,o=e[0],l=e[1],s=e[2],m=0,p=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(c.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},c=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var u=l;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},1692:function(t,e,a){},"8a78":function(t,e,a){"use strict";var n=a("ea1c"),i=a.n(n);i.a},9989:function(t,e,a){"use strict";var n=a("1692"),i=a.n(n);i.a},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("tool-bar"),a("v-main",[a("router-view")],1)],1)},c=[],r=a("d4ec"),o=a("262e"),l=a("2caf"),s=a("9ab4"),u=a("60a3"),m=(a("f5df1"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",color:"hojichaLatte"}},[a("v-toolbar-title",{staticClass:"white--text text-h5"},[t._v("takumma")])],1)}),p=[],b=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);b=Object(s["a"])([u["a"]],b);var v=b,f=v,d=a("2877"),h=a("6544"),j=a.n(h),O=a("40dc"),k=a("2a7f"),g=Object(d["a"])(f,m,p,!1,null,null,null),y=g.exports;j()(g,{VAppBar:O["a"],VToolbarTitle:k["a"]});var _=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);_=Object(s["a"])([Object(u["a"])({components:{ToolBar:y}})],_);var x=_,C=x,w=a("7496"),V=a("f6c4"),T=Object(d["a"])(C,i,c,!1,null,null,null),S=T.exports;j()(T,{VApp:w["a"],VMain:V["a"]});var I=a("9483");Object(I["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var L=a("8c4f"),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home text-center mt-12 px-8"},[a("title-text",{attrs:{title:"PROFILES"}}),a("profile",{staticClass:"mb-12 mt-4",attrs:{profiles:t.data.profiles}}),a("title-text",{attrs:{title:"SKILLS"}}),a("skill-list",{staticClass:"mb-12 mt-4",attrs:{skills:t.data.skills}}),a("title-text",{attrs:{title:"PRODUCTS"}}),a("product-list",{staticClass:"mb-12 mt-4",attrs:{products:t.data.products}}),a("title-text",{attrs:{title:"ACTIVITIES"}}),a("timeline",{staticClass:"mb-12 mt-4",attrs:{activities:t.data.activities}}),a("title-text",{attrs:{title:"LINKS"}}),a("link-button-toggle",{staticClass:"mb-12 mt-4",attrs:{links:t.data.links}})],1)},E=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-h3 chocolate--text"},[t._v(t._s(t.title))])},$=[],P=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(s["a"])([Object(u["b"])(String)],P.prototype,"title",void 0),P=Object(s["a"])([u["a"]],P);var F=P,N=F,H=Object(d["a"])(N,A,$,!1,null,null,null),R=H.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-list",t._l(t.profiles,(function(t){return a("v-list-item",{key:t.name},[a("profile-list-item",{attrs:{item:t}})],1)})),1)],1)},M=[],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item-content",[a("v-list-item-title",{staticClass:"wrap-text text-h5 chocolate--text font-weight-bold"},[t._v(" "+t._s(t.item.name)+": ")]),t._l(t.item.values,(function(e){return a("div",{key:e,staticClass:"text-h6 font-weight-regular"},[t._v(" "+t._s(e)+" ")])}))],2)},D=[],U=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(s["a"])([Object(u["b"])()],U.prototype,"item",void 0),U=Object(s["a"])([u["a"]],U);var K=U,W=K,q=(a("8a78"),a("5d23")),z=Object(d["a"])(W,G,D,!1,null,"51026d54",null),X=z.exports;j()(z,{VListItemContent:q["a"],VListItemTitle:q["c"]});var Y=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(s["a"])([Object(u["b"])(Array)],Y.prototype,"profiles",void 0),Y=Object(s["a"])([Object(u["a"])({components:{ProfileListItem:X}})],Y);var Q=Y,Z=Q,tt=a("8860"),et=a("da13"),at=Object(d["a"])(Z,J,M,!1,null,null,null),nt=at.exports;j()(at,{VList:tt["a"],VListItem:et["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skill-list"},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.skills,(function(e){return a("v-col",{key:e.name,attrs:{xs:"12",sm:"4",md:"3",lg:"2",cols:t.skills.length,align:"center"}},[a("skill-list-card",{attrs:{skill:e}})],1)})),1)],1)],1)},ct=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[a("v-card",{attrs:{tile:"",height:"150",width:"150",elevation:n?8:2}},[a("v-card-title",{staticClass:"justify-center text-no-wrap chocolate--text"},[t._v(" "+t._s(t.skill.name)+" ")]),a("v-layout",{staticClass:"justify-center"},[a("v-icon",{attrs:{size:"64",color:n?t.skill.color:"softBlack"}},[t._v(" "+t._s(t.skill.icon)+" ")])],1)],1)]}}])})},ot=[],lt=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(s["a"])([Object(u["b"])()],lt.prototype,"skill",void 0),lt=Object(s["a"])([u["a"]],lt);var st=lt,ut=st,mt=a("b0af"),pt=a("99d9"),bt=a("ce87"),vt=a("132d"),ft=a("a722"),dt=Object(d["a"])(ut,rt,ot,!1,null,null,null),ht=dt.exports;j()(dt,{VCard:mt["a"],VCardTitle:pt["c"],VHover:bt["a"],VIcon:vt["a"],VLayout:ft["a"]});var jt=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(s["a"])([Object(u["b"])()],jt.prototype,"skills",void 0),jt=Object(s["a"])([Object(u["a"])({components:{SkillListCard:ht}})],jt);var Ot=jt,kt=Ot,gt=a("62ad"),yt=a("a523"),_t=a("0fd9"),xt=Object(d["a"])(kt,it,ct,!1,null,null,null),Ct=xt.exports;j()(xt,{VCol:gt["a"],VContainer:yt["a"],VRow:_t["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-list"},[a("v-list",{staticClass:"align-center justify-center"},t._l(t.products,(function(e){return a("v-list-item",{key:e.name,staticClass:"pa-3 justify-center",attrs:{cols:t.products.length}},[a("product-list-card",{attrs:{product:e}})],1)})),1)],1)},Vt=[],Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"px-3",attrs:{tile:"",width:"800",elevation:"2"}},[a("v-list-item",[a("v-list-item-content",{staticClass:"text-left"},[a("v-list-item-title",{staticClass:"text-h4 chocolate--text mb-4 d-inline-flex"},[t._v(" "+t._s(t.product.name)+" "),t._l(t.product.techs,(function(t,e){return a("tech-chip",{key:e,class:0==e?"ml-6":"ml-2",attrs:{tech:t}})}))],2),a("v-list-item-subtitle",{staticClass:"wrap-text text-body-1 mr-3 mb-3 ml-6 font-weight-bold"},[t._v(" "+t._s(t.product.memo)+" ")])],1)],1),a("v-card-actions",[a("text-button-toggle",{attrs:{links:t.product.links}})],1)],1)},St=[],It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-chip",{staticClass:"ml-2 my-auto chocolate chocolate--text",attrs:{outlined:""}},[a("v-icon",{class:t.$vuetify.breakpoint.xs?"":"mr-1"},[t._v(t._s(t.tech.icon))]),t._v(" "+t._s(t.$vuetify.breakpoint.xs?"":t.tech.name)+" ")],1)},Lt=[],Bt=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(s["a"])([Object(u["b"])()],Bt.prototype,"tech",void 0),Bt=Object(s["a"])([u["a"]],Bt);var Et=Bt,At=Et,$t=a("cc20"),Pt=Object(d["a"])(At,It,Lt,!1,null,null,null),Ft=Pt.exports;j()(Pt,{VChip:$t["a"],VIcon:vt["a"]});var Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn-toggle",{staticClass:"ml-auto mr-2"},t._l(t.links,(function(t){return a("text-button",{key:t.name,staticClass:"mr-4",attrs:{link:t}})})),1)},Ht=[],Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{text:"",color:"chocolate",href:t.link.url}},[a("v-icon",{staticClass:"mr-1",attrs:{color:"chocolate"}},[t._v(" "+t._s(t.link.icon)+" ")]),t._v(" "+t._s(t.link.name)+" ")],1)},Jt=[],Mt=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(s["a"])([Object(u["b"])()],Mt.prototype,"link",void 0),Mt=Object(s["a"])([u["a"]],Mt);var Gt=Mt,Dt=Gt,Ut=a("8336"),Kt=Object(d["a"])(Dt,Rt,Jt,!1,null,null,null),Wt=Kt.exports;j()(Kt,{VBtn:Ut["a"],VIcon:vt["a"]});var qt=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(s["a"])([Object(u["b"])()],qt.prototype,"links",void 0),qt=Object(s["a"])([Object(u["a"])({components:{TextButton:Wt}})],qt);var zt=qt,Xt=zt,Yt=a("a609"),Qt=Object(d["a"])(Xt,Nt,Ht,!1,null,null,null),Zt=Qt.exports;j()(Qt,{VBtnToggle:Yt["a"]});var te=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(s["a"])([Object(u["b"])()],te.prototype,"product",void 0),te=Object(s["a"])([Object(u["a"])({components:{TechChip:Ft,TextButtonToggle:Zt}})],te);var ee=te,ae=ee,ne=(a("9989"),Object(d["a"])(ae,Tt,St,!1,null,"6b3343c5",null)),ie=ne.exports;j()(ne,{VCard:mt["a"],VCardActions:pt["a"],VListItem:et["a"],VListItemContent:q["a"],VListItemSubtitle:q["b"],VListItemTitle:q["c"]});var ce=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(s["a"])([Object(u["b"])()],ce.prototype,"products",void 0),ce=Object(s["a"])([Object(u["a"])({components:{ProductListCard:ie}})],ce);var re=ce,oe=re,le=Object(d["a"])(oe,wt,Vt,!1,null,null,null),se=le.exports;j()(le,{VList:tt["a"],VListItem:et["a"]});var ue=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"timeline"},[a("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.xs}},t._l(t.activities,(function(e,n){return a("v-timeline-item",{key:n,attrs:{color:"chocolate",icon:e.icon,"fill-dot":""},scopedSlots:t._u([t.$vuetify.breakpoint.xs?null:{key:"opposite",fn:function(){return[a("span",{staticClass:"chocolate--text text-body-1",domProps:{textContent:t._s(e.time_stamp)}})]},proxy:!0}],null,!0)},[a("v-card",{staticClass:"pa-4 text-left"},[a("v-card-title",{staticClass:"font-weight-regular"},[t._v(" "+t._s(e.title)+" ")]),a("v-card-text",{staticClass:"font-weight-regular text-body-2"},[t._v(" "+t._s(e.memo)+" ")])],1)],1)})),1)],1)},me=[],pe=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(s["a"])([Object(u["b"])(Array)],pe.prototype,"activities",void 0),pe=Object(s["a"])([u["a"]],pe);var be=pe,ve=be,fe=a("8414"),de=a("1e06"),he=Object(d["a"])(ve,ue,me,!1,null,null,null),je=he.exports;j()(he,{VCard:mt["a"],VCardText:pt["b"],VCardTitle:pt["c"],VTimeline:fe["a"],VTimelineItem:de["a"]});var Oe=a("dd8b"),ke=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.links,(function(e){return a("v-col",{key:e.name,attrs:{xs:"4",sm:"2",md:"2",lg:"1",cols:t.links.length}},[a("link-button",{attrs:{link:e}})],1)})),1)],1)},ge=[],ye=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{fab:"",dark:"",color:t.link.color,href:t.link.url}},[a("v-icon",{attrs:{dark:"","x-large":""}},[t._v(" "+t._s(t.link.icon)+" ")])],1)},_e=[],xe=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(s["a"])([Object(u["b"])()],xe.prototype,"link",void 0),xe=Object(s["a"])([u["a"]],xe);var Ce=xe,we=Ce,Ve=Object(d["a"])(we,ye,_e,!1,null,null,null),Te=Ve.exports;j()(Ve,{VBtn:Ut["a"],VIcon:vt["a"]});var Se=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(s["a"])([Object(u["b"])()],Se.prototype,"links",void 0),Se=Object(s["a"])([Object(u["a"])({components:{LinkButton:Te}})],Se);var Ie=Se,Le=Ie,Be=Object(d["a"])(Le,ke,ge,!1,null,null,null),Ee=Be.exports;j()(Be,{VCol:gt["a"],VRow:_t["a"]});var Ae=function(t){Object(o["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.data=Oe,t}return a}(u["c"]);Ae=Object(s["a"])([Object(u["a"])({components:{LinkButtonToggle:Ee,TitleText:R,Profile:nt,SkillList:Ct,ProductList:se,Timeline:je}})],Ae);var $e=Ae,Pe=$e,Fe=Object(d["a"])(Pe,B,E,!1,null,null,null),Ne=Fe.exports;n["a"].use(L["a"]);var He=[{path:"/",name:"Home",component:Ne}],Re=new L["a"]({mode:"history",base:"",routes:He}),Je=Re,Me=a("f309"),Ge=(a("d1e78"),a("7db0"),a("fcf4")),De={hojichaLatte:"#C4A169",chocolate:"#583819",softBlack:"#555555",accent:Ge["a"].cyan.accent1},Ue=[{eventName:"Xmas",timeStamp:"2020-12-25",colors:{hojichaLatte:"#33743B",chocolate:"#C92629",softBlack:"#5B362C",accent:"#9F863F"}},{eventName:"Halloween",timeStamp:"2020-10-31",colors:{hojichaLatte:"#000000",chocolate:"#FF6600",softBlack:"#663399",accent:"#FFBB00"}}];function Ke(){var t=new Date,e=Ue.find((function(e){var a=new Date(e.timeStamp);return a.getMonth()===t.getMonth()&&a.getDate()===t.getDate()}));return e?e.colors:De}n["a"].use(Me["a"]);var We=new Me["a"]({theme:{themes:{light:Ke()}},icons:{iconfont:"md"}});n["a"].config.productionTip=!1,new n["a"]({router:Je,vuetify:We,render:function(t){return t(S)}}).$mount("#app")},dd8b:function(t){t.exports=JSON.parse('{"profiles":[{"name":"NAME","values":["市川拓磨","(takumma)"]},{"name":"BIRTHDAY","values":["2002-10-3"]},{"name":"AGE","values":["18"]},{"name":"BELONG","values":["鈴鹿工業高等専門学校","電子情報工学科"]},{"name":"INTERESTs","values":["Rock Music","Vue.js","Flutter","Secity"]}],"products":[{"name":"TABINOW","techs":[{"name":"kotlin","icon":"mdi-language-kotlin"},{"name":"Android","icon":"android"}],"links":[{"name":"GITHUB","icon":"mdi-github","url":"https://github.com/takumma/tabinow"}],"memo":"旅行計画に沿った天気予報が見られるAndroidアプリ。機械学習により、訪れる場所がその天気に適しているかを表すおすすめ度をみることができる。"},{"name":"mask-game","techs":[{"name":"Vue.js","icon":"mdi-vuejs"},{"name":"JavaScript","icon":"mdi-language-javascript"}],"links":[{"name":"GITHUB","icon":"mdi-github","url":"https://github.com/takumma/mask-game"}],"memo":"コロナによる休校期間中につくったマスクをつけて遊ぶブラウザゲーム。"},{"name":"kinku.me","techs":[{"name":"Vue.js","icon":"mdi-vuejs"},{"name":"JavaScript","icon":"mdi-language-javascript"},{"name":"Spring Boot","icon":"mdi-leaf"}],"links":[],"memo":"CCCu22で作ったハラスメントに関するWebアプリケーション。初対面の大学生3人と開発をした。"},{"name":"Fulfill","techs":[{"name":"Vue.js","icon":"mdi-vuejs"},{"name":"ionic","icon":"code"},{"name":"Typescript","icon":"mdi-language-typescript"},{"name":"firebase","icon":"mdi-firebase"}],"links":[{"name":"GITHUB","icon":"mdi-github","url":"https://github.com/jphacks/C_2006"},{"name":"SITE URL","icon":"mdi-link","url":"https://c-2006.firebaseapp.com/"}],"memo":"JPHACKS2020で開発したおうち時間を共有するアプリ。Vue3 × ionicでWeb/mobile(android)アプリとして開発した。"},{"name":"PowerPoint-Karaoke-Web","techs":[{"name":"React","icon":"mdi-react"},{"name":"TypeScript","icon":"mdi-language-typescript"}],"links":[{"name":"GITHUB","icon":"mdi-github","url":"https://github.com/takumma/powerpoint-karaoke-web"},{"name":"SITE URL","icon":"mdi-link","url":"https://takumma.github.io/powerpoint-karaoke-web/"}],"memo":"パワポカラオケができるサイト"}],"skills":[{"name":"C++","icon":"mdi-language-cpp","color":"blue"},{"name":"JavaScript","icon":"mdi-language-javascript","color":"yellow"},{"name":"Kotlin","icon":"mdi-language-kotlin","color":"purple"},{"name":"Dart","icon":"code","color":"blue"},{"name":"Typescript","icon":"mdi-language-typescript","color":"black"},{"name":"Python","icon":"mdi-language-python","color":"blue"},{"name":"Vue.js","icon":"mdi-vuejs","color":"green"},{"name":"Flutter","icon":"code","color":"cyan"},{"name":"Android","icon":"android","color":"green"},{"name":"Git(Github)","icon":"mdi-github","color":"black"}],"activities":[{"title":"パソコン甲子園2019モバイル部門本戦出場","icon":"mdi-android","time_stamp":"2019/11/12","memo":"会津大学主催のAndroidアプリコンテスト。友達2人と3人で出場し、Androidアプリ\\"TABINOW\\"を開発した。"},{"title":"CCCu22参加","icon":"code","time_stamp":"2020/9","memo":"Code for Japan主催のHackathon。ここで知り合った大学生3人と組んで4人で\\"kinku.me\\"を開発した。"},{"title":"JPHACKS2020参加","icon":"code","time_stamp":"2020/10/31~11/07","memo":"onlineハッカソン。同級生3人と参加して\\"Fulfill\\"を作った。"}],"links":[{"icon":"mdi-github","color":"black","url":"https://github.com/takumma"},{"icon":"mdi-twitter","color":"cyan","url":"https://twitter.com/tak_kum_ma"}]}')},ea1c:function(t,e,a){}});
//# sourceMappingURL=app.59742717.js.map