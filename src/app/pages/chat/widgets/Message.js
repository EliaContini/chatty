//
// Chat message
//
// Author: Elia Contini
//
define([
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",

    "dojo/_base/declare",
    "dojo/dom-class",
    "dojo/text!./Message.html"
], function (_TemplatedMixin, _WidgetBase, declare, domClass, template) {
    return declare([_WidgetBase, _TemplatedMixin], {
        baseClass: "message",
        elementAuthor: null,
        elementTime: null,
        message: null,
        templateString: template,

        postCreate: function () {
            var message = this.message;

            if (message["isMe"] === true) {
                domClass.add(this.domNode, this.baseClass + "-isMe");
                domClass.add(this.elementAuthor, "a11y");
            }

            // format date dd mmm yyyy hh:mm
            var date = new Date(message["timestamp"]);
            var dd = Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
            var mmm = new Intl.DateTimeFormat("en", { month: "short" }).format(
                date
            );
            var yyyy = new Intl.DateTimeFormat("en", {
                year: "numeric"
            }).format(date);

            var hh = Intl.DateTimeFormat("en", {
                hour: "2-digit",
                hour12: false
            }).format(date);
            var mm = Intl.DateTimeFormat("en", {
                minute: "2-digit"
            }).format(date);

            var time = [dd, mmm, yyyy, [hh, mm].join(":")].join(" ");

            this.elementTime.innerHTML = time;
        }
    });
});
