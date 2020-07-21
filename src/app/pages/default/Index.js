//
// Default page for test purposes
//
// Author: Elia Contini
//
define([
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",

    "dojo/_base/declare",
    "dojo/text!./Index.html"
], function (_TemplatedMixin, _WidgetBase, declare, template) {
    return declare([_WidgetBase, _TemplatedMixin], {
        baseClass: "page",
        params: null,
        templateString: template
    });
});
