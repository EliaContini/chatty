//
// Chat page
//
// Author: Elia Contini
//
define([
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dijit/_WidgetsInTemplateMixin",

    "dojo/_base/declare",
    "dojo/text!./Index.html"
], function (
    _TemplatedMixin,
    _WidgetBase,
    _WidgetsInTemplateMixin,
    declare,
    template
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        baseClass: "page",
        layoutElementsIds: null, // ids of header and footer DOM elements
        params: null,
        templateString: template,

        postCreate: function () {}
    });
});
