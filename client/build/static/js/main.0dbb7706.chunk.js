(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{13:function(e,t,a){e.exports=a(38)},18:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=a(5),i=a(4);var s=function({children:e}){return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},e)};a(18);var u=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")},m=a(2),d=a.n(m),h=function(){return d.a.get("/api/books")},f=function(e){return d.a.delete("/api/books/"+e)},E=function(e){return d.a.post("/api/books",e)};function p({size:e,children:t}){return r.a.createElement("div",{className:e.split(" ").map(e=>"col-"+e).join(" ")},t)}function b({fluid:e,children:t}){return r.a.createElement("div",{className:"container".concat(e?"-fluid":"")},t)}function g({fluid:e,children:t}){return r.a.createElement("div",{className:"row".concat(e?"-fluid":"")},t)}a(37);function v({children:e}){return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},e))}function N({children:e}){return r.a.createElement("li",{className:"list-group-item"},e)}function y(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({className:"form-control"},e)))}function j(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function k(e){return r.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var O=function(){const e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({title:"",author:"",synopsis:""}),m=Object(i.a)(c,2),d=m[0],O=m[1];function w(){h().then(e=>l(e.data)).catch(e=>console.log(e))}function x(e){const t=e.target,a=t.name,n=t.value;O(Object(o.a)(Object(o.a)({},d),{},{[a]:n}))}return Object(n.useEffect)(()=>{w()},[]),r.a.createElement(b,{fluid:!0},r.a.createElement(g,null,r.a.createElement(p,{size:"md-6"},r.a.createElement(s,null,r.a.createElement("h1",null,"What Books Should I Read?")),r.a.createElement("form",null,r.a.createElement(y,{onChange:x,name:"title",placeholder:"Title (required)",value:d.title}),r.a.createElement(y,{onChange:x,name:"author",placeholder:"Author (required)",value:d.author}),r.a.createElement(j,{onChange:x,name:"synopsis",placeholder:"Synopsis (Optional)",value:d.synopsis}),r.a.createElement(k,{disabled:!(d.author&&d.title),onClick:function(e){e.preventDefault(),d.title&&d.author&&E({title:d.title,author:d.author,synopsis:d.synopsis}).then(()=>O({title:"",author:"",synopsis:""})).then(()=>w()).catch(e=>console.log(e))}},"Submit Book"))),r.a.createElement(p,{size:"md-6 sm-12"},r.a.createElement(s,null,r.a.createElement("h1",null,"Books On My List")),a.length?r.a.createElement(v,null,a.map(e=>r.a.createElement(N,{key:e._id},r.a.createElement("a",{href:"/books/"+e._id},r.a.createElement("strong",null,e.title," by ",e.author)),r.a.createElement(u,{onClick:()=>{return t=e._id,void f(t).then(e=>w()).catch(e=>console.log(e));var t}})))):r.a.createElement("h3",null,"No Results to Display"))))};var w=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var x=function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(O,null))};c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.0dbb7706.chunk.js.map