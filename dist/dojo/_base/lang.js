//>>built
define("dojo/_base/lang",["./kernel","../has","../sniff"],function(f,k){k.add("bug-for-in-skips-shadowed",function(){for(var a in{toString:1})return 0;return 1});var l=k("bug-for-in-skips-shadowed")?"hasOwnProperty valueOf isPrototypeOf propertyIsEnumerable toLocaleString toString constructor".split(" "):[],q=l.length,m=function(a,d,b){b||(b=a[0]&&f.scopeMap[a[0]]?f.scopeMap[a.shift()][1]:f.global);try{for(var e=0;e<a.length;e++){var c=a[e];if(!(c in b))if(d)b[c]={};else return;b=b[c]}return b}catch(g){}},
n=Object.prototype.toString,p=function(a,d,b){return(b||[]).concat(Array.prototype.slice.call(a,d||0))},r=/\{([^\}]+)\}/g,c={_extraNames:l,_mixin:function(a,d,b){var c,f={};for(h in d){var g=d[h];h in a&&(a[h]===g||h in f&&f[h]===g)||(a[h]=b?b(g):g)}if(k("bug-for-in-skips-shadowed")&&d)for(c=0;c<q;++c){var h=l[c];g=d[h];h in a&&(a[h]===g||h in f&&f[h]===g)||(a[h]=b?b(g):g)}return a},mixin:function(a,d){a||(a={});for(var b=1,e=arguments.length;b<e;b++)c._mixin(a,arguments[b]);return a},setObject:function(a,
d,b){var c=a.split(".");a=c.pop();return(b=m(c,!0,b))&&a?b[a]=d:void 0},getObject:function(a,d,b){return a?m(a.split("."),d,b):b},exists:function(a,d){return void 0!==c.getObject(a,!1,d)},isString:function(a){return"string"==typeof a||a instanceof String},isArray:Array.isArray||function(a){return"[object Array]"==n.call(a)},isFunction:function(a){return"[object Function]"===n.call(a)},isObject:function(a){return void 0!==a&&(null===a||"object"==typeof a||c.isArray(a)||c.isFunction(a))},isArrayLike:function(a){return!!a&&
!c.isString(a)&&!c.isFunction(a)&&!(a.tagName&&"form"==a.tagName.toLowerCase())&&(c.isArray(a)||isFinite(a.length))},isAlien:function(a){return a&&!c.isFunction(a)&&/\{\s*\[native code\]\s*\}/.test(String(a))},extend:function(a,d){for(var b=1,e=arguments.length;b<e;b++)c._mixin(a.prototype,arguments[b]);return a},_hitchArgs:function(a,d){var b=c._toArray(arguments,2),e=c.isString(d);return function(){var k=c._toArray(arguments),g=e?(a||f.global)[d]:d;return g&&g.apply(a||this,b.concat(k))}},hitch:function(a,
d){if(2<arguments.length)return c._hitchArgs.apply(f,arguments);d||(d=a,a=null);if(c.isString(d)){a=a||f.global;if(!a[d])throw['lang.hitch: scope["',d,'"] is null (scope\x3d"',a,'")'].join("");return function(){return a[d].apply(a,arguments||[])}}return a?function(){return d.apply(a,arguments||[])}:d},delegate:function(){function a(){}return function(d,b){a.prototype=d;d=new a;a.prototype=null;b&&c._mixin(d,b);return d}}(),_toArray:k("ie")?function(){function a(a,b,c){c=c||[];for(b=b||0;b<a.length;b++)c.push(a[b]);
return c}return function(c){return(c.item?a:p).apply(this,arguments)}}():p,partial:function(a){return c.hitch.apply(f,[null].concat(c._toArray(arguments)))},clone:function(a){if(!a||"object"!=typeof a||c.isFunction(a))return a;if(a.nodeType&&"cloneNode"in a)return a.cloneNode(!0);if(a instanceof Date)return new Date(a.getTime());if(a instanceof RegExp)return new RegExp(a);var d;if(c.isArray(a)){var b=[];var e=0;for(d=a.length;e<d;++e)e in a&&(b[e]=c.clone(a[e]))}else b=a.constructor?new a.constructor:
{};return c._mixin(b,a,c.clone)},trim:String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},replace:function(a,d,b){return a.replace(b||r,c.isFunction(d)?d:function(a,b){return c.getObject(b,!1,d)})}};c.mixin(f,c);return c});
//# sourceMappingURL=lang.js.map