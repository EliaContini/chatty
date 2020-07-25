//>>built
define("dijit/Destroyable",["dojo/_base/array","dojo/aspect","dojo/_base/declare"],function(c,g,d){return d("dijit.Destroyable",null,{destroy:function(c){this._destroyed=!0},own:function(){var d=["destroyRecursive","destroy","remove"];c.forEach(arguments,function(b){function e(){k.remove();c.forEach(h,function(a){a.remove()})}var k=g.before(this,"destroy",function(a){b[f](a)}),h=[];if(b.then){var f="cancel";b.then(e,e)}else c.forEach(d,function(a){"function"===typeof b[a]&&(f||(f=a),h.push(g.after(b,
a,e,!0)))})},this);return arguments}})});
//# sourceMappingURL=Destroyable.js.map