import{R as t,r as n,q as r,u as a,C as i,v as e,x as s}from"./step-DY8hpDjU.js";import{c as o,a as u}from"./linear-CS60HzLK.js";import{i as c}from"./init-DLRA0X12.js";import{bk as l,bl as f,bm as h,bn as b,bo as p,bp as y,bq as v,br as w,bs as g,bt as m,bu as d,bv as M,bw as N,bx as D,by as k,bz as x,bA as j,bB as I,bC as q,bD as A,bE as B,bF as C,bG as F,bH as P}from"./index-BEK-FZ0P.js";function z(t,n){let r;if(void 0===n)for(const a of t)null!=a&&(r<a||void 0===r&&a>=a)&&(r=a);else{let a=-1;for(let i of t)null!=(i=n(i,++a,t))&&(r<i||void 0===r&&i>=i)&&(r=i)}return r}function E(t,n){let r;if(void 0===n)for(const a of t)null!=a&&(r>a||void 0===r&&a>=a)&&(r=a);else{let a=-1;for(let i of t)null!=(i=n(i,++a,t))&&(r>i||void 0===r&&i>=i)&&(r=i)}return r}function G(t,n,r,a,i,e){const s=[[v,1,w],[v,5,5*w],[v,15,15*w],[v,30,30*w],[e,1,g],[e,5,5*g],[e,15,15*g],[e,30,30*g],[i,1,m],[i,3,3*m],[i,6,6*m],[i,12,12*m],[a,1,d],[a,2,2*d],[r,1,M],[n,1,N],[n,3,3*N],[t,1,h]];function o(n,r,a){const i=Math.abs(r-n)/a,e=l((([,,t])=>t)).right(s,i);if(e===s.length)return t.every(f(n/h,r/h,a));if(0===e)return b.every(Math.max(f(n,r,a),1));const[o,u]=s[i/s[e-1][2]<s[e][2]/i?e-1:e];return o.every(u)}return[function(t,n,r){const a=n<t;a&&([t,n]=[n,t]);const i=r&&"function"==typeof r.range?r:o(t,n,r),e=i?i.range(t,+n+1):[];return a?e.reverse():e},o]}const[H,L]=G(p,I,j,x,k,D),[R,S]=G(y,F,C,B,A,q),Y=Math.PI/180,J=180/Math.PI,K=.96422,O=.82521,Q=4/29,T=6/29,U=3*T*T,V=T*T*T;function W(r){if(r instanceof Z)return new Z(r.l,r.a,r.b,r.opacity);if(r instanceof at)return it(r);r instanceof t||(r=n(r));var a,i,e=nt(r.r),s=nt(r.g),o=nt(r.b),u=$((.2225045*e+.7168786*s+.0606169*o)/1);return e===s&&s===o?a=i=u:(a=$((.4360747*e+.3850649*s+.1430804*o)/K),i=$((.0139322*e+.0971045*s+.7141733*o)/O)),new Z(116*u-16,500*(a-u),200*(u-i),r.opacity)}function X(t,n,r,a){return 1===arguments.length?W(t):new Z(t,n,r,null==a?1:a)}function Z(t,n,r,a){this.l=+t,this.a=+n,this.b=+r,this.opacity=+a}function $(t){return t>V?Math.pow(t,1/3):t/U+Q}function _(t){return t>T?t*t*t:U*(t-Q)}function tt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function nt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function rt(t,n,r,a){return 1===arguments.length?function(t){if(t instanceof at)return new at(t.h,t.c,t.l,t.opacity);if(t instanceof Z||(t=W(t)),0===t.a&&0===t.b)return new at(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*J;return new at(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}(t):new at(t,n,r,null==a?1:a)}function at(t,n,r,a){this.h=+t,this.c=+n,this.l=+r,this.opacity=+a}function it(t){if(isNaN(t.h))return new Z(t.l,0,0,t.opacity);var n=t.h*Y;return new Z(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}function et(t){return function(n,r){var a=t((n=rt(n)).h,(r=rt(r)).h),i=e(n.c,r.c),s=e(n.l,r.l),o=e(n.opacity,r.opacity);return function(t){return n.h=a(t),n.c=i(t),n.l=s(t),n.opacity=o(t),n+""}}}r(Z,X,a(i,{brighter(t){return new Z(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker(t){return new Z(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb(){var n=(this.l+16)/116,r=isNaN(this.a)?n:n+this.a/500,a=isNaN(this.b)?n:n-this.b/200;return r=K*_(r),n=1*_(n),a=O*_(a),new t(tt(3.1338561*r-1.6168667*n-.4906146*a),tt(-.9787684*r+1.9161415*n+.033454*a),tt(.0719453*r-.2289914*n+1.4052427*a),this.opacity)}})),r(at,rt,a(i,{brighter(t){return new at(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker(t){return new at(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb(){return it(this).rgb()}}));const st=et(s);var ot=et(e);function ut(t,n){var r,a=0,i=(t=t.slice()).length-1,e=t[a],s=t[i];return s<e&&(r=a,a=i,i=r,r=e,e=s,s=r),t[a]=n.floor(e),t[i]=n.ceil(s),t}function ct(t){return new Date(t)}function lt(t){return t instanceof Date?+t:+new Date(+t)}function ft(t,n,r,a,i,e,s,c,l,f){var h=o(),b=h.invert,p=h.domain,y=f(".%L"),v=f(":%S"),w=f("%I:%M"),g=f("%I %p"),m=f("%a %d"),d=f("%b %d"),M=f("%B"),N=f("%Y");function D(t){return(l(t)<t?y:c(t)<t?v:s(t)<t?w:e(t)<t?g:a(t)<t?i(t)<t?m:d:r(t)<t?M:N)(t)}return h.invert=function(t){return new Date(b(t))},h.domain=function(t){return arguments.length?p(Array.from(t,lt)):p().map(ct)},h.ticks=function(n){var r=p();return t(r[0],r[r.length-1],null==n?10:n)},h.tickFormat=function(t,n){return null==n?D:f(n)},h.nice=function(t){var r=p();return t&&"function"==typeof t.range||(t=n(r[0],r[r.length-1],null==t?10:t)),t?p(ut(r,t)):h},h.copy=function(){return u(h,ft(t,n,r,a,i,e,s,c,l,f))},h}function ht(){return c.apply(ft(R,S,y,F,C,B,A,q,v,P).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}export{z as a,H as b,ft as c,J as d,rt as e,ot as h,st as i,X as l,E as m,ut as n,Y as r,ht as t,L as u};
