(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{X3zk:function(t,o,n){"use strict";n.r(o),n.d(o,"LoginPageModule",(function(){return c}));var i=n("ofXK"),s=n("3Pt+"),e=n("TEn/"),r=n("tyNb"),a=n("fXoL"),b=n("dVwY");const l=[{path:"",component:(()=>{class t{constructor(t,o){this.router=t,this.gs=o,this.id="",this.password="",this.status=0,this.postObj={},this.returnObj={},this.navigate=()=>{this.postObj.id=this.id,this.postObj.password=this.password,this.login()},this.navigateToSignup=()=>{this.router.navigate(["/signup"])},this.login=()=>{this.gs.http("https://kn46itblog.com/biz/oncon10/php_apis/user/edit/login",this.postObj).subscribe(t=>{console.log(t),this.returnObj=t,this.status=this.returnObj.status,200==this.status&&(localStorage.id=this.postObj.id,localStorage.password=this.postObj.password,localStorage.hash=this.returnObj.hash,console.log("Stored item!"),1==this.returnObj.register_flag?this.router.navigate(["/tabs","tab1","login"]):0==this.returnObj.register_flag&&this.router.navigate(["/new-profile"]))},t=>{console.log("error: "+t)})}}ngOnInit(){this.postObj.id=localStorage.id,this.postObj.password=localStorage.password,this.login()}}return t.\u0275fac=function(o){return new(o||t)(a.Hb(r.g),a.Hb(b.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-login"]],decls:18,vars:2,consts:[["color","main"],["src","../../assets/icon/icon.jpeg",1,"ion-padding","logo"],["id","top"],[1,"ion-padding",3,"submit"],["lines","full",1,"ion-padding-bottom"],["position","floating"],["required","","type","text","name","id",3,"ngModel","ngModelChange"],["required","","type","password","name","password",3,"ngModel","ngModelChange"],["type","submit","expand","block","color","main",1,""],["id","bottom-button","expand","block","fill","outline","color","main",3,"click"]],template:function(t,o){1&t&&(a.Mb(0,"ion-header"),a.Ib(1,"ion-toolbar",0),a.Lb(),a.Mb(2,"ion-content"),a.Ib(3,"ion-img",1),a.Mb(4,"div",2),a.jc(5,"\u30ed\u30b0\u30a4\u30f3"),a.Lb(),a.Mb(6,"form",3),a.Ub("submit",(function(){return o.navigate()})),a.Mb(7,"ion-item",4),a.Mb(8,"ion-label",5),a.jc(9,"ID"),a.Lb(),a.Mb(10,"ion-input",6),a.Ub("ngModelChange",(function(t){return o.id=t})),a.Lb(),a.Mb(11,"ion-label",5),a.jc(12,"\u30d1\u30b9\u30ef\u30fc\u30c9"),a.Lb(),a.Mb(13,"ion-input",7),a.Ub("ngModelChange",(function(t){return o.password=t})),a.Lb(),a.Lb(),a.Mb(14,"ion-button",8),a.jc(15,"\u30ed\u30b0\u30a4\u30f3"),a.Lb(),a.Lb(),a.Mb(16,"ion-button",9),a.Ub("click",(function(){return o.navigateToSignup()})),a.jc(17,"\u65b0\u898f\u767b\u9332\u306f\u3053\u3061\u3089"),a.Lb(),a.Lb()),2&t&&(a.xb(10),a.Zb("ngModel",o.id),a.xb(3),a.Zb("ngModel",o.password))},directives:[e.q,e.F,e.m,e.s,s.i,s.e,s.f,e.u,e.v,e.t,e.N,s.h,s.d,s.g,e.e],styles:["#top[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:large}#bottom-button[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:90%}.logo[_ngcontent-%COMP%]{height:300px}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(o){return new(o||t)},imports:[[r.i.forChild(l)],r.i]}),t})(),c=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(o){return new(o||t)},imports:[[i.b,s.a,e.G,g]]}),t})()}}]);