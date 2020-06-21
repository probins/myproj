import{a as t,D as i,p as s}from"./index-4146d191.js";function h(t){var i=Math.exp(t);return i=(i-1/i)/2}function a(t,i){t=Math.abs(t),i=Math.abs(i);var s=Math.max(t,i),h=Math.min(t,i)/(s||1);return s*Math.sqrt(1+Math.pow(h,2))}function n(t){var i=Math.abs(t);return i=function(t){var i=1+t,s=i-1;return 0===s?t:t*Math.log(i)/s}(i*(1+i/(a(1,i)+1))),t<0?-i:i}function r(t,i){for(var s,h=2*Math.cos(2*i),a=t.length-1,n=t[a],r=0;--a>=0;)s=h*n-r+t[a],r=n,n=s;return i+s*Math.sin(2*i)}function e(t,i,s){for(var a,n,r=Math.sin(i),e=Math.cos(i),o=h(s),u=function(t){var i=Math.exp(t);return i=(i+1/i)/2}(s),c=2*e*u,g=-2*r*o,M=t.length-1,v=t[M],f=0,b=0,l=0;--M>=0;)a=b,n=f,v=c*(b=v)-a-g*(f=l)+t[M],l=g*b-n+c*f;return[(c=r*u)*v-(g=e*o)*l,c*l+g*v]}var o={init:function(){if(void 0===this.es||this.es<=0)throw new Error("incorrect elliptical usage");this.x0=void 0!==this.x0?this.x0:0,this.y0=void 0!==this.y0?this.y0:0,this.long0=void 0!==this.long0?this.long0:0,this.lat0=void 0!==this.lat0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var t=this.es/(1+Math.sqrt(1-this.es)),i=t/(2-t),s=i;this.cgb[0]=i*(2+i*(-2/3+i*(i*(116/45+i*(26/45+i*(-2854/675)))-2))),this.cbg[0]=i*(i*(2/3+i*(4/3+i*(-82/45+i*(32/45+i*(4642/4725)))))-2),s*=i,this.cgb[1]=s*(7/3+i*(i*(-227/45+i*(2704/315+i*(2323/945)))-1.6)),this.cbg[1]=s*(5/3+i*(-16/15+i*(-13/9+i*(904/315+i*(-1522/945))))),s*=i,this.cgb[2]=s*(56/15+i*(-136/35+i*(-1262/105+i*(73814/2835)))),this.cbg[2]=s*(-26/15+i*(34/21+i*(1.6+i*(-12686/2835)))),s*=i,this.cgb[3]=s*(4279/630+i*(-332/35+i*(-399572/14175))),this.cbg[3]=s*(1237/630+i*(i*(-24832/14175)-2.4)),s*=i,this.cgb[4]=s*(4174/315+i*(-144838/6237)),this.cbg[4]=s*(-734/315+i*(109598/31185)),s*=i,this.cgb[5]=s*(601676/22275),this.cbg[5]=s*(444337/155925),s=Math.pow(i,2),this.Qn=this.k0/(1+i)*(1+s*(1/4+s*(1/64+s/256))),this.utg[0]=i*(i*(2/3+i*(-37/96+i*(1/360+i*(81/512+i*(-96199/604800)))))-.5),this.gtu[0]=i*(.5+i*(-2/3+i*(5/16+i*(41/180+i*(-127/288+i*(7891/37800)))))),this.utg[1]=s*(-1/48+i*(-1/15+i*(437/1440+i*(-46/105+i*(1118711/3870720))))),this.gtu[1]=s*(13/48+i*(i*(557/1440+i*(281/630+i*(-1983433/1935360)))-.6)),s*=i,this.utg[2]=s*(-17/480+i*(37/840+i*(209/4480+i*(-5569/90720)))),this.gtu[2]=s*(61/240+i*(-103/140+i*(15061/26880+i*(167603/181440)))),s*=i,this.utg[3]=s*(-4397/161280+i*(11/504+i*(830251/7257600))),this.gtu[3]=s*(49561/161280+i*(-179/168+i*(6601661/7257600))),s*=i,this.utg[4]=s*(-4583/161280+i*(108847/3991680)),this.gtu[4]=s*(34729/80640+i*(-3418889/1995840)),s*=i,this.utg[5]=s*(-20648693/638668800),this.gtu[5]=.6650675310896665*s;var h=r(this.cbg,this.lat0);this.Zb=-this.Qn*(h+function(t,i){for(var s,h=2*Math.cos(i),a=t.length-1,n=t[a],r=0;--a>=0;)s=h*n-r+t[a],r=n,n=s;return Math.sin(i)*s}(this.gtu,2*h))},forward:function(i){var s=t(i.x-this.long0),h=i.y;h=r(this.cbg,h);var o=Math.sin(h),u=Math.cos(h),c=Math.sin(s),g=Math.cos(s);h=Math.atan2(o,g*u),s=Math.atan2(c*u,a(o,u*g)),s=n(Math.tan(s));var M,v,f=e(this.gtu,2*h,2*s);return h+=f[0],s+=f[1],Math.abs(s)<=2.623395162778?(M=this.a*(this.Qn*s)+this.x0,v=this.a*(this.Qn*h+this.Zb)+this.y0):(M=1/0,v=1/0),i.x=M,i.y=v,i},inverse:function(i){var s,n,o=(i.x-this.x0)*(1/this.a),u=(i.y-this.y0)*(1/this.a);if(u=(u-this.Zb)/this.Qn,o/=this.Qn,Math.abs(o)<=2.623395162778){var c=e(this.utg,2*u,2*o);u+=c[0],o+=c[1],o=Math.atan(h(o));var g=Math.sin(u),M=Math.cos(u),v=Math.sin(o),f=Math.cos(o);u=Math.atan2(g*f,a(v,f*M)),o=Math.atan2(v,f*M),s=t(o+this.long0),n=r(this.cgb,u)}else s=1/0,n=1/0;return i.x=s,i.y=n,i},names:["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc"]};var u={init:function(){var s=function(i,s){if(void 0===i){if((i=Math.floor(30*(t(s)+Math.PI)/Math.PI)+1)<0)return 0;if(i>60)return 60}return i}(this.zone,this.long0);if(void 0===s)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(s)-183)*i,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,o.init.apply(this),this.forward=o.forward,this.inverse=o.inverse},names:["Universal Transverse Mercator System","utm"],dependsOn:"etmerc"};s.Proj.projections.add(u);
//# sourceMappingURL=utm.js.map
