require({cache:{
'url:app/pages/default/Index.html':"<article class=\"${baseClass}\">\n    <form action=\"#\" class=\"${baseClass}-form ${baseClassForm}\">\n        <fieldset class=\"${baseClassForm}-fieldset\">\n            <legend class=\"${baseClassForm}-legend\">Before to begin</legend>\n            <ol class=\"${baseClassForm}-fields\">\n                <li class=\"${baseClassForm}-field\">\n                    <label for=\"${id}-nickname\"\n                        >Choose your nickname<br />(minimum 3 characters)</label\n                    >\n                    <br />\n                    <input\n                        aria-required=\"true\"\n                        class=\"${baseClassForm}-input ${baseClassForm}-input--login\"\n                        data-dojo-attach-point=\"elementNickname\"\n                        name=\"nickname\"\n                        id=\"${id}-nickname\"\n                        minlength=\"${minLength}\"\n                        type=\"text\"\n                    />\n                </li>\n                <li\n                    class=\"${baseClassForm}-field ${baseClassForm}-field--buttonBar\"\n                >\n                    <button\n                        class=\"${baseClassForm}-button ${baseClassForm}-button--login\"\n                        data-dojo-attach-point=\"elementSubmit\"\n                        type=\"submit\"\n                    >\n                        Let's chat!\n                    </button>\n                </li>\n            </ol>\n        </fieldset>\n    </form>\n</article>\n"}});
//
// Default page for test purposes
//
// Author: Elia Contini
//
define("app/pages/default/Index", [
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
