//>>built
define("dojo/aspect",[],function(){function m(f,a,h,k){var d=f[a],g="around"==a;if(g){var b=h(function(){return d.advice(this,arguments)});var e={remove:function(){b&&(b=f=h=null)},advice:function(e,c){return b?b.apply(e,c):d.advice(e,c)}}}else e={remove:function(){if(e.advice){var b=e.previous,c=e.next;c||b?(b?b.next=c:f[a]=c,c&&(c.previous=b)):delete f[a];f=h=e.advice=null}},id:f.nextId++,advice:h,receiveArguments:k};if(d&&!g)if("after"==a){for(;d.next&&(d=d.next););d.next=e;e.previous=d}else"before"==
a&&(f[a]=e,e.next=d,d.previous=e);else f[a]=e;return e}function l(f){return function(a,h,k,d){var g=a[h],b;g&&g.target==a||(a[h]=b=function(){for(var e=b.nextId,a=arguments,c=b.before;c;)c.advice&&(a=c.advice.apply(this,a)||a),c=c.next;if(b.around)var d=b.around.advice(this,a);for(c=b.after;c&&c.id<e;){if(c.advice)if(c.receiveArguments){var f=c.advice.apply(this,a);d=f===n?d:f}else d=c.advice.call(this,d,a);c=c.next}return d},g&&(b.around={advice:function(a,b){return g.apply(a,b)}}),b.target=a,b.nextId=
b.nextId||0);a=m(b||g,f,k,d);k=null;return a}}var n,p=l("after"),q=l("before"),r=l("around");return{before:q,around:r,after:p}});
//# sourceMappingURL=aspect.js.map