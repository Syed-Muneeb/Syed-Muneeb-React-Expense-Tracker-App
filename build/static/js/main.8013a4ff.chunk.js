(this.webpackJsonpdemo2=this.webpackJsonpdemo2||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c);n(13),n(14);var l=function(){return r.a.createElement("h1",null,"Expense Tracker by Syed Muneeb")},i=n(2),u=n(7),s=n(4),m=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(s.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(s.a)({},e,{transactions:[t.payload].concat(Object(u.a)(e.transactions))});default:return e}},d={transactions:[]},E=Object(a.createContext)(d),f=function(e){var t=e.children,n=Object(a.useReducer)(m,d),c=Object(i.a)(n,2),o=c[0],l=c[1];return r.a.createElement(E.Provider,{value:{transactions:o.transactions,delTransaction:function(e){l({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){l({type:"ADD_TRANSACTION",payload:e})}}}," ",t)},p=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.transactionAmount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",null,r.a.createElement("h4",null,"Current Balance"),r.a.createElement("h1",{id:"balance"},"$",e))},b=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.transactionAmount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=Math.abs(e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},n)))},v=function(e){var t=e.transaction,n=Object(a.useContext)(E).delTransaction,c=t.transactionAmount>0?"+":"-",o=t.transactionAmount>0?"plus":"minus";return r.a.createElement("li",{className:o},t.description,r.a.createElement("span",null,c,"$",Math.abs(t.transactionAmount)),r.a.createElement("button",{className:"delete-btn",onClick:function(){return n(t.id)}},"X"))},h=function(){var e=Object(a.useContext)(E).transactions;return r.a.createElement("div",null,r.a.createElement("h3",null,"Transaction History"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(v,{key:e.id,transaction:e})}))))},T=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),u=l[0],s=l[1],m=Object(a.useContext)(E).addTransaction;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add New Transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:(new Date).getTime(),description:n,transactionAmount:+u};m(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("input",{type:"text",id:"description",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Detail of Transaction",required:"required"})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"transactionamount"},"Transaction Amount"),r.a.createElement("input",{type:"number",id:"transactionamount",value:u,onChange:function(e){return s(e.target.value)},placeholder:"Dollar Value of Transaction",required:"required"})),r.a.createElement("button",{className:"btn"},"Add Transaction")))};var A=function(){return r.a.createElement(f,null,r.a.createElement(l,null),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(h,null),r.a.createElement(T,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8013a4ff.chunk.js.map