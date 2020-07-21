var profile = {
    action: "release",
    basePath: ".",
    layerOptimize: "closure",
    optimize: "closure",
    mini: true,
    selectorEngine: "lite",
    stripConsole: "none",

    layers: {
        "dojo/dojo": {
            boot: true,
            customBase: true
        },

        "app/App": {}
    },

    packages: [
        { name: "app", location: "./../src/app" },
        { name: "dijit", location: "./../node_modules/dijit" },
        { name: "dojo", location: "./../node_modules/dojo" }
    ]
};
