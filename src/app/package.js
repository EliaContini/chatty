var profile = {
    resourceTags: {
        amd: function(filename, mid) {
            return !this.copyOnly(filename, mid) && /\.js$/.test(filename);
        },

        copyOnly: function(filename, mid) {
            return /^app\/resources\//.test(mid) && !/\.css$/.test(filename);
        },

        miniExclude: function(filename, mid) {
            return (
                mid in
                {
                    "app/package": 1
                }
            );
        },

        test: function(filename, mid) {
            return false;
        }
    }
};
