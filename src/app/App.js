//
// Chatty
//
// This script is the entry point of the whole app
//
require(["dojo/router", "app/pages/default/Index"], function (
    router,
    PageDefault
) {
    var nodeAppPageId = "app-page";

    router.register("/", function (event) {
        var pageDefault = new PageDefault({
            params: null
        });
        pageDefault.placeAt(nodeAppPageId);
        pageDefault.startup();
    });

    router.startup();

    router.go("/");
});
