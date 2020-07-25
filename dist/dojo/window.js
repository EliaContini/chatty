//>>built
define("dojo/window","./_base/lang ./sniff ./_base/window ./dom ./dom-geometry ./dom-style ./dom-construct".split(" "),function(z,f,r,H,n,D,k){f.add("rtl-adjust-position-for-verticalScrollBar",function(b,c){b=r.body(c);c=k.create("div",{style:{overflow:"scroll",overflowX:"visible",direction:"rtl",visibility:"hidden",position:"absolute",left:"0",top:"0",width:"64px",height:"64px"}},b,"last");var e=k.create("div",{style:{overflow:"hidden",direction:"ltr"}},c,"last"),f=0!=n.position(e).x;c.removeChild(e);
b.removeChild(c);return f});f.add("position-fixed-support",function(b,c){b=r.body(c);c=k.create("span",{style:{visibility:"hidden",position:"fixed",left:"1px",top:"1px"}},b,"last");var e=k.create("span",{style:{position:"fixed",left:"0",top:"0"}},c,"last"),f=n.position(e).x!=n.position(c).x;c.removeChild(e);b.removeChild(c);return f});var l={getBox:function(b){b=b||r.doc;var c="BackCompat"==b.compatMode?r.body(b):b.documentElement,e=n.docScroll(b);if(f("touch")){var g=l.get(b);b=g.innerWidth||c.clientWidth;
c=g.innerHeight||c.clientHeight}else b=c.clientWidth,c=c.clientHeight;return{l:e.x,t:e.y,w:b,h:c}},get:function(b){if(f("ie")&&l!==document.parentWindow){b.parentWindow.execScript("document._parentWindow \x3d window;","Javascript");var c=b._parentWindow;b._parentWindow=null;return c}return b.parentWindow||b.defaultView},scrollIntoView:function(b,c){try{b=H.byId(b);var e=b.ownerDocument||r.doc,g=r.body(e),p=e.documentElement||g.parentNode,t=f("ie")||f("trident"),u=f("webkit");if(b!=g&&b!=p)if(!(f("mozilla")||
t||u||f("opera")||f("trident")||f("edge"))&&"scrollIntoView"in b)b.scrollIntoView(!1);else{var k="BackCompat"==e.compatMode,l=Math.min(g.clientWidth||p.clientWidth,p.clientWidth||g.clientWidth),A=Math.min(g.clientHeight||p.clientHeight,p.clientHeight||g.clientHeight);e=u||k?g:p;var m=c||n.position(b),d=b.parentNode;c=function(a){return 6>=t||7==t&&k?!1:f("position-fixed-support")&&"fixed"==D.get(a,"position").toLowerCase()};var z=this;u=function(a,b,c){"BODY"==a.tagName||"HTML"==a.tagName?z.get(a.ownerDocument).scrollBy(b,
c):(b&&(a.scrollLeft+=b),c&&(a.scrollTop+=c))};if(!c(b))for(;d;){d==g&&(d=e);var a=n.position(d),E=c(d),B="rtl"==D.getComputedStyle(d).direction.toLowerCase();if(d==e)a.w=l,a.h=A,e==p&&(t||f("trident"))&&B&&(a.x+=e.offsetWidth-a.w),a.x=0,a.y=0;else{var v=n.getPadBorderExtents(d);a.w-=v.w;a.h-=v.h;a.x+=v.l;a.y+=v.t;var q=d.clientWidth,w=a.w-q;0<q&&0<w&&(B&&f("rtl-adjust-position-for-verticalScrollBar")&&(a.x+=w),a.w=q);q=d.clientHeight;w=a.h-q;0<q&&0<w&&(a.h=q)}E&&(0>a.y&&(a.h+=a.y,a.y=0),0>a.x&&(a.w+=
a.x,a.x=0),a.y+a.h>A&&(a.h=A-a.y),a.x+a.w>l&&(a.w=l-a.x));var x=m.x-a.x,y=m.y-a.y,F=x+m.w-a.w,G=y+m.h-a.h;if(0<F*x&&(d.scrollLeft||d==e||d.scrollWidth>d.offsetHeight)){var h=Math[0>x?"max":"min"](x,F);B&&(8==t&&!k||5<=f("trident"))&&(h=-h);var C=d.scrollLeft;u(d,h,0);h=d.scrollLeft-C;m.x-=h}0<G*y&&(d.scrollTop||d==e||d.scrollHeight>d.offsetHeight)&&(h=Math.ceil(Math[0>y?"max":"min"](y,G)),C=d.scrollTop,u(d,0,h),h=d.scrollTop-C,m.y-=h);d=d!=e&&!E&&d.parentNode}}}catch(I){console.error("scrollIntoView: "+
I),b.scrollIntoView(!1)}}};z.setObject("dojo.window",l);return l});
//# sourceMappingURL=window.js.map