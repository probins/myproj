import{H as t,E as h,F as s,p as a}from"./values-f63d177f.js";import{a as i}from"./adjust_lon-db52dfb3.js";import{t as l,p as M}from"./phi2z-7639e48f.js";var o={init:function(){this.no_off=this.no_off||!1,this.no_rot=this.no_rot||!1,isNaN(this.k0)&&(this.k0=1);var t=Math.sin(this.lat0),h=Math.cos(this.lat0),s=this.e*t;this.bl=Math.sqrt(1+this.es/(1-this.es)*Math.pow(h,4)),this.al=this.a*this.bl*this.k0*Math.sqrt(1-this.es)/(1-s*s);var a,M,o=l(this.e,this.lat0,t),n=this.bl/h*Math.sqrt((1-this.es)/(1-s*s));if(n*n<1&&(n=1),isNaN(this.longc)){var r=l(this.e,this.lat1,Math.sin(this.lat1)),e=l(this.e,this.lat2,Math.sin(this.lat2));this.lat0>=0?this.el=(n+Math.sqrt(n*n-1))*Math.pow(o,this.bl):this.el=(n-Math.sqrt(n*n-1))*Math.pow(o,this.bl);var b=Math.pow(r,this.bl),m=Math.pow(e,this.bl);M=.5*((a=this.el/b)-1/a);var g=(this.el*this.el-m*b)/(this.el*this.el+m*b),c=(m-b)/(m+b),p=i(this.long1-this.long2);this.long0=.5*(this.long1+this.long2)-Math.atan(g*Math.tan(.5*this.bl*p)/c)/this.bl,this.long0=i(this.long0);var u=i(this.long1-this.long0);this.gamma0=Math.atan(Math.sin(this.bl*u)/M),this.alpha=Math.asin(n*Math.sin(this.gamma0))}else a=this.lat0>=0?n+Math.sqrt(n*n-1):n-Math.sqrt(n*n-1),this.el=a*Math.pow(o,this.bl),M=.5*(a-1/a),this.gamma0=Math.asin(Math.sin(this.alpha)/n),this.long0=this.longc-Math.asin(M*Math.tan(this.gamma0))/this.bl;this.no_off?this.uc=0:this.lat0>=0?this.uc=this.al/this.bl*Math.atan2(Math.sqrt(n*n-1),Math.cos(this.alpha)):this.uc=-1*this.al/this.bl*Math.atan2(Math.sqrt(n*n-1),Math.cos(this.alpha))},forward:function(a){var M,o,n,r=a.x,e=a.y,b=i(r-this.long0);if(Math.abs(Math.abs(e)-t)<=h)n=e>0?-1:1,o=this.al/this.bl*Math.log(Math.tan(s+n*this.gamma0*.5)),M=-1*n*t*this.al/this.bl;else{var m=l(this.e,e,Math.sin(e)),g=this.el/Math.pow(m,this.bl),c=.5*(g-1/g),p=.5*(g+1/g),u=Math.sin(this.bl*b),_=(c*Math.sin(this.gamma0)-u*Math.cos(this.gamma0))/p;o=Math.abs(Math.abs(_)-1)<=h?Number.POSITIVE_INFINITY:.5*this.al*Math.log((1-_)/(1+_))/this.bl,M=Math.abs(Math.cos(this.bl*b))<=h?this.al*this.bl*b:this.al*Math.atan2(c*Math.cos(this.gamma0)+u*Math.sin(this.gamma0),Math.cos(this.bl*b))/this.bl}return this.no_rot?(a.x=this.x0+M,a.y=this.y0+o):(M-=this.uc,a.x=this.x0+o*Math.cos(this.alpha)+M*Math.sin(this.alpha),a.y=this.y0+M*Math.cos(this.alpha)-o*Math.sin(this.alpha)),a},inverse:function(s){var a,l;this.no_rot?(l=s.y-this.y0,a=s.x-this.x0):(l=(s.x-this.x0)*Math.cos(this.alpha)-(s.y-this.y0)*Math.sin(this.alpha),a=(s.y-this.y0)*Math.cos(this.alpha)+(s.x-this.x0)*Math.sin(this.alpha),a+=this.uc);var o=Math.exp(-1*this.bl*l/this.al),n=.5*(o-1/o),r=.5*(o+1/o),e=Math.sin(this.bl*a/this.al),b=(e*Math.cos(this.gamma0)+n*Math.sin(this.gamma0))/r,m=Math.pow(this.el/Math.sqrt((1+b)/(1-b)),1/this.bl);return Math.abs(b-1)<h?(s.x=this.long0,s.y=t):Math.abs(b+1)<h?(s.x=this.long0,s.y=-1*t):(s.y=M(this.e,m),s.x=i(this.long0-Math.atan2(n*Math.cos(this.gamma0)-e*Math.sin(this.gamma0),Math.cos(this.bl*a/this.al))/this.bl)),s},names:["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","omerc"]};a.add(o);
//# sourceMappingURL=omerc.js.map
