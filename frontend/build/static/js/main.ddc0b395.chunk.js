(this["webpackJsonpavaliacao-eduardo-gb"]=this["webpackJsonpavaliacao-eduardo-gb"]||[]).push([[0],{1202:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),u=e(40),c=e.n(u),i=e(63),o=e(549),s=e(1244),l=e(1245),p=e(559),f=Object(p.a)({}),d=e(163),v=e(201),E=e(55),m=e(56);function b(){var t=Object(E.a)(["\ncolor: white;\nwidth: 100%;\nheight: 100%;\ndisplay: flex;\njustify-content: center;\n"]);return b=function(){return t},t}function h(){var t=Object(E.a)(["\nbackground: linear-gradient(90deg,#514a9d,#24c6dc);\ncolor: white;\nwidth: 100vw;\nheight: 100vh;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n"]);return h=function(){return t},t}var k=m.a.div(h()),w=m.a.div(b()),y=e(34),O=e.n(y),g=e(64),j=e(556),T=e(557),x=(e(579),e(202)),S=e.n(x),_=(e(402),function(){function t(){Object(j.a)(this,t),this.BASE_URL="http://localhost:3001/api"}return Object(T.a)(t,[{key:"getData",value:function(){var t=Object(g.a)(O.a.mark((function t(n,e){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.post("".concat(this.BASE_URL,"/app/getall"),{limit:n,offset:e});case 3:return a=t.sent,t.abrupt("return",a.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",{status:"erro",mensagem:t.t0.response.data.message});case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(n,e){return t.apply(this,arguments)}}()},{key:"cleanTable",value:function(){var t=Object(g.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.delete("".concat(this.BASE_URL,"/app/cleantable"));case 3:return t.abrupt("return");case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",{status:"erro",mensagem:t.t0.response.data.message});case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));return function(){return t.apply(this,arguments)}}()},{key:"addNewLink",value:function(){var t=Object(g.a)(O.a.mark((function t(n,e,a,r){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n,e,a,r),t.prev=1,t.next=4,S.a.post("".concat(this.BASE_URL,"/app/addnewlink"),{level:n,name:e,parent:a,url:r});case 4:return t.abrupt("return");case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",{status:"erro",mensagem:t.t0.response.data.message});case 10:case"end":return t.stop()}}),t,this,[[1,7]])})));return function(n,e,a,r){return t.apply(this,arguments)}}()}]),t}()),L=function(t,n){return function(){var e=Object(g.a)(O.a.mark((function e(a){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"SET_TRUE",payload:!0}),e.next=4,(new _).getData(t,n);case 4:void 0!=(r=e.sent)&&a({type:"SET_DATA",payload:r}),a({type:"SET_FALSE",payload:!1}),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),a({type:"SET_FALSE",payload:!1}),e.abrupt("return",{status:"erro",mensagem:e.t0.response});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},R=e(1247),A=e(1238);function D(){var t=Object(E.a)(["\nborder-radius: 2px;\nmargin-top: 5px;\nbox-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\nborder: 1pt solid rgba(91, 228, 186,0.1);\n"]);return D=function(){return t},t}function F(){var t=Object(E.a)(["\npadding: 5px;\ncolor: ",";\nwhite-space: nowrap;\noverflow: hidden;\nwidth: 95vw;\n"]);return F=function(){return t},t}var N=Object(m.a)(A.a)(F(),(function(t){return t.cor})),U=m.a.div(D());var C=Object(i.c)((function(t){return{links:t.linksdata.linksdata}}),(function(t){return{updateData:function(n,e){return t(L(n,e))}}}))((function(t){var n=function(){var n=Object(g.a)(O.a.mark((function n(e){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.updateData(10,e);case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();Object(a.useEffect)((function(){n(0)}),[]);var e=function(){var t=Object(g.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(10*(Number(e.target.innerText)-1));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t.links&&t.links.data&&t.links.data.map((function(t,n){return r.a.createElement(U,{key:n},r.a.createElement(N,null,t.URL))})),r.a.createElement(R.a,{count:Math.ceil(t.links&&t.links.status&&t.links.status[0].TOTALQTD/10),color:"secondary",onChange:e})))})),I=e(1242),B=e(1241);function H(){var t=Object(E.a)(["\npadding: 5px;\ncolor: ",";\nwhite-space: nowrap;\noverflow: hidden;\nwidth: 95vw;\n"]);return H=function(){return t},t}function Q(){var t=Object(E.a)(["\nwidth: 95%;\ndisplay: flex;\njustify-content: flex-end;\nalign-items: center;\n"]);return Q=function(){return t},t}function X(){var t=Object(E.a)(["\ncolor: black;\nborder: 1px solid black;\nwidth: 100%;\n"]);return X=function(){return t},t}Object(m.a)(B.a)(X());var J=m.a.div(Q()),M=Object(m.a)(A.a)(H(),(function(t){return t.cor}));var V=Object(i.c)((function(t){return{links:t.linksdata.linksdata,refresh:t.needrefresh}}),(function(t){return{cleanTable:function(){return t(function(){var t=Object(g.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"SET_TRUE",payload:!0}),t.next=4,(new _).cleanTable();case 4:n({type:"SET_FALSE",payload:!1}),n({type:"SET_REFRESH_TRUE",payload:!0}),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),n({type:"SET_FALSE",payload:!1}),t.abrupt("return",{status:"erro",mensagem:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}())},updateData:function(n,e){return t(L(n,e))}}}))((function(t){var n=function(){var n=Object(g.a)(O.a.mark((function n(){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.cleanTable(),setTimeout((function(){t.updateData(10,0)}),2e3);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return r.a.createElement(J,null,t.links&&t.links.status&&t.links.status[0].TOTALQTD>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null,"Now we have ",t.links&&t.links.status&&t.links.status[0].TOTALQTD," urls stored. For these jobs, we already done ",t.links&&t.links.status&&t.links.status[0].FINISHED," and still ",t.links&&t.links.status&&t.links.status[0].PENDING," remaining."),r.a.createElement(I.a,{variant:"outlined",onClick:function(){t.updateData(10,0)}},"Refresh database"),r.a.createElement(I.a,{variant:"outlined",onClick:function(){n()}},"Clear database")),t.links&&t.links.status&&0==t.links.status[0].TOTALQTD&&r.a.createElement(M,null,"Now we have ",t.links&&t.links.status&&t.links.status[0].TOTALQTD," urls to job."))})),z=e(200),G=e(298),P=e(301),W=e(1246);function q(){var t=Object(E.a)(["\nwidth: 100%;\n"]);return q=function(){return t},t}function K(){var t=Object(E.a)(["\nmargin-left: 5px;\nmargin-right: 15px;\n"]);return K=function(){return t},t}function Y(){var t=Object(E.a)(["\nwidth: 100%;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"]);return Y=function(){return t},t}function Z(){var t=Object(E.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\npadding: 20px;\n"]);return Z=function(){return t},t}function $(){var t=Object(E.a)(["\nwidth: 100%;\ndisplay: flex;\njustify-content: space-evenly;\n"]);return $=function(){return t},t}var tt=m.a.div($()),nt=m.a.div(Z()),et=m.a.div(Y()),at=Object(m.a)(I.a)(K()),rt=Object(m.a)(W.a)(q());var ut=Object(i.c)((function(t){return{links:t.linksdata.linksdata}}),(function(t){return{addNewLink:function(n){return t(function(t){return function(){var n=Object(g.a)(O.a.mark((function n(e){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"SET_TRUE",payload:!0}),n.next=4,(new _).addNewLink(0,"Main Job",0,t);case 4:e({type:"SET_FALSE",payload:!1}),e({type:"SET_REFRESH_TRUE",payload:!0}),n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),e({type:"SET_FALSE",payload:!1}),n.abrupt("return",{status:"erro",mensagem:n.t0.response.data.message});case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()}(n))},updateData:function(n,e){return t(L(n,e))}}}))((function(t){var n=Object(a.useState)({}),e=Object(P.a)(n,2),u=e[0],c=e[1],i=Object(a.useState)(!1),o=Object(P.a)(i,2),s=o[0],l=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(tt,null,r.a.createElement(nt,null,r.a.createElement(A.a,{variant:"h3"},"Links Crawler")),r.a.createElement(et,null,r.a.createElement(rt,{error:s,name:"urlfield",value:u.urlfield,onChange:function(t){c(Object(G.a)(Object(G.a)({},u),{},Object(z.a)({},t.target.name,t.target.value))),l(!1)},label:"type url",variant:"filled"}),r.a.createElement(at,{onClick:function(n){u.urlfield.startsWith("http://www")?(c({urlfield:""}),t.addNewLink(u.urlfield),setTimeout((function(){t.updateData(10,0)}),2e3)):l(!0)},variant:"contained",color:"primary"},"Add"))))})),ct=e(1248),it=e(1243);var ot=Object(i.c)((function(t){return{LoadState:t.loading.status}}),(function(t){return{}}))((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ct.a,{style:{zIndex:10},open:t.LoadState},r.a.createElement(it.a,{color:"primary"})))})),st="/",lt=function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null,r.a.createElement(ut,null),r.a.createElement(V,null),r.a.createElement(w,null,t.children),r.a.createElement(ot,null)))};var pt,ft=function(t){return r.a.createElement(d.a,{history:t.history},r.a.createElement(v.c,null,r.a.createElement(lt,null,r.a.createElement(v.a,{exact:!0,path:st,component:C}))))},dt=e(88),vt=e(107),Et={linksdata:[]},mt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_DATA":return{linksdata:n.payload};default:return t}},bt={status:!1},ht=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_FALSE":return{status:!1};case"SET_TRUE":return{status:!0};default:return t}},kt={status:!1},wt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_REFRESH_FALSE":return{status:!1};case"SET_REFRESH_TRUE":return{status:!0};default:return t}},yt=e(547),Ot=Object(dt.a)(),gt=[Object(vt.a)(Object(yt.a)(Ot),o.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(t){return t}],jt=Object(vt.e)((pt=Ot,Object(vt.c)({router:Object(d.b)(pt),linksdata:mt,loading:ht,needrefresh:wt})),vt.d.apply(void 0,gt));function Tt(t){return r.a.createElement(i.a,{store:jt},r.a.createElement(s.a,{theme:f},r.a.createElement(l.a,null),r.a.createElement(ft,{history:Ot})))}var xt=document.getElementById("root");c.a.render(r.a.createElement(Tt,null),xt)},449:function(t,n){},569:function(t,n,e){t.exports=e(1202)},594:function(t,n){},596:function(t,n){},607:function(t,n){},609:function(t,n){},634:function(t,n){},636:function(t,n){},637:function(t,n){},643:function(t,n){},645:function(t,n){},663:function(t,n){},665:function(t,n){},677:function(t,n){},680:function(t,n){},686:function(t,n){},688:function(t,n){},711:function(t,n){},857:function(t,n){},858:function(t,n){}},[[569,1,2]]]);
//# sourceMappingURL=main.ddc0b395.chunk.js.map