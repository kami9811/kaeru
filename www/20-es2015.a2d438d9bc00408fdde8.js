(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"k+ul":function(t,o,n){"use strict";n.r(o),n.d(o,"Tab3PageModule",(function(){return d}));var e=n("TEn/"),i=n("tyNb"),s=n("ofXK"),r=n("3Pt+"),a=n("mrSG"),c=n("fXoL"),l=n("dVwY");let b=(()=>{class t{constructor(t,o,n,e){this.router=t,this.route=o,this.alertController=n,this.gs=e,this.postObj={},this.returnObj={},this.distance=localStorage.distance,this.logout=()=>{localStorage.clear(),console.log("logout"),this.router.navigate(["/login"])},this.setDistance=()=>{this.postObj.id=localStorage.id,this.postObj.distance=this.distance,this.postObj.hash=localStorage.hash,this.gs.http("https://kn46itblog.com/hackathon/winter2020/php_apis/registerDistance.php",this.postObj).subscribe(t=>{console.log("Distance has been changed!"),localStorage.distance=this.distance,this.alertSave()},t=>console.error(t))}}ngOnInit(){this.route.params.subscribe(t=>{},t=>console.error(t))}alertSave(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({message:"\u8a2d\u5b9a\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f.",buttons:["OK"]});yield t.present()}))}}return t.\u0275fac=function(o){return new(o||t)(c.Hb(i.g),c.Hb(i.a),c.Hb(e.a),c.Hb(l.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-tab3"]],decls:9,vars:2,consts:[[3,"translucent"],["color","main"],["id","icon","src","../../assets/icon/icon_trans.png"],[3,"fullscreen"],["id","top",1,"ion-padding"],["expand","block","color","main","fill","outline",3,"click"]],template:function(t,o){1&t&&(c.Mb(0,"ion-header",0),c.Mb(1,"ion-toolbar",1),c.Mb(2,"ion-title"),c.Ib(3,"ion-img",2),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content",3),c.Mb(5,"div",4),c.jc(6,"\u5404\u7a2e\u8a2d\u5b9a"),c.Lb(),c.Mb(7,"ion-button",5),c.Ub("click",(function(){return o.logout()})),c.jc(8,"\u30ed\u30b0\u30a2\u30a6\u30c8"),c.Lb(),c.Lb()),2&t&&(c.Zb("translucent",!0),c.xb(4),c.Zb("fullscreen",!0))},directives:[e.q,e.F,e.E,e.s,e.m,e.e],styles:["#top-button[_ngcontent-%COMP%]{font-size:2em;color:#fff;background-color:#ffd1d1;border-radius:5px;padding:10px 30px;width:80%}#top-button-area[_ngcontent-%COMP%]{text-align:center;font-size:1em}#top[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:large}"]}),t})();var p=n("qtYk");const u=[{path:"",component:b}];let h=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(o){return new(o||t)},imports:[[i.i.forChild(u)],i.i]}),t})(),d=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(o){return new(o||t)},imports:[[e.G,s.b,r.a,p.a,i.i.forChild([{path:"",component:b}]),h]]}),t})()}}]);