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
    "dojo/on",
    "dojo/text!./SendForm.html"
], function (_TemplatedMixin, _WidgetBase, declare, lang, on, template) {
    return declare([_WidgetBase, _TemplatedMixin], {
        baseClass: "sendForm",
        baseClassForm: "form",
        elementMessage: null,
        elementSend: null,
        templateString: template,

        postCreate: function () {
            this.own(
                on(this.elementSend, "click", lang.hitch(this, "_listenerSend"))
            );
        },
        // ----------------------------------------------------- private methods
        _listenerSend: function (event) {
            event.preventDefault();

            var message = this.elementMessage.value;

            if (message.length > 0) {
                this.emit("send", { value: message });

                this.elementMessage.value = "";
            }
        }
    });
});
