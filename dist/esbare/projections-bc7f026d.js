function n(n){return n}var t=[{init:function(){},forward:n,inverse:n,names:["longlat","identity"]}],r={},o=[];function e(n,t){var e=o.length;return n.names?(o[e]=n,n.names.forEach((function(n){r[n.toLowerCase()]=e})),this):(console.log(t),!0)}var a={start:function(){t.forEach(e)},add:e,get:function(n){if(!n)return!1;var t=n.toLowerCase();return void 0!==r[t]&&o[r[t]]?o[r[t]]:void 0}};export{a as p};
//# sourceMappingURL=projections-bc7f026d.js.map
