(function(){"use strict";var t={191:function(t,o,r){var e=r(963),n=r(252);const c={class:"layout"};function l(t,o,r,e,l,a){const i=(0,n.up)("Header"),u=(0,n.up)("Calculator"),s=(0,n.up)("Footer"),p=(0,n.up)("AnimateBg");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",c,[(0,n.Wm)(i),(0,n.Wm)(u),(0,n.Wm)(s)]),(0,n.Wm)(p)],64)}const a={class:"header"},i=(0,n._)("h1",{class:"header__title"},"Калькулятор HEX прозрачности",-1),u=[i];function s(t,o){return(0,n.wg)(),(0,n.iD)("header",a,u)}var p=r(744);const f={},h=(0,p.Z)(f,[["render",s]]);var d=h,v=r(577);const _={class:"calculator"},y={class:"calculator__percent"},m=["onClick"],g={class:"calculator__input"},b=(0,n._)("div",{class:"calculator__input-percent"},"%",-1),w={class:"calculator__range"};function C(t,o,r,c,l,a){const i=(0,n.up)("Slider");return(0,n.wg)(),(0,n.iD)("main",_,[(0,n._)("div",{class:"calculator__color",style:(0,v.j5)({background:l.color})},[(0,n._)("div",{class:(0,v.C_)(["calculator__color-input",{error:l.erorrInput}])},[(0,n.wy)((0,n._)("input",{type:"text",autofocus:"","onUpdate:modelValue":o[0]||(o[0]=t=>l.color=t),placeholder:"#FDC420"},null,512),[[e.nr,l.color]])],2),(0,n._)("div",{class:(0,v.C_)(["calculator__color-copy",{active:l.copyBtn}]),onClick:o[1]||(o[1]=(...t)=>a.copyColor&&a.copyColor(...t))},(0,v.zw)(l.copyText),3)],4),(0,n._)("div",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.percentList,(t=>((0,n.wg)(),(0,n.iD)("div",{class:(0,v.C_)(["calculator__percent-item",{active:t==this.value}]),onClick:o=>this.value=t,key:t},(0,v.zw)(t),11,m)))),128))]),(0,n._)("div",g,[(0,n.wy)((0,n._)("input",{class:"calculator__input-input",type:"number","onUpdate:modelValue":o[2]||(o[2]=t=>l.value=t)},null,512),[[e.nr,l.value]]),b]),(0,n._)("div",w,[(0,n.Wm)(i,{onUpdate:o[3]||(o[3]=t=>a.calculateOpacity(l.value)),lazy:!1,modelValue:l.value,"onUpdate:modelValue":o[4]||(o[4]=t=>l.value=t),class:"slider-blue",tooltips:!1},null,8,["modelValue"])])])}var x=r(297),k={components:{Slider:x.Z},data(){return{color:"",value:100,percentList:["10","20","30","40","50","60","70","80","90","100"],erorrInput:!1,copyBtn:!1,copyText:"Скопировать"}},methods:{calculateOpacity(t){if(this.color.length>=4&&this.color.startsWith("#")){this.erorrInput=!1,this.copyBtn=!0;const o=Math.round(t/100*255),r=(o+65536).toString(16).substr(-2);4===this.color.length&&(this.color=this.color.split("").map((t=>"#"==t?t:t+t)).join("")),this.color.length>7&&(this.color=this.color.substring(0,7)),this.color+=r}else this.erorrInput=!0,this.copyBtn=!1},copyColor(t){t.target.previousElementSibling.querySelector("input").select(),document.execCommand("copy"),this.copyText="Скопировано",setTimeout((()=>{this.copyText="Скопировать"}),2e3)}}};const O=(0,p.Z)(k,[["render",C]]);var D=O;const j={class:"footer"},B=(0,n._)("a",{href:"https://github.com/Brexston/hex-transparensy-calc",target:"_blank",class:"footer__link"},"Github",-1),T=[B];function H(t,o){return(0,n.wg)(),(0,n.iD)("footer",j,T)}const W={},Z=(0,p.Z)(W,[["render",H]]);var S=Z;const V={class:"firefly"};function F(t,o){return(0,n.wg)(),(0,n.iD)("div",V,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(25,(t=>(0,n._)("span",{key:t,class:"firefly__item"}))),64))])}const I={},U=(0,p.Z)(I,[["render",F]]);var z=U,A={name:"App",components:{Header:d,Calculator:D,Footer:S,AnimateBg:z}};const E=(0,p.Z)(A,[["render",l]]);var Y=E;(0,e.ri)(Y).mount("#app")}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var c=o[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,function(){var t=[];r.O=function(o,e,n,c){if(!e){var l=1/0;for(s=0;s<t.length;s++){e=t[s][0],n=t[s][1],c=t[s][2];for(var a=!0,i=0;i<e.length;i++)(!1&c||l>=c)&&Object.keys(r.O).every((function(t){return r.O[t](e[i])}))?e.splice(i--,1):(a=!1,c<l&&(l=c));if(a){t.splice(s--,1);var u=n();void 0!==u&&(o=u)}}return o}c=c||0;for(var s=t.length;s>0&&t[s-1][2]>c;s--)t[s]=t[s-1];t[s]=[e,n,c]}}(),function(){r.d=function(t,o){for(var e in o)r.o(o,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};r.O.j=function(o){return 0===t[o]};var o=function(o,e){var n,c,l=e[0],a=e[1],i=e[2],u=0;if(l.some((function(o){return 0!==t[o]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(i)var s=i(r)}for(o&&o(e);u<l.length;u++)c=l[u],r.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return r.O(s)},e=self["webpackChunkhex_transparensy_calc"]=self["webpackChunkhex_transparensy_calc"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(191)}));e=r.O(e)})();
//# sourceMappingURL=app.e4c3f51e.js.map