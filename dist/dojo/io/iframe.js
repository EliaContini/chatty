//>>built
define("dojo/io/iframe","../_base/config ../_base/json ../_base/kernel ../_base/lang ../_base/xhr ../sniff ../_base/window ../dom ../dom-construct ../query require ../aspect ../request/iframe".split(" "),function(m,n,h,g,l,b,p,q,u,v,w,r,d){h.deprecated("dojo/io/iframe","Use dojo/request/iframe.","2.0");b=d._iframeName;b=b.substring(0,b.lastIndexOf("_"));var e=g.delegate(d,{create:function(){return e._frame=d.create.apply(d,arguments)},get:null,post:null,send:function(a){var c=l._ioSetArgs(a,function(a){f&&
f.cancel()},function(a){var b=null;a=a.ioArgs;try{var c=a.handleAs;"xml"===c||"html"===c?b=f.response.data:(b=f.response.text,"json"===c?b=n.fromJson(b):"javascript"===c&&(b=h.eval(b)))}catch(t){b=t}return b},function(a,b){b.ioArgs._hasError=!0;return a}),b=c.ioArgs,e="GET",k=q.byId(a.form);a.method&&"POST"===a.method.toUpperCase()&&k&&(e="POST");a={method:e,handleAs:"json"===a.handleAs||"javascript"===a.handleAs?"text":a.handleAs,form:a.form,query:k?null:a.content,data:k?a.content:null,timeout:a.timeout,
ioArgs:b};a.method&&(a.method=a.method.toUpperCase());if(m.ioPublish&&h.publish&&!1!==b.args.ioPublish)var g=r.after(d,"_notifyStart",function(a){a.options.ioArgs===b&&(g.remove(),l._ioNotifyStart(c))},!0);var f=d(b.url,a,!0);b._callNext=f._callNext;f.then(function(){c.resolve(c)}).otherwise(function(a){c.ioArgs.error=a;c.reject(a)});return c},_iframeOnload:p.global[b+"_onload"]});g.setObject("dojo.io.iframe",e);return e});
//# sourceMappingURL=iframe.js.map