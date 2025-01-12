var exec = require('cordova/exec');

exports.callNumber = function(success, error, number, bypassAppChooser) {
    exec(success, error, "CFCallNumber", "callNumber", [number, bypassAppChooser]);
};

exports.isCallSupported = function(success, error) {
    exec(success, error, "CFCallNumber", "isCallSupported", []);
};
