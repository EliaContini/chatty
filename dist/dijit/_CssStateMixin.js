//>>built
define("dijit/_CssStateMixin","dojo/_base/array dojo/_base/declare dojo/dom dojo/dom-class dojo/has dojo/_base/lang dojo/on dojo/domReady dojo/touch dojo/_base/window ./a11yclick ./registry".split(" "),function(e,h,q,f,v,r,g,t,k,u,l,m){h=h("dijit._CssStateMixin",[],{hovering:!1,active:!1,_applyAttributes:function(){this.inherited(arguments);e.forEach("disabled readOnly checked selected focused state hovering active _opened".split(" "),function(a){this.watch(a,r.hitch(this,"_setStateClass"))},this);
for(var a in this.cssStateNodes||{})this._trackMouseState(this[a],this.cssStateNodes[a]);this._trackMouseState(this.domNode,this.baseClass);this._setStateClass()},_cssMouseEvent:function(a){if(!this.disabled)switch(a.type){case "mouseover":case "MSPointerOver":case "pointerover":this._set("hovering",!0);this._set("active",this._mouseDown);break;case "mouseout":case "MSPointerOut":case "pointerout":this._set("hovering",!1);this._set("active",!1);break;case "mousedown":case "touchstart":case "MSPointerDown":case "pointerdown":case "keydown":this._set("active",
!0);break;case "mouseup":case "dojotouchend":case "MSPointerUp":case "pointerup":case "keyup":this._set("active",!1)}},_setStateClass:function(){function a(a){b=b.concat(e.map(b,function(c){return c+a}),"dijit"+a)}var b=this.baseClass.split(" ");this.isLeftToRight()||a("Rtl");var d="mixed"==this.checked?"Mixed":this.checked?"Checked":"";this.checked&&a(d);this.state&&a(this.state);this.selected&&a("Selected");this._opened&&a("Opened");this.disabled?a("Disabled"):this.readOnly?a("ReadOnly"):this.active?
a("Active"):this.hovering&&a("Hover");this.focused&&a("Focused");d=this.stateNode||this.domNode;var c={};e.forEach(d.className.split(" "),function(a){c[a]=!0});"_stateClasses"in this&&e.forEach(this._stateClasses,function(a){delete c[a]});e.forEach(b,function(a){c[a]=!0});var n=[],p;for(p in c)n.push(p);d.className=n.join(" ");this._stateClasses=b},_subnodeCssMouseEvent:function(a,b,d){function c(c){f.toggle(a,b+"Active",c)}if(!this.disabled&&!this.readOnly)switch(d.type){case "mouseover":case "MSPointerOver":case "pointerover":f.toggle(a,
b+"Hover",!0);break;case "mouseout":case "MSPointerOut":case "pointerout":f.toggle(a,b+"Hover",!1);c(!1);break;case "mousedown":case "touchstart":case "MSPointerDown":case "pointerdown":case "keydown":c(!0);break;case "mouseup":case "MSPointerUp":case "pointerup":case "dojotouchend":case "keyup":c(!1);break;case "focus":case "focusin":f.toggle(a,b+"Focused",!0);break;case "blur":case "focusout":f.toggle(a,b+"Focused",!1)}},_trackMouseState:function(a,b){a._cssState=b}});t(function(){function a(a,
b,d){if(!d||!q.isDescendant(d,b))for(;b&&b!=d;b=b.parentNode)if(b._cssState){var c=m.getEnclosingWidget(b);c&&(b==c.domNode?c._cssMouseEvent(a):c._subnodeCssMouseEvent(b,b._cssState,a))}}var b=u.body(),d;g(b,k.over,function(c){a(c,c.target,c.relatedTarget)});g(b,k.out,function(c){a(c,c.target,c.relatedTarget)});g(b,l.press,function(c){d=c.target;a(c,d)});g(b,l.release,function(c){a(c,d);d=null});g(b,"focusin, focusout",function(a){var b=a.target;if(b._cssState&&!b.getAttribute("widgetId")){var c=
m.getEnclosingWidget(b);c&&c._subnodeCssMouseEvent(b,b._cssState,a)}})});return h});
//# sourceMappingURL=_CssStateMixin.js.map