var exec = require('cordova/exec');

var ignore = function () {};

module.exports = {
    getViewport: function (options, onSuccess, onError) {
        exec(onSuccess || ignore, onError || ignore, "Viewport", "getViewport", [options]);
    }
};

