import{H as a}from"./values-f63d177f.js";function t(t,r,n){var o=t*n,f=.5*t;return o=Math.pow((1-o)/(1+o),f),Math.tan(.5*(a-r))/o}function r(t,r){for(var n,o,f=.5*t,h=a-2*Math.atan(r),s=0;s<=15;s++)if(n=t*Math.sin(h),h+=o=a-2*Math.atan(r*Math.pow((1-n)/(1+n),f))-h,Math.abs(o)<=1e-10)return h;return-9999}export{r as p,t};
//# sourceMappingURL=phi2z-7639e48f.js.map
