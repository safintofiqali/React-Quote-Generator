(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(3),a=n.n(o),s=(n(12),n(4)),u=n(5),i=n(7),h=n(6),l=(n(13),n(0));var d=function(t){var e=t.quote,n=e.author,c=e.text;return Object(l.jsxs)("div",{className:"quote-card",children:[Object(l.jsx)("div",{className:"author",children:n}),Object(l.jsx)("div",{className:"text",children:c})]})};n(15);var j=function(t){return Object(l.jsx)("div",{className:"quote-list",children:t.quotes.map((function(t,e){return Object(l.jsx)(d,{quote:t},e)}))})},f=(n(16),function(t){Object(i.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={quotes:[],searchField:""},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(e){return t.setState({quotes:e})}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.quotes,c=e.searchField,r=n.filter((function(t){var e;return null===(e=t.author)||void 0===e?void 0:e.toLowerCase().includes(c.toLowerCase())}));return Object(l.jsxs)("div",{className:"app",children:[console.log(r),Object(l.jsx)("input",{type:"search",placeholder:"Search for author quotes",onChange:function(e){return t.setState({searchField:e.target.value})}}),Object(l.jsx)(j,{quotes:r})]})}}]),n}(c.Component)),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),o(t),a(t)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),p()}],[[17,1,2]]]);
//# sourceMappingURL=main.a7b17c29.chunk.js.map