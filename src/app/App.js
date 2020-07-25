//
// Chatty
//
// This script is the entry point of the whole app
//
require([
    "dojo/hash",
    "dojo/io-query",
    "dojo/router",

    "app/pages/chat/Index",
    "app/pages/default/Index",
    "app/Storage"
], function (hash, url, router, PageChat, PageDefault, Storage) {
    var currentPage = null;
    var elementAppHeaderId = "app-header";
    var elementAppMainId = "app-main";
    var elementAppFooterId = "app-footer";
    var storage = new Storage({
        token: "d7a57e6adf3ac3dc9c0abcf18234a66d" // prod token
        // token: "fdac83e677d2626247f62b1bc979e66a" // dev token
    });

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
                layoutElementsIds: {
                    header: elementAppHeaderId,
                    footer: elementAppFooterId
                },
                params: event,
                storage: storage
            })
        );
    });

    router.startup();

    // if page url does not contain an hash call '/'
    var urlHash = url.queryToObject(hash());
    if (Object.keys(urlHash).length === 0) {
        router.go("/");
    }
    // ----------------------------------------------------------------- helpers
    function render(pageInstance) {
        renderCleanup();

        currentPage = pageInstance;
        currentPage.placeAt(elementAppMainId);
        currentPage.startup();
    }

    function renderCleanup() {
        if (currentPage != null) {
            currentPage.destroy();
        }
    }
});
