//>>built
define("dojo/request/xhr",["../errors/RequestError","./watch","./handlers","./util","../has"],function(n,y,p,g,c){function z(a,b){var c=a.xhr;a.status=a.xhr.status;try{a.text=c.responseText}catch(d){}"xml"===a.options.handleAs&&(a.data=c.responseXML);if(b)this.reject(b);else{try{p(a)}catch(d){var k=d}g.checkStatus(c.status)?k?this.reject(k):this.resolve(a):(b=k?new n("Unable to load "+a.url+" status: "+c.status+" and an error in handleAs: transformation of response",a):new n("Unable to load "+a.url+
" status: "+c.status,a),this.reject(b))}}function A(a){return this.xhr.getResponseHeader(a)}function h(a,b,r){var k=c("native-formdata")&&b&&b.data&&b.data instanceof FormData,d=g.parseArgs(a,g.deepCreate(B,b),k);a=d.url;b=d.options;var C=!b.data&&"POST"!==b.method&&"PUT"!==b.method;10>=c("ie")&&(a=a.split("#")[0]);var q,f=g.deferred(d,t,u,D,z,function(){q&&q()}),e=d.xhr=h._create();if(!e)return f.cancel(new n("XHR was not created")),r?f:f.promise;d.getHeader=A;v&&(q=v(e,f,d,b.uploadProgress));var E=
"undefined"===typeof b.data?null:b.data,F=!b.sync,p=b.method;try{e.open(p,a,F,b.user||w,b.password||w);b.withCredentials&&(e.withCredentials=b.withCredentials);c("native-response-type")&&b.handleAs in x&&(e.responseType=x[b.handleAs]);var l=b.headers;a=k||C?!1:"application/x-www-form-urlencoded";if(l)for(var m in l)"content-type"===m.toLowerCase()?a=l[m]:l[m]&&e.setRequestHeader(m,l[m]);a&&!1!==a&&e.setRequestHeader("Content-Type",a);l&&"X-Requested-With"in l||e.setRequestHeader("X-Requested-With",
"XMLHttpRequest");g.notify&&g.notify.emit("send",d,f.promise.cancel);e.send(E)}catch(G){f.reject(G)}y(f);e=null;return r?f:f.promise}c.add("native-xhr",function(){return"undefined"!==typeof XMLHttpRequest});c.add("dojo-force-activex-xhr",function(){return c("activex")&&"file:"===window.location.protocol});c.add("native-xhr2",function(){if(c("native-xhr")&&!c("dojo-force-activex-xhr")){var a=new XMLHttpRequest;return"undefined"!==typeof a.addEventListener&&("undefined"===typeof opera||"undefined"!==
typeof a.upload)}});c.add("native-formdata",function(){return"undefined"!==typeof FormData});c.add("native-blob",function(){return"undefined"!==typeof Blob});c.add("native-arraybuffer",function(){return"undefined"!==typeof ArrayBuffer});c.add("native-response-type",function(){return c("native-xhr")&&"undefined"!==typeof(new XMLHttpRequest).responseType});c.add("native-xhr2-blob",function(){if(c("native-response-type")){var a=new XMLHttpRequest;a.open("GET","https://dojotoolkit.org/",!0);a.responseType=
"blob";var b=a.responseType;a.abort();return"blob"===b}});var x={blob:c("native-xhr2-blob")?"blob":"arraybuffer",document:"document",arraybuffer:"arraybuffer"};if(c("native-xhr2")){var u=function(a){return!this.isFulfilled()};var t=function(a,b){b.xhr.abort()};var v=function(a,b,c,k){function d(a){b.handleResponse(c)}function g(a){a=new n("Unable to load "+c.url+" status: "+a.target.status,c);b.handleResponse(c,a)}function h(a,d){c.transferType=a;d.lengthComputable?(c.loaded=d.loaded,c.total=d.total,
b.progress(c)):3===c.xhr.readyState&&(c.loaded="loaded"in d?d.loaded:d.position,b.progress(c))}function f(a){return h("download",a)}function e(a){return h("upload",a)}a.addEventListener("load",d,!1);a.addEventListener("error",g,!1);a.addEventListener("progress",f,!1);k&&a.upload&&a.upload.addEventListener("progress",e,!1);return function(){a.removeEventListener("load",d,!1);a.removeEventListener("error",g,!1);a.removeEventListener("progress",f,!1);a.upload.removeEventListener("progress",e,!1);a=null}}}else{u=
function(a){return a.xhr.readyState};var D=function(a){return 4===a.xhr.readyState};t=function(a,b){a=b.xhr;b=typeof a.abort;"function"!==b&&"object"!==b&&"unknown"!==b||a.abort()}}var w,B={data:null,query:null,sync:!1,method:"GET"};h._create=function(){throw Error("XMLHTTP not available");};if(c("native-xhr")&&!c("dojo-force-activex-xhr"))h._create=function(){return new XMLHttpRequest};else if(c("activex"))try{new ActiveXObject("Msxml2.XMLHTTP"),h._create=function(){return new ActiveXObject("Msxml2.XMLHTTP")}}catch(a){try{new ActiveXObject("Microsoft.XMLHTTP"),
h._create=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}catch(b){}}g.addCommonMethods(h);return h});
//# sourceMappingURL=xhr.js.map