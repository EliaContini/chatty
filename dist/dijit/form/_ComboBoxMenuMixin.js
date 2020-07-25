//>>built
define("dijit/form/_ComboBoxMenuMixin","dojo/_base/array dojo/_base/declare dojo/dom-attr dojo/has dojo/i18n dojo/i18n!./nls/ComboBox".split(" "),function(k,g,e,h,l){var f=g("dijit.form._ComboBoxMenuMixin"+(h("dojo-bidi")?"_NoBidi":""),null,{_messages:null,postMixInProperties:function(){this.inherited(arguments);this._messages=l.getLocalization("dijit.form","ComboBox",this.lang)},buildRendering:function(){this.inherited(arguments);this.previousButton.innerHTML=this._messages.previousMessage;this.nextButton.innerHTML=
this._messages.nextMessage},_setValueAttr:function(a){this._set("value",a);this.onChange(a)},onClick:function(a){if(a==this.previousButton)this._setSelectedAttr(null),this.onPage(-1);else if(a==this.nextButton)this._setSelectedAttr(null),this.onPage(1);else this.onChange(a)},onChange:function(){},onPage:function(){},onClose:function(){this._setSelectedAttr(null)},_createOption:function(a,b){var c=this._createMenuItem();a=b(a);a.html?c.innerHTML=a.label:c.appendChild(c.ownerDocument.createTextNode(a.label));
""==c.innerHTML&&(c.innerHTML="\x26#160;");return c},createOptions:function(a,b,c){this.items=a;this.previousButton.style.display=0==b.start?"none":"";e.set(this.previousButton,"id",this.id+"_prev");k.forEach(a,function(a,b){a=this._createOption(a,c);a.setAttribute("item",b);e.set(a,"id",this.id+b);this.nextButton.parentNode.insertBefore(a,this.nextButton)},this);var d=!1;a.total&&!a.total.then&&-1!=a.total?b.start+b.count<a.total?d=!0:b.start+b.count>a.total&&b.count==a.length&&(d=!0):b.count==a.length&&
(d=!0);this.nextButton.style.display=d?"":"none";e.set(this.nextButton,"id",this.id+"_next")},clearResultList:function(){for(var a=this.containerNode;2<a.childNodes.length;)a.removeChild(a.childNodes[a.childNodes.length-2]);this._setSelectedAttr(null)},highlightFirstOption:function(){this.selectFirstNode()},highlightLastOption:function(){this.selectLastNode()},selectFirstNode:function(){this.inherited(arguments);this.getHighlightedOption()==this.previousButton&&this.selectNextNode()},selectLastNode:function(){this.inherited(arguments);
this.getHighlightedOption()==this.nextButton&&this.selectPreviousNode()},getHighlightedOption:function(){return this.selected}});h("dojo-bidi")&&(f=g("dijit.form._ComboBoxMenuMixin",f,{_createOption:function(){var a=this.inherited(arguments);this.applyTextDir(a);return a}}));return f});
//# sourceMappingURL=_ComboBoxMenuMixin.js.map