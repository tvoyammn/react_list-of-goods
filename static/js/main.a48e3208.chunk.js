(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var s=n(3),o=n.n(s),r=n(4),c=n(5),i=n(7),l=n(6),a=n(1),h=n.n(a),d=(n(12),n(0)),u=function(t){var e=t.goods,n=t.isReversed,s=t.sortedAlphabetically,o=t.sortedByLength,r=t.goodsLength,c=e.filter((function(t){return t.length>=r}));return s&&c.sort(),o&&c.sort((function(t,e){return t.length-e.length})),n&&c.reverse(),Object(d.jsx)("ul",{children:c.map((function(t){return Object(d.jsx)("li",{children:t},t)}))})},b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={goods:b,started:!1,isReversed:!1,sortedAlphabetically:!1,sortedByLength:!1,goodsLength:1},t.start=function(){t.setState({started:!0})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortAlphabetically=function(){t.setState((function(t){return{sortedAlphabetically:!t.sortedAlphabetically,sortedByLength:!1}}))},t.sortByLength=function(){t.setState((function(t){return{sortedByLength:!t.sortedByLength,sortedAlphabetically:!1}}))},t.reset=function(){t.setState({isReversed:!1,sortedAlphabetically:!1,sortedByLength:!1,goodsLength:1})},t.changeLength=function(e){t.setState({goodsLength:+e.target.value})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goods,s=e.started,o=e.isReversed,r=e.sortedAlphabetically,c=e.sortedByLength,i=e.goodsLength;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Goods"}),!s&&Object(d.jsx)("button",{type:"button",onClick:this.start,children:"Start"}),s&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{goods:n,isReversed:o,sortedAlphabetically:r,sortedByLength:c,goodsLength:i}),Object(d.jsx)("button",{type:"button",onClick:this.reverse,children:"Reverse"}),Object(d.jsx)("button",{type:"button",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",onClick:this.sortByLength,children:"Sort by length"}),Object(d.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"}),Object(d.jsxs)("select",{id:"length",onChange:function(e){t.changeLength(e)},value:i,children:[Object(d.jsx)("option",{value:"1",children:"1"}),Object(d.jsx)("option",{value:"2",children:"2"}),Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"4",children:"4"}),Object(d.jsx)("option",{value:"5",children:"5"}),Object(d.jsx)("option",{value:"6",children:"6"}),Object(d.jsx)("option",{value:"7",children:"7"}),Object(d.jsx)("option",{value:"8",children:"8"}),Object(d.jsx)("option",{value:"9",children:"9"}),Object(d.jsx)("option",{value:"10",children:"10"})]})]})]})}}]),n}(h.a.Component),g=j;o.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a48e3208.chunk.js.map