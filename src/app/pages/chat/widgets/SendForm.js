//
// Send form
//
// Author: Elia Contini
//
define([
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",

    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/text!./SendForm.html"
], function (_TemplatedMixin, _WidgetBase, declare, lang, template) {
    return declare([_WidgetBase, _TemplatedMixin], {
        baseClass: "sendForm",
        templateString: template,

        postCreate: function () {}
    });
});
