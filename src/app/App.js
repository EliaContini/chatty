//
// Chatty
//
// This script is the entry point of the whole app
//
require([
    "dojo/router",

    "app/pages/chat/Index",
    "app/pages/default/Index",
    "app/Storage"
], function (router, PageChat, PageDefault, Storage) {
    var currentPage = null;
    var nodeAppPageId = "app-page";
    var storage = new Storage();

    router.register("/", function (event) {
        render(
            new PageDefault({
                params: event,
                storage: storage
            })
        );
    });

    router.register("/chat/", function (event) {
        render(
            new PageChat({
                params: event,
                storage: storage
            })
        );
    });

    router.startup();

    router.go("/");

    // ----------------------------------------------------------------- helpers
    function render(pageInstance) {
        renderCleanup();

        currentPage = pageInstance;
        currentPage.placeAt(nodeAppPageId);
        currentPage.startup();
    }

    function renderCleanup() {
        if (currentPage != null) {
            currentPage.destroy();
        }
    }
});
