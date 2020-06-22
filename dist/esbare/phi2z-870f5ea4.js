import{H as a}from"./values-6ec7b927.js";function t(t,r,n){var o=t*n,e=.5*t;return o=Math.pow((1-o)/(1+o),e),Math.tan(.5*(a-r))/o}function r(t,r){for(var n,o,e=.5*t,h=a-2*Math.atan(r),s=0;s<=15;s++)if(n=t*Math.sin(h),h+=o=a-2*Math.atan(r*Math.pow((1-n)/(1+n),e))-h,Math.abs(o)<=1e-10)return h;return-9999}export{r as p,t};
//# sourceMappingURL=phi2z-870f5ea4.js.map
