//
// Application storage: it manages server I/O (and cache), prepare data and
// notifies changes to registered observers
//
// Author: Elia Contini
//
define(["dojo/_base/declare", "dojo/_base/lang", "dojo/Stateful"], function (
    declare,
    lang,
    Stateful
) {
    return declare([Stateful], {
        nickname: null,

        
    });
});
