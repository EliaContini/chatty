//>>built
define("dojo/dnd/Selector","../_base/array ../_base/declare ../_base/kernel ../_base/lang ../dom ../dom-construct ../mouse ../_base/NodeList ../on ../touch ./common ./Container".split(" "),function(n,p,q,k,f,r,t,u,l,m,d,v){var h=p("dojo.dnd.Selector",v,{constructor:function(b,a){a||(a={});this.singular=a.singular;this.autoSync=a.autoSync;this.selection={};this.anchor=null;this.simpleSelection=!1;this.events.push(l(this.node,m.press,k.hitch(this,"onMouseDown")),l(this.node,m.release,k.hitch(this,"onMouseUp")))},
singular:!1,getSelectedNodes:function(){var b=new u,a=d._empty,c;for(c in this.selection)c in a||b.push(f.byId(c));return b},selectNone:function(){return this._removeSelection()._removeAnchor()},selectAll:function(){this.forInItems(function(b,a){this._addItemClass(f.byId(a),"Selected");this.selection[a]=1},this);return this._removeAnchor()},deleteSelectedNodes:function(){var b=d._empty,a;for(a in this.selection)if(!(a in b)){var c=f.byId(a);this.delItem(a);r.destroy(c)}this.anchor=null;this.selection=
{};return this},forInSelectedItems:function(b,a){a=a||q.global;var c=this.selection,e=d._empty,g;for(g in c)g in e||b.call(a,this.getItem(g),g,this)},sync:function(){h.superclass.sync.call(this);this.anchor&&!this.getItem(this.anchor.id)&&(this.anchor=null);var b=[],a=d._empty,c;for(c in this.selection)c in a||this.getItem(c)||b.push(c);n.forEach(b,function(a){delete this.selection[a]},this);return this},insertNodes:function(b,a,c,e){var d=this._normalizedCreator;this._normalizedCreator=function(a,
c){a=d.call(this,a,c);b?(this.anchor?this.anchor!=a.node&&(this._removeItemClass(a.node,"Anchor"),this._addItemClass(a.node,"Selected")):(this.anchor=a.node,this._removeItemClass(a.node,"Selected"),this._addItemClass(this.anchor,"Anchor")),this.selection[a.node.id]=1):(this._removeItemClass(a.node,"Selected"),this._removeItemClass(a.node,"Anchor"));return a};h.superclass.insertNodes.call(this,a,c,e);this._normalizedCreator=d;return this},destroy:function(){h.superclass.destroy.call(this);this.selection=
this.anchor=null},onMouseDown:function(b){this.autoSync&&this.sync();if(this.current)if(!this.singular&&!d.getCopyKeyState(b)&&!b.shiftKey&&this.current.id in this.selection)this.simpleSelection=!0,t.isLeft(b)&&(b.stopPropagation(),b.preventDefault());else{if(!this.singular&&b.shiftKey){d.getCopyKeyState(b)||this._removeSelection();var a=this.getAllNodes();if(a.length&&(this.anchor||(this.anchor=a[0],this._addItemClass(this.anchor,"Anchor")),this.selection[this.anchor.id]=1,this.anchor!=this.current)){for(var c=
0,e;c<a.length&&(e=a[c],e!=this.anchor&&e!=this.current);++c);for(++c;c<a.length;++c){e=a[c];if(e==this.anchor||e==this.current)break;this._addItemClass(e,"Selected");this.selection[e.id]=1}this._addItemClass(this.current,"Selected");this.selection[this.current.id]=1}}else this.singular?this.anchor==this.current?d.getCopyKeyState(b)&&this.selectNone():(this.selectNone(),this.anchor=this.current,this._addItemClass(this.anchor,"Anchor"),this.selection[this.current.id]=1):d.getCopyKeyState(b)?this.anchor==
this.current?(delete this.selection[this.anchor.id],this._removeAnchor()):this.current.id in this.selection?(this._removeItemClass(this.current,"Selected"),delete this.selection[this.current.id]):(this.anchor&&(this._removeItemClass(this.anchor,"Anchor"),this._addItemClass(this.anchor,"Selected")),this.anchor=this.current,this._addItemClass(this.current,"Anchor"),this.selection[this.current.id]=1):this.current.id in this.selection||(this.selectNone(),this.anchor=this.current,this._addItemClass(this.current,
"Anchor"),this.selection[this.current.id]=1);b.stopPropagation();b.preventDefault()}},onMouseUp:function(){this.simpleSelection&&(this.simpleSelection=!1,this.selectNone(),this.current&&(this.anchor=this.current,this._addItemClass(this.anchor,"Anchor"),this.selection[this.current.id]=1))},onMouseMove:function(){this.simpleSelection=!1},onOverEvent:function(){this.onmousemoveEvent=l(this.node,m.move,k.hitch(this,"onMouseMove"))},onOutEvent:function(){this.onmousemoveEvent&&(this.onmousemoveEvent.remove(),
delete this.onmousemoveEvent)},_removeSelection:function(){var b=d._empty,a;for(a in this.selection)if(!(a in b)){var c=f.byId(a);c&&this._removeItemClass(c,"Selected")}this.selection={};return this},_removeAnchor:function(){this.anchor&&(this._removeItemClass(this.anchor,"Anchor"),this.anchor=null);return this}});return h});
//# sourceMappingURL=Selector.js.map