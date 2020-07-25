require({cache:{
'url:app/pages/chat/Index.html':"<article class=\"${baseClass}\">\n    <div\n        data-dojo-attach-point=\"widgetMessages\"\n        data-dojo-type=\"app/pages/chat/widgets/Messages\"\n    ></div>\n</article>\n"}});
//
// Chat page
//
// Author: Elia Contini
//
define("app/pages/chat/Index", [
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dijit/_WidgetsInTemplateMixin",

    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/text!./Index.html",

    "./widgets/SendForm",

    // widgets in template
    "./widgets/Messages"
], function (
    _TemplatedMixin,
    _WidgetBase,
    _WidgetsInTemplateMixin,
    declare,
    lang,
    template,
    SendForm
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        baseClass: "pageChat",
        layoutElementsIds: null, // ids of header and footer DOM elements
        params: null,
        templateString: template,
        storage: null,
        widgetSendForm: null,
        widgetMessages: null,

        destroy: function () {
            this.widgetSendForm.destroy();

            this.inherited(arguments);
        },

        postCreate: function () {
            this.widgetSendForm = new SendForm();
            this.widgetSendForm.placeAt(this.layoutElementsIds["footer"]);
            this.widgetSendForm.startup();

            // listeners
            this.own(
                this.widgetSendForm.on(
                    "send",
                    lang.hitch(this, "_listenerSend")
                )
            );

            // watcher
            this.storage.observe(lang.hitch(this, "render"));

            this.storage.boot();
        },

        render: function (messages) {
            this.widgetMessages.set("messages", messages);
        },
        // ----------------------------------------------------- private methods
        _listenerSend: function (event) {
            this.storage.sendMessage({ message: event.value });
        }
    });
});
