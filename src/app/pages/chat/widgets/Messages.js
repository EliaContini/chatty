//
// Chat page
//
// Author: Elia Contini
//
define([
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",

    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/text!./Messages.html"
], function (_TemplatedMixin, _WidgetBase, declare, lang, template) {
    return declare([_WidgetBase, _TemplatedMixin], {
        baseClass: "messages",
        messages: null,
        templateString: template,

        postCreate: function () {},

        render: function () {
            var messages = this.messages;
        }
    });
});
