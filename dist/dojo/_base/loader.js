//>>built
define("dojo/_base/loader","./kernel ../has require module ../json ./lang ./array".split(" "),function(e,x,t,J,y,h,z){var p=function(a){return a.replace(/\./g,"/")},K=/\/\/>>built/,v=[],L=[],u=function(a,b,f){v.push(f);z.forEach(a.split(","),function(a){a=l(a,b.module);L.push(a);A(a)});B()},B=function(){var a;for(a in C){var b=C[a];void 0===b.noReqPluginCheck&&(b.noReqPluginCheck=/loadInit!/.test(a)||/require!/.test(a)?1:0);if(!b.executed&&!b.noReqPluginCheck&&b.injected==M)return}N(function(){var a=
v;v=[];z.forEach(a,function(a){a(1)})})},O=/\/\/.*|\/\*[\s\S]*?\*\/|("(?:\\.|[^"])*"|'(?:\\.|[^'])*'|`(?:\\.|[^`])*`)/mg,w=/(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/mg,P=/(^|\s)(require|define)\s*\(/m,D=function(a,b){var f=[],c=[];var d=[];for(b=b||a.replace(O,"$1");d=w.exec(b);){var q=w.lastIndex;var m=q-d[0].length;var l=void 0,n=b,k=/\(|\)/g,g=1;for(k.lastIndex=q;(l=k.exec(n))&&(g=")"==l[0]?g-1:g+1,0!=g););if(0!=g)throw"unmatched paren around character "+
k.lastIndex+" in: "+n;q=[e.trim(n.substring(m,k.lastIndex))+";\n",k.lastIndex];"loadInit"==d[2]?f.push(q[0]):c.push(q[0]);w.lastIndex=q[1]}d=f.concat(c);return d.length||!P.test(b)?[a.replace(/(^|\s)dojo\.loadInit\s*\(/g,"\n0 \x26\x26 dojo.loadInit("),d.join(""),d]:0},c=t.initSyncLoader(u,B,function(a,b){var f,c=[],d=[];if(K.test(b)||!(f=D(b)))return 0;b=a.mid+"-*loadInit";for(var e in l("dojo",a).result.scopeMap)c.push(e),d.push('"'+e+'"');return"// xdomain rewrite of "+a.mid+"\ndefine('"+b+"',{\n\tnames:"+
y.stringify(c)+",\n\tdef:function("+c.join(",")+"){"+f[1]+"}});\n\ndefine("+y.stringify(c.concat(["dojo/loadInit!"+b]))+", function("+c.join(",")+"){\n"+f[0]+"});"}),Q=c.sync,M=c.requested,R=c.arrived,E=c.nonmodule,S=c.executing,F=c.executed,r=c.syncExecStack,C=c.modules,G=c.execQ,l=c.getModule,A=c.injectModule,H=c.setArrived,T=c.signal,U=c.finishExec,V=c.execModule,I=c.getLegacyMode,N=c.guardCheckComplete;u=c.dojoRequirePlugin;e.provide=function(a){var b=r[0],f=h.mixin(l(p(a),t.module),{executed:S,
result:h.getObject(a,!0)});H(f);b&&(b.provides||(b.provides=[])).push(function(){f.result=h.getObject(a);delete f.provides;f.executed!==F&&U(f)});return f.result};x.add("config-publishRequireResult",1,0,0);e.require=function(a,b){b=function(a,b){var d=l(p(a),t.module);if(r.length&&r[0].finish)r[0].finish.push(a);else{if(d.executed)return d.result;b&&(d.result=E);b=I();A(d);b=I();d.executed!==F&&d.injected===R&&c.guardCheckComplete(function(){V(d)});if(d.executed)return d.result;b==Q?d.cjs?G.unshift(d):
r.length&&(r[0].finish=[a]):G.push(d)}}(a,b);x("config-publishRequireResult")&&!h.exists(a)&&void 0!==b&&h.setObject(a,b);return b};e.loadInit=function(a){a()};e.registerModulePath=function(a,b){var c={};c[a.replace(/\./g,"/")]=b;t({paths:c})};e.platformRequire=function(a){a=(a.common||[]).concat(a[e._name]||a["default"]||[]);for(var b;a.length;)h.isArray(b=a.shift())?e.require.apply(e,b):e.require(b)};e.requireIf=e.requireAfterIf=function(a,b,c){a&&e.require(b,c)};e.requireLocalization=function(a,
b,c){t(["../i18n"],function(e){e.getLocalization(a,b,c)})};return{extractLegacyApiApplications:D,require:u,loadInit:function(a,b,c){b([a],function(a){b(a.names,function(){for(var d="",f=[],m=0;m<arguments.length;m++)d+="var "+a.names[m]+"\x3d arguments["+m+"]; ",f.push(arguments[m]);eval(d);var h=b.module,n=[],k;d={provide:function(a){a=p(a);a=l(a,h);a!==h&&H(a)},require:function(a,b){a=p(a);b&&(l(a,h).result=E);n.push(a)},requireLocalization:function(a,b,c){k||(k=["dojo/i18n"]);c=(c||e.locale).toLowerCase();
a=p(a)+"/nls/"+(/root/i.test(c)?"":c+"/")+p(b);l(a,h).isXd&&k.push("dojo/i18n!"+a)},loadInit:function(a){a()}};m={};var g;try{for(g in d)m[g]=e[g],e[g]=d[g];a.def.apply(null,f)}catch(W){T("error",[{src:J.id,id:"failedDojoLoadInit"},W])}finally{for(g in d)e[g]=m[g]}k&&(n=n.concat(k));n.length?u(n.join(","),b,c):c()})})}}});
//# sourceMappingURL=loader.js.map