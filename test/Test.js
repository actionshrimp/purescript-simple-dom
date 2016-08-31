/* global exports */
"use strict";

// module Test.Main

exports.inspect = function (msg) {
    console.log('hi there');
    console.log(msg);
};

exports.tagname = function (obj) {
    return obj.tagName;
};
