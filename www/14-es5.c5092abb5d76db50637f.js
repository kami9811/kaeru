!function(){function e(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function i(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{NiNz:function(t,n,o){"use strict";o.r(n),o.d(n,"NewProfilePageModule",(function(){return p}));var a,g,r,s=o("ofXK"),l=o("3Pt+"),b=o("TEn/"),c=o("tyNb"),d=o("fXoL"),u=o("dVwY"),m=[{path:"",component:(a=function(){function t(i,n){var o=this;e(this,t),this.router=i,this.gs=n,this.school="",this.profile="",this.imgHeight=600,this.image_1="",this.image_1_button="\u767b\u9332\u3059\u308b",this.image_1_flag=!1,this.image_2="",this.image_2_button="\u767b\u9332\u3059\u308b",this.image_2_flag=!1,this.image_3="",this.image_3_button="\u767b\u9332\u3059\u308b",this.image_3_flag=!1,this.image_sns="",this.image_sns_button="\u767b\u9332\u3059\u308b",this.image_sns_flag=!1,this.register_disabled=!0,this.register_outline="outline",this.register_button="\u767b\u9332(\u753b\u50cf\u304c\u672a\u767b\u9332\u3067\u3059...)",this.postObj={},this.returnObj={},this.postProfile=function(){o.postObj.id=localStorage.id,o.postObj.age=o.age,o.postObj.gender=o.gender,o.postObj.school=o.school,o.postObj.profile=o.profile,o.postObj.image_1=o.image_1,o.postObj.image_2=o.image_2,o.postObj.image_3=o.image_3,o.postObj.image_sns=o.image_sns,o.postObj.hash=localStorage.hash,o.gs.http("https://kn46itblog.com/biz/oncon10/php_apis/user/edit/profile",o.postObj).subscribe((function(e){console.log(e),200==e.status&&(console.log("Successed!"),o.router.navigate(["/tabs","tab1","login"]))}),(function(e){console.log("error: "+e)}))},this.loadPicture=function(e){console.log(e);var i=e.srcElement.files[0],t=new FileReader,n=new Image;t.onloadend=function(){n.onload=function(){console.log("Image Processing");var i=n.src.substring(5,n.src.indexOf(";")),t=n.width*(o.imgHeight/n.height),a=document.createElement("canvas");a.width=t,a.height=o.imgHeight,a.getContext("2d").drawImage(n,0,0,t,o.imgHeight),"image_1"==e.target.id?(o.image_1=a.toDataURL(i),console.log(o.image_1)):"image_2"==e.target.id?(o.image_2=a.toDataURL(i),console.log(o.image_2)):"image_3"==e.target.id?(o.image_3=a.toDataURL(i),console.log(o.image_3)):"image_sns"==e.target.id&&(o.image_sns=a.toDataURL(i),console.log(o.image_sns))},n.src=t.result,"image_1"==e.target.id?o.image_1_flag=!0:"image_2"==e.target.id?o.image_2_flag=!0:"image_3"==e.target.id?o.image_3_flag=!0:"image_sns"==e.target.id&&(o.image_sns_flag=!0),o.image_1_flag&&o.image_2_flag&&o.image_3_flag&&o.image_sns_flag&&(o.register_disabled=!1,o.register_button="\u767b\u9332",o.register_outline="solid")},i&&t.readAsDataURL(i)}}var n,o,a;return n=t,(o=[{key:"ngOnInit",value:function(){}}])&&i(n.prototype,o),a&&i(n,a),t}(),a.\u0275fac=function(e){return new(e||a)(d.Hb(c.g),d.Hb(u.a))},a.\u0275cmp=d.Bb({type:a,selectors:[["app-new-profile"]],decls:43,vars:7,consts:[["color","main"],[1,"ion-padding",3,"submit"],[1,"top"],["lines","full",1,"ion-padding-bottom"],["position","floating"],["required","","type","number","name","age",3,"ngModel","ngModelChange"],["required","","name","gender","placeholder","1\u3064\u9078\u3093\u3067\u304f\u3060\u3055\u3044",3,"ngModel","ngModelChange"],["value","0"],["value","1"],["value","2"],["required","","type","text","name","school",3,"ngModel","ngModelChange"],["required","","name","profile",3,"ngModel","ngModelChange"],[1,"ion-padding"],["type","file","accept","image/*","id","image_1",3,"change"],["type","file","accept","image/*","id","image_2",3,"change"],["type","file","accept","image/*","id","image_3",3,"change"],["type","file","accept","image/*","id","image_sns",3,"change"],["type","submit","expand","block","color","main",3,"fill","disabled"]],template:function(e,i){1&e&&(d.Mb(0,"ion-header"),d.Ib(1,"ion-toolbar",0),d.Lb(),d.Mb(2,"ion-content"),d.Mb(3,"form",1),d.Ub("submit",(function(){return i.postProfile()})),d.Mb(4,"div",2),d.jc(5,"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3092\u767b\u9332\u3057\u3066\u304f\u3060\u3055\u3044"),d.Lb(),d.Mb(6,"ion-item",3),d.Mb(7,"ion-label",4),d.jc(8,"\u5e74\u9f62"),d.Lb(),d.Mb(9,"ion-input",5),d.Ub("ngModelChange",(function(e){return i.age=e})),d.Lb(),d.Mb(10,"ion-label"),d.jc(11,"\u6027\u5225"),d.Lb(),d.Mb(12,"ion-select",6),d.Ub("ngModelChange",(function(e){return i.gender=e})),d.Mb(13,"ion-select-option",7),d.jc(14,"\u305d\u306e\u4ed6"),d.Lb(),d.Mb(15,"ion-select-option",8),d.jc(16,"\u7537"),d.Lb(),d.Mb(17,"ion-select-option",9),d.jc(18,"\u5973"),d.Lb(),d.Lb(),d.Mb(19,"ion-label",4),d.jc(20,"\u5b66\u6821\u540d"),d.Lb(),d.Mb(21,"ion-input",10),d.Ub("ngModelChange",(function(e){return i.school=e})),d.Lb(),d.Mb(22,"ion-label",4),d.jc(23,"\u81ea\u5df1\u7d39\u4ecb\u6587"),d.Lb(),d.Mb(24,"ion-textarea",11),d.Ub("ngModelChange",(function(e){return i.profile=e})),d.Lb(),d.Lb(),d.Mb(25,"div",2),d.jc(26,"\u30de\u30c3\u30c1\u30f3\u30b0\u30a2\u30d4\u30fc\u30eb\u753b\u50cf1\u2728"),d.Lb(),d.Mb(27,"div",12),d.Mb(28,"input",13),d.Ub("change",(function(e){return i.loadPicture(e)})),d.Lb(),d.Lb(),d.Mb(29,"div",2),d.jc(30,"\u30de\u30c3\u30c1\u30f3\u30b0\u30a2\u30d4\u30fc\u30eb\u753b\u50cf2\u2728"),d.Lb(),d.Mb(31,"div",12),d.Mb(32,"input",14),d.Ub("change",(function(e){return i.loadPicture(e)})),d.Lb(),d.Lb(),d.Mb(33,"div",2),d.jc(34,"\u30de\u30c3\u30c1\u30f3\u30b0\u30a2\u30d4\u30fc\u30eb\u753b\u50cf3\u2728"),d.Lb(),d.Mb(35,"div",12),d.Mb(36,"input",15),d.Ub("change",(function(e){return i.loadPicture(e)})),d.Lb(),d.Lb(),d.Mb(37,"div",2),d.jc(38,"\u30a4\u30f3\u30b9\u30bfQR\u30b3\u30fc\u30c9"),d.Lb(),d.Mb(39,"div",12),d.Mb(40,"input",16),d.Ub("change",(function(e){return i.loadPicture(e)})),d.Lb(),d.Lb(),d.Mb(41,"ion-button",17),d.jc(42),d.Lb(),d.Lb(),d.Lb()),2&e&&(d.xb(9),d.Zb("ngModel",i.age),d.xb(3),d.Zb("ngModel",i.gender),d.xb(9),d.Zb("ngModel",i.school),d.xb(3),d.Zb("ngModel",i.profile),d.xb(17),d.Zb("fill",i.register_outline)("disabled",i.register_disabled),d.xb(1),d.kc(i.register_button))},directives:[b.q,b.F,b.m,l.i,l.e,l.f,b.u,b.v,b.t,b.J,l.h,l.d,l.g,b.y,b.M,b.z,b.N,b.D,b.e],styles:[".top[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:large}.file-button-label[_ngcontent-%COMP%]{text-align:center;font-size:1em;color:#000;background-color:#7634f8;border-radius:10px;padding:12px 30px;display:block;margin-left:auto;margin-right:auto;width:100%}.file-button[_ngcontent-%COMP%]{display:none}"]}),a)}],f=((r=function i(){e(this,i)}).\u0275mod=d.Fb({type:r}),r.\u0275inj=d.Eb({factory:function(e){return new(e||r)},imports:[[c.i.forChild(m)],c.i]}),r),p=((g=function i(){e(this,i)}).\u0275mod=d.Fb({type:g}),g.\u0275inj=d.Eb({factory:function(e){return new(e||g)},imports:[[s.b,l.a,b.G,f]]}),g)}}])}();