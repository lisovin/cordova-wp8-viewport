var exec = require('cordova/exec');
var ignore = function () {};

module.exports = {
    getViewport: function (onSuccess, onError) {
        exec(onSuccess || ignore, onError || ignore, "Viewport", "getViewport", []);
    },

    fixViewport: function (onSuccess, onError) {
        this.getViewport(function (vp) {
            var vpStyle = document.createElement("style");
            vpStyle.appendChild(document.createTextNode("@-ms-viewport {width:" + vp.width + "px}"));
            document.getElementsByTagName("head")[0].appendChild(vpStyle);

            onSuccess();
        }, onError);
    }
};
