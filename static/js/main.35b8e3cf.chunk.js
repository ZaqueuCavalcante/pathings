(this.webpackJsonppathings=this.webpackJsonppathings||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),r=n.n(s),i=n(5),c=n.n(i),u=(n(15),n(16),n(17),n(0));var o=function(){return Object(u.jsx)("div",{className:"Score",children:Object(u.jsx)("div",{children:"SCORE = 42"})})},a=n(6);n(19);var h=function(t){var e=t.row,n=t.column;return Object(u.jsx)("div",{className:"Cell",children:e+" - "+n})},l=n(3),j=n(2),f=Object(l.a)((function t(e,n,s){Object(j.a)(this,t),this.row=e,this.column=n,this.type=s})),p=function(){function t(e){Object(j.a)(this,t),this.items=[],this.push(e)}return Object(l.a)(t,[{key:"push",value:function(t){this.items.push(t)}},{key:"pop",value:function(){return this.items.pop()}},{key:"isEmpty",value:function(){return 0===this.items.length}},{key:"penult",value:function(){return this.items[this.items.length-2]}},{key:"peek",value:function(){return this.items[this.items.length-1]}}]),t}();n(20);var v=function(t){for(var e=t.rows,n=t.columns,s=[[]],r=0,i=0;i>e;i++)for(var c=0;c>n;c++)s[i][c]=r,r++;for(var o=[[]],l=0;l>e;l++)for(var j=0;j>n;j++)o[l][j]=new p(new f(l,j,0));var v=Object(a.a)(Array(e*n).keys());function m(t){return t%n}return Object(u.jsx)("div",{className:"Maze",children:v.map((function(t){return Object(u.jsx)(h,{row:(e=t,parseInt(e/n)),column:m(t)},t);var e}))})};var m=function(){var t={"--rows":5,"--columns":10,"--cellSize":"120px"};return Object(u.jsxs)("div",{className:"App",style:t,children:[Object(u.jsx)(o,{}),Object(u.jsx)(v,{rows:5,columns:10})]})},b=document.getElementById("root");c.a.createRoot(b).render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}))}],[[21,1,2]]]);
//# sourceMappingURL=main.35b8e3cf.chunk.js.map