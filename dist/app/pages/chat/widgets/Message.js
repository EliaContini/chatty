//>>built
require({cache:{"url:app/pages/chat/widgets/Message.html":'\x3cdiv class\x3d"${baseClass}"\x3e\n    \x3cdiv class\x3d"${baseClass}-wrap"\x3e\n        \x3ch2 class\x3d"${baseClass}-author" data-dojo-attach-point\x3d"elementAuthor"\x3e\n            ${message.author}\n        \x3c/h2\x3e\n        \x3cp class\x3d"${baseClass}-message"\x3e${message.message}\x3c/p\x3e\n        \x3cp class\x3d"${baseClass}-time" data-dojo-attach-point\x3d"elementTime"\x3e\x3c/p\x3e\n    \x3c/div\x3e\n\x3c/div\x3e\n'}});
define("app/pages/chat/widgets/Message",["dijit/_TemplatedMixin","dijit/_WidgetBase","dojo/_base/declare","dojo/dom-class","dojo/text!./Message.html"],function(c,d,e,f,g){return e([d,c],{baseClass:"message",elementAuthor:null,elementTime:null,message:null,templateString:g,postCreate:function(){var b=this.message;!0===b.isMe&&(f.add(this.domNode,this.baseClass+"-isMe"),f.add(this.elementAuthor,"a11y"));var a=new Date(b.timestamp);b=Intl.DateTimeFormat("en",{day:"2-digit"}).format(a);var c=(new Intl.DateTimeFormat("en",
{month:"short"})).format(a),d=(new Intl.DateTimeFormat("en",{year:"numeric"})).format(a),e=Intl.DateTimeFormat("en",{hour:"2-digit",hour12:!1}).format(a);a=Intl.DateTimeFormat("en",{minute:"2-digit"}).format(a);b=[b,c,d,[e,a].join(":")].join(" ");this.elementTime.innerHTML=b}})});
//# sourceMappingURL=Message.js.map