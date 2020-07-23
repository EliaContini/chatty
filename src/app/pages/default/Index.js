//
// Default page for test purposes
//
// Author: Elia Contini
//
define([
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",

    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom-attr",
    "dojo/dom-class",
    "dojo/on",
    "dojo/router",
    "dojo/string",
    "dojo/text!./Index.html"
], function (
    _TemplatedMixin,
    _WidgetBase,
    declare,
    lang,
    domAttr,
    domClass,
    on,
    router,
    string,
    template
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        baseClass: "pageDefault",
        baseClassForm: "form",
        elementNickname: null,
        elementSubmit: null,
        minLength: 3,
        params: null,
        templateString: template,
        storage: null,

        postCreate: function () {
            // listeners
            this.own(
                on(
                    this.elementSubmit,
                    "click",
                    lang.hitch(this, "_listenerSubmit")
                )
            );
        },
        // ----------------------------------------------------- private methods
        _listenerSubmit: function (event) {
            event.preventDefault();

            var cssClassInvalid = this.baseClassForm + "-input-isInvalid";
            var elementNickname = this.elementNickname;

            domAttr.set(elementNickname, "aria-invalid", false);
            domClass.remove(elementNickname, cssClassInvalid);

            var nickname = string.trim(elementNickname.value);
            if (nickname.length >= this.minLength) {
                this.storage.set("nickname", nickname);

                router.go("/chat/");
            } else {
                domAttr.set(elementNickname, "aria-invalid", true);
                domClass.add(elementNickname, cssClassInvalid);
            }
        }
    });
});
