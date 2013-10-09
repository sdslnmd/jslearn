var module = {};
((function (exports) {
    exports.notGloablFunction = function () {
        console.log('I am not globa')
    }
})(module));

function notGloablFunction() {
    console.log("I am global")
}
module.notGloablFunction();