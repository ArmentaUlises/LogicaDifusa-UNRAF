(self.webpackChunktp4Ia=self.webpackChunktp4Ia||[]).push([[3952],{3952:(t,e,n)=>{"use strict";n.r(e),n.d(e,{HomePageModule:()=>h});var i=n(8583),a=n(3083),o=n(665),r=n(2316),d=n(639);const l=[{path:"",component:(()=>{class t{constructor(){this.consty=this.getRandomArbitrary(150,450),this.data={gravedad:9.81,posY:this.consty,velY:0,x:400,y:this.consty,objY:225,ventilador:this.getRandomArbitrary(1,120),caos:0}}ngOnInit(){this.update()}boolean(t,e){return t<=e?0:1}booleanInverted(t,e){return t<e?1:0}grade(t,e,n){let i=0;return t<=e?i=0:t>e&&t<n?i=t/(n-e)-e/(n-e):t>=n&&(i=1),i}gradeInverted(t,e,n){let i=0;return t<=e?i=1:t>e&&t<n?i=t/(n-e)-n/(n-e):t>=n&&(i=0),i}triangle(t,e,n,i){let a=0;return t<=e?a=0:t>e&&t<=n?a=t/(n-e)-e/(n-e):t>n&&t<=i?a=-t/(i-n)+i/(i-n):t>i&&(a=0),a}trapezoid(t,e,n,i,a){let o=0;return t<=e?o=0:t>e&&t<=n?o=t/(n-e)-e/(n-e):t>n&&t<=i?o=1:t>i&&t<=a?o=-t/(a-i)+a/(a-i):t>a&&(o=0),o}operatorAND(t,e){return Math.min(t,e)}operatorOR(t,e){return Math.max(t,e)}operatorNOT(t){return 1-t}getRandomArbitrary(t,e){return Math.random()*(e-t)+t}draw(t){document.getElementById("ball").style.top=t.y+"px",document.getElementById("posicion").innerText=t.y,document.getElementById("velocidad").innerText=t.velY,document.getElementById("ventilador").innerText=t.ventilador,document.getElementById("objetivo").innerText=t.objY}fuzzification(t){let e=t.objY-t.posY,n=this.triangle(e,-40,0,40),i=this.trapezoid(e,20,80,120,180),a=this.trapezoid(e,120,160,240,280),o=this.grade(e,240,300),r=this.trapezoid(e,-180,-120,-80,-20),d=this.trapezoid(e,-280,-240,-160,-120),l=this.gradeInverted(e,-300,-240);return t.ventilador=(9.8*n+4*i+2*a+1*o+14*r+15.5*d+18*l)/(n+i+a+o+r+d+l),t}setCaos(){this.data.caos=this.getRandomArbitrary(-3,3)}update(){setInterval(()=>{this.data=this.fuzzification(this.data),this.setCaos(),this.data.velY+=.01*(this.data.gravedad-this.data.ventilador+this.data.caos),this.data.posY+=this.data.velY,this.data.y=this.data.posY,this.draw(this.data)},20)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-home"]],decls:33,vars:6,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],["id","leftbox"],["id","middlebox"],["id","target"],["id","ball"],["id","fan"],["id","rightbox"],["name","options-outline"]],template:function(t,e){1&t&&(d.TgZ(0,"ion-header",0),d.TgZ(1,"ion-toolbar"),d.TgZ(2,"ion-title"),d._uU(3," TP 4 - IA - Armenta Ulises "),d.qZA(),d.qZA(),d.qZA(),d.TgZ(4,"ion-content",1),d.TgZ(5,"ion-header",2),d.TgZ(6,"ion-toolbar"),d.TgZ(7,"ion-title",3),d._uU(8,"Blank"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(9,"div",4),d._UZ(10,"div",5),d.TgZ(11,"div",6),d._UZ(12,"div",7),d._UZ(13,"div",8),d._UZ(14,"div",9),d.qZA(),d.TgZ(15,"div",10),d.TgZ(16,"div"),d.TgZ(17,"ion-label"),d._uU(18,"Info del sistema"),d.qZA(),d._UZ(19,"ion-icon",11),d.TgZ(20,"ion-list"),d.TgZ(21,"ion-label"),d._uU(22),d.qZA(),d._UZ(23,"br"),d.TgZ(24,"ion-label"),d._uU(25),d.qZA(),d._UZ(26,"br"),d.TgZ(27,"ion-label"),d._uU(28),d.qZA(),d._UZ(29,"br"),d.TgZ(30,"ion-label"),d._uU(31),d.qZA(),d._UZ(32,"br"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.Q6J("translucent",!0),d.xp6(4),d.Q6J("fullscreen",!0),d.xp6(18),d.hij("Objetivo en Y: ",e.data.y,""),d.xp6(3),d.hij("Posicion en Y: ",e.data.posY,""),d.xp6(3),d.hij("Velocidad en Y:",e.data.velY,""),d.xp6(3),d.hij("Ventilador: ",e.data.ventilador,""))},directives:[a.Gu,a.sr,a.wd,a.W2,a.Q$,a.gu,a.q_],styles:["#leftbox[_ngcontent-%COMP%]{float:left;width:46%;height:100vh}#middlebox[_ngcontent-%COMP%]{float:left;background:#add8e6;width:100px;height:450px;text-align:center}#rightbox[_ngcontent-%COMP%]{float:right;width:33%;height:100vh;position:relative}#ball[_ngcontent-%COMP%]{background:red;border-radius:50%;top:200px}#ball[_ngcontent-%COMP%], #target[_ngcontent-%COMP%]{width:32px;height:32px;position:absolute;left:50%;transform:translateX(-50%)}#target[_ngcontent-%COMP%]{top:225px;background:#0f06;shape-outside:ellipse(50% 50%);-webkit-clip-path:ellipse(50% 50%);clip-path:ellipse(50% 50%)}#fan[_ngcontent-%COMP%]{position:absolute;top:455px;width:80px;height:80px;margin-left:10px;background:red}"]}),t})()}];let s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[r.Bz.forChild(l)],r.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[i.ez,o.u5,a.Pc,s]]}),t})()}}]);