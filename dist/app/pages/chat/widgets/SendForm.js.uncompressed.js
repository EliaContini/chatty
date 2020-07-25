require({cache:{
'url:app/pages/chat/widgets/SendForm.html':"<div class=\"${baseClass}\">\n    <form action=\"#\" class=\"${baseClass}-form\">\n        <fieldset class=\"${baseClass}-fieldset\">\n            <legend class=\"${baseClass}-legend a11y\">Send a message</legend>\n            <ol class=\"${baseClass}-fields\">\n                <li class=\"${baseClass}-message\">\n                    <label class=\"a11y\" for=\"${id}-message\"\n                        >Write a message</label\n                    >\n                    <input\n                        class=\"${baseClass}-input\"\n                        data-dojo-attach-point=\"elementMessage\"\n                        id=\"${id}-message\"\n                        type=\"text\"\n                    />\n                </li>\n                <li class=\"${baseClass}-button\">\n                    <button\n                        class=\"${baseClassForm}-button\"\n                        data-dojo-attach-point=\"elementSend\"\n                    >\n                        Send\n                    </button>\n                </li>\n            </ol>\n        </fieldset>\n    </form>\n</div>\n"}});
//
// Send form
//
// Author: Elia Contini
//
define("app/pages/chat/widgets/SendForm", [
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
