(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,n,t){},22:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),u=t(16),a=t.n(u),o=(t(21),t(7)),i=t(3),s=(t(22),t(4)),b=t.n(s),j=t(0),d=function(e){var n=e.findPerson,t=e.onChange;return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:["find : ",Object(j.jsx)("input",{value:n,onChange:t})]})})},l=function(e){var n=e.onSubmit,t=e.onChangeName,c=e.valueName,r=e.onChangeNumber,u=e.valueNumber;return Object(j.jsxs)("form",{onSubmit:n,children:[Object(j.jsxs)("div",{children:["name : ",Object(j.jsx)("input",{value:c,onChange:t})]}),Object(j.jsxs)("div",{children:["number : ",Object(j.jsx)("input",{type:"tel",value:u,onChange:r})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})},f=function(e){var n=e.persons,t=e.deletePerson;return n.map((function(e){return Object(j.jsxs)("li",{children:[e.name," ",e.number,Object(j.jsx)("button",{onClick:function(){return t(e.id)},children:"delete"})]})}))},h="/api/persons",O=function(){return b.a.get(h).then((function(e){return e.data}))},m=function(e){return b.a.post(h,e).then((function(e){return e.data}))},v=function(e){return b.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},p=function(e,n){return b.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))};var g=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],u=Object(c.useState)(""),a=Object(i.a)(u,2),s=a[0],b=a[1],h=Object(c.useState)(""),g=Object(i.a)(h,2),x=g[0],C=g[1],S=Object(c.useState)(""),w=Object(i.a)(S,2),N=w[0],P=w[1],k=Object(c.useState)([]),y=Object(i.a)(k,2),F=(y[0],y[1],Object(c.useState)(null)),L=Object(i.a)(F,2),D=(L[0],L[1]);return Object(c.useEffect)((function(){O().then((function(e){return r(e)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(d,{value:N,onChange:function(e){var n=e.target.value;P(n);var c=t.filter((function(e){return-1!==e.name.toLowerCase().search(n.toLowerCase())}));r(c)}}),Object(j.jsx)("h1",{children:"Add Person"}),Object(j.jsx)(l,{onSubmit:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===s})),c=n[0],u=Object(o.a)(Object(o.a)({},c),{},{number:x});if(0!==n.length)window.confirm("".concat(c.name," alredy register , replace the old number ? "))&&p(u.id,u).then((function(e){r(t.map((function(n){return n.id!==c.id?n:e}))),b(""),C("")}));else{var a={name:s,number:x};m(a).then((function(e){t.concat(e)})),r(t.concat(a)),b(""),C("")}},valueName:s,onChangeName:function(e){b(e.target.value)},onChangeNumber:function(e){C(e.target.value)},valueNumber:x}),Object(j.jsx)("h2",{children:"Numbers"}),Object(j.jsx)(f,{persons:t,deletePerson:function(e){var n=t.filter((function(n){return n.id===e})),c=n[0].name,u=n[0].id;window.confirm("Delete ".concat(c," ?"))&&(v(u),D("".concat(c," was deleterd"))),r(t.filter((function(n){return n.id!==e})))}})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,u=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),u(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),x()}},[[43,1,2]]]);
//# sourceMappingURL=main.466e809d.chunk.js.map