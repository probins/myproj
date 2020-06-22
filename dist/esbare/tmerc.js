import{p as t}from"./projections-bc7f026d.js";import{E as s,H as a}from"./values-6ec7b927.js";import{a as h,s as i}from"./adjust_lon-2464ab76.js";var r=.01068115234375;function o(t,s,a,h){return a*=s,s*=s,h[0]*t-a*(h[1]+s*(h[2]+s*(h[3]+s*h[4])))}var M={init:function(){this.x0=void 0!==this.x0?this.x0:0,this.y0=void 0!==this.y0?this.y0:0,this.long0=void 0!==this.long0?this.long0:0,this.lat0=void 0!==this.lat0?this.lat0:0,this.es&&(this.en=function(t){var s=[];s[0]=1-t*(.25+t*(.046875+t*(.01953125+t*r))),s[1]=t*(.75-t*(.046875+t*(.01953125+t*r)));var a=t*t;return s[2]=a*(.46875-t*(.013020833333333334+.007120768229166667*t)),a*=t,s[3]=a*(.3645833333333333-.005696614583333333*t),s[4]=a*t*.3076171875,s}(this.es),this.ml0=o(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))},forward:function(t){var a,i,r,M=t.x,n=t.y,e=h(M-this.long0),l=Math.sin(n),p=Math.cos(n);if(this.es){var v=p*e,c=Math.pow(v,2),f=this.ep2*Math.pow(p,2),u=Math.pow(f,2),w=Math.abs(p)>s?Math.tan(n):0,m=Math.pow(w,2),x=Math.pow(m,2);a=1-this.es*Math.pow(l,2),v/=Math.sqrt(a);var b=o(n,l,p,this.en);i=this.a*(this.k0*v*(1+c/6*(1-m+f+c/20*(5-18*m+x+14*f-58*m*f+c/42*(61+179*x-x*m-479*m)))))+this.x0,r=this.a*(this.k0*(b-this.ml0+l*e*v/2*(1+c/12*(5-m+9*f+4*u+c/30*(61+x-58*m+270*f-330*m*f+c/56*(1385+543*x-x*m-3111*m))))))+this.y0}else{var y=p*Math.sin(e);if(Math.abs(Math.abs(y)-1)<s)return 93;if(i=.5*this.a*this.k0*Math.log((1+y)/(1-y))+this.x0,r=p*Math.cos(e)/Math.sqrt(1-Math.pow(y,2)),(y=Math.abs(r))>=1){if(y-1>s)return 93;r=0}else r=Math.acos(r);n<0&&(r=-r),r=this.a*this.k0*(r-this.lat0)+this.y0}return t.x=i,t.y=r,t},inverse:function(t){var r,M,n,e,l=(t.x-this.x0)*(1/this.a),p=(t.y-this.y0)*(1/this.a);if(this.es)if(M=function(t,a,h){for(var i=1/(1-a),r=t,M=20;M;--M){var n=Math.sin(r),e=1-a*n*n;if(r-=e=(o(r,n,Math.cos(r),h)-t)*(e*Math.sqrt(e))*i,Math.abs(e)<s)return r}return r}(r=this.ml0+p/this.k0,this.es,this.en),Math.abs(M)<a){var v=Math.sin(M),c=Math.cos(M),f=Math.abs(c)>s?Math.tan(M):0,u=this.ep2*Math.pow(c,2),w=Math.pow(u,2),m=Math.pow(f,2),x=Math.pow(m,2);r=1-this.es*Math.pow(v,2);var b=l*Math.sqrt(r)/this.k0,y=Math.pow(b,2);n=M-(r*=f)*y/(1-this.es)*.5*(1-y/12*(5+3*m-9*u*m+u-4*w-y/30*(61+90*m-252*u*m+45*x+46*u-y/56*(1385+3633*m+4095*x+1574*x*m)))),e=h(this.long0+b*(1-y/6*(1+2*m+u-y/20*(5+28*m+24*x+8*u*m+6*u-y/42*(61+662*m+1320*x+720*x*m))))/c)}else n=a*i(p),e=0;else{var d=Math.exp(l/this.k0),k=.5*(d-1/d),g=this.lat0+p/this.k0,j=Math.cos(g);r=Math.sqrt((1-Math.pow(j,2))/(1+Math.pow(k,2))),n=Math.asin(r),p<0&&(n=-n),e=0===k&&0===j?0:h(Math.atan2(k,j)+this.long0)}return t.x=e,t.y=n,t},names:["Transverse_Mercator","Transverse Mercator","tmerc"]};t.add(M);
//# sourceMappingURL=tmerc.js.map
