(this["webpackJsonpsail-size"]=this["webpackJsonpsail-size"]||[]).push([[0],{17:function(e,t,i){e.exports={container:"WindSpeedUnitSelector_container__3Il07",ktsButton:"WindSpeedUnitSelector_ktsButton__rqIAw",mpsButton:"WindSpeedUnitSelector_mpsButton__kKddL",inactive:"WindSpeedUnitSelector_inactive__Nwo5P",active:"WindSpeedUnitSelector_active__3rJPx"}},18:function(e,t,i){e.exports={sailContainer:"SailList_sailContainer__H4QIv",rangeContainer:"SailList_rangeContainer__1ItrP",rangeItem:"SailList_rangeItem__2jhCT"}},22:function(e,t,i){e.exports={container:"Settings_container__1w3Fz",controls:"Settings_controls__TehG4",minus:"Settings_minus__w5D37",plus:"Settings_plus__1XKZO"}},44:function(e,t,i){},45:function(e,t,i){},53:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i.n(n),c=i(25),a=i.n(c),r=(i(44),i(45),i(23)),l=i(4),j=i(3),o=i(37),d=Object(o.recoilPersist)({key:"config"}).persistAtom,u=Object(j.atom)({key:"windSpeedUnit",default:"kts",effects_UNSTABLE:[d]}),b=Object(j.atom)({key:"weight",default:82,effects_UNSTABLE:[d]}),m=Object(j.atom)({key:"sails",default:[],effects_UNSTABLE:[d]}),O=i(2),x=i(17),h=i.n(x),v=i(1),p=function(){var e=Object(j.useRecoilState)(u),t=Object(O.a)(e,2),i=t[0],n=t[1],s=function(e){return i===e?h.a.active:h.a.inactive},c=h.a.ktsButton+" "+s("kts"),a=h.a.mpsButton+" "+s("mps");return Object(v.jsxs)("div",{className:h.a.container,children:[Object(v.jsx)("button",{className:c,onClick:function(){return n("kts")},children:"kts"}),Object(v.jsx)("button",{className:a,onClick:function(){return n("mps")},children:"m/s"})]})},f=Array.from(new Array(23),(function(e,t){return t+12})),S=Array.from(new Array(23),(function(e,t){return t/2+6})),N=function(){var e=Object(j.useRecoilValue)(u),t=Object(j.useRecoilValue)(b);return Object(v.jsxs)("div",{children:[Object(v.jsx)(p,{}),Object(v.jsx)(_,{weight:t,unit:e})]})},_=function(e){if("kts"===e.unit){var t=f.map((function(t){return Object(v.jsx)(g,{windSpeed:t.toFixed(0),unit:"kts",sailSize:(i=e.weight,n=t,1.34*i/n).toFixed(1)},t);var i,n}));return Object(v.jsx)("div",{children:t})}if("mps"===e.unit){var i=S.map((function(t){return Object(v.jsx)(g,{windSpeed:t.toFixed(1),unit:"m/s",sailSize:(i=e.weight,n=t,.6893*i/n).toFixed(1)},t);var i,n}));return Object(v.jsx)("div",{children:i})}return Object(v.jsx)("div",{children:"TBD"})},g=function(e){return Object(v.jsxs)("div",{style:{lineHeight:"200%"},children:[e.windSpeed," ",e.unit," = ",e.sailSize," m2"]})},k=i(22),w=i.n(k),z=function(){var e=Object(j.useRecoilState)(b),t=Object(O.a)(e,2),i=t[0],n=t[1];return Object(v.jsxs)("div",{className:w.a.container,children:[Object(v.jsx)("div",{children:"Weight"}),Object(v.jsxs)("div",{className:w.a.controls,children:[Object(v.jsx)("button",{className:w.a.minus,onClick:function(){return n(i-1)}}),i,Object(v.jsx)("button",{className:w.a.plus,onClick:function(){return n(i+1)}})]})]})},y=i(15),A=i(55),C=i(24),F=i(18),B=i.n(F),I=function(){var e=Object(j.useRecoilState)(m),t=Object(O.a)(e,2),i=t[0],n=t[1],s=Object(j.useRecoilValue)(u),c=Object(j.useRecoilValue)(b);var a=Object(y.a)(i).sort((function(e,t){return t.size-e.size}));return Object(v.jsx)("div",{children:a.map((function(e){var t,a=(t=e.size,"kts"===s?function(e,t){var i=1.34*e/t;return{ideal:i,min:.8*i,max:1.2*i}}(c,t):function(e,t){var i=.6893*e/t;return{ideal:i,min:.8*i,max:1.2*i}}(c,t));return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:B.a.sailContainer,children:[Object(v.jsx)("div",{children:e.size.toFixed(1)}),Object(v.jsx)("div",{children:e.name}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{type:"button",onClick:function(t){return function(e){var t=i.filter((function(t){return t.id!==e}));n(t)}(e.id)},children:"X"})})]}),Object(v.jsxs)("div",{className:B.a.rangeContainer,children:[Object(v.jsxs)("div",{className:B.a.rangeItem,children:["low: ",a.min.toFixed(1)]}),Object(v.jsxs)("div",{className:B.a.rangeItem,children:["ideal: ",a.ideal.toFixed(1)]}),Object(v.jsxs)("div",{className:B.a.rangeItem,children:["top: ",a.max.toFixed(1)]})]})]},e.id)}))})},R=Object(j.atom)({key:"mySailsPageState",default:"list"}),T=function(){var e=Object(j.useRecoilState)(R),t=Object(O.a)(e,2),i=t[0],n=t[1];return"list"===i?Object(v.jsxs)("div",{children:["This is work in progress, proper visual design TBD",Object(v.jsx)(p,{}),Object(v.jsx)(I,{}),Object(v.jsx)("button",{onClick:function(e){return n("new")},children:"Add new sail"})]}):Object(v.jsx)(L,{})},L=function(){var e=Object(j.useSetRecoilState)(R),t=Object(j.useRecoilState)(m),i=Object(O.a)(t,2),n=i[0],s=i[1];function c(e){if(""===e.trim())return"Sail name must be not empty!"}function a(e){var t=Number(e);return Number.isNaN(t)?"Please enter a number for sail size!":t<1?"Size must be more than 1.0":t>12?"No one sails with sails bigger than 12.0; As a matter of fact, I wouldn't sail with 12.0 either, it's too big!":void 0}return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:"Adding new sail"}),Object(v.jsx)("div",{children:Object(v.jsx)(C.c,{initialValues:{sailName:"",size:""},onSubmit:function(t,i){var c=i.setSubmitting,a={id:Object(A.a)(),name:t.sailName,size:Number(t.size)};s([].concat(Object(y.a)(n),[a])),e("list"),c(!1)},children:function(t){var i=t.errors,n=t.touched;t.isValidating;return Object(v.jsxs)(C.b,{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"sailName",children:"Name"}),Object(v.jsx)(C.a,{id:"sailName",name:"sailName",placeholder:"Goya Banzai",validate:c}),i.sailName&&n.sailName&&Object(v.jsx)("div",{children:i.sailName})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"size",children:"Size"}),Object(v.jsx)(C.a,{type:"number",id:"size",name:"size",placeholder:"4.7",step:"0.1",validate:a}),i.size&&n.size&&Object(v.jsx)("div",{children:i.size})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{type:"submit",children:"Add"}),Object(v.jsx)("button",{type:"button",onClick:function(t){return e("list")},children:"Cancel"})]})]})}})})]})};function U(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(j.RecoilRoot,{children:Object(v.jsxs)(r.a,{basename:"/",hashType:"noslash",children:[Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:"App-menu",children:[Object(v.jsx)(r.b,{to:"/",className:"App-link",exact:!0,children:Object(v.jsx)("div",{className:"App-menu-item",children:"Wind"})}),Object(v.jsx)(r.b,{to:"/my",className:"App-link",children:Object(v.jsx)("div",{className:"App-menu-item",children:"My Sails"})}),Object(v.jsx)(r.b,{to:"/settings",className:"App-link",children:Object(v.jsx)("div",{className:"App-menu-item",children:"Settings"})})]})}),Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{path:"/",exact:!0,children:Object(v.jsx)(N,{})}),Object(v.jsx)(l.a,{path:"/my",children:Object(v.jsx)(T,{})}),Object(v.jsx)(l.a,{path:"/settings",children:Object(v.jsx)(z,{})})]})]})})})}var P=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,56)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;i(e),n(e),s(e),c(e),a(e)}))};a.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(U,{})}),document.getElementById("root")),P()}},[[53,1,2]]]);
//# sourceMappingURL=main.af8b301b.chunk.js.map