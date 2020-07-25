require({cache:{
'url:app/pages/chat/widgets/Messages.html':"<div class=\"${baseClass}\"></div>\n"}});
//
// Chat messages
//
// Author: Elia Contini
//
define("app/pages/chat/widgets/Messages", [
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",

    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/text!./Messages.html",

    "./Message"
], function (
    _TemplatedMixin,
    _WidgetBase,
    declare,
    lang,
    on,
    template,
    Message
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        baseClass: "messages",
        messages: null,
        templateString: template,

        _userHasScrolled: false,
        _isScrolling: null,

        // used to optimize rendering
        // timestamp is used as ID
        // if a timestamp is already rendered render() skips it
        _widgetsMessage: null,

        destroy: function () {
            var widgetsMessage = this._widgetsMessage;
            if (widgetsMessage != null) {
                for (var timestamp in widgetsMessage) {
                    widgetsMessage[timestamp].destroy();
                }
            }

            this.inherited(arguments);
        },

        postCreate: function () {
            this._handlerListenerScroll = on.pausable(
                this.domNode,
                "scroll",
                lang.hitch(this, "_listenerScroll")
            );
            this.own(this._handlerListenerScroll);

            // watchers
            this.watch("messages", lang.hitch(this, "render"));
        },

        render: function () {
            if (this._widgetsMessage == null) {
                this._widgetsMessage = {};
            }

            var elementRoot = this.domNode;
            var message = null;
            var messages = this.messages;
            var timestamp = null;
            for (var i = 0, length = messages.length; i < length; i++) {
                message = messages[i];
                timestamp = message["timestamp"];

                if (!(timestamp in this._widgetsMessage)) {
                    this._widgetsMessage[timestamp] = new Message({
                        message: message
                    });
                    this._widgetsMessage[timestamp].placeAt(
                        elementRoot,
                        "first"
                    );
                    this._widgetsMessage[timestamp].startup();
                }
            }

            if (this._userHasScrolled === false) {
                this._handlerListenerScroll.pause();

                this.domNode.scrollTop = this.domNode.scrollHeight;

                setTimeout(
                    lang.hitch(this, function _resumeScroll() {
                        this._handlerListenerScroll.resume();
                    })
                );
            }
        },
        // ----------------------------------------------------- private methods
        _listenerScroll: function (event) {
            this._userHasScrolled = true;

            var elementRoot = this.domNode;
            if (
                elementRoot.scrollHeight - elementRoot.scrollTop ===
                elementRoot.clientHeight
            ) {
                this._userHasScrolled = false;
            }
        }
    });
});
