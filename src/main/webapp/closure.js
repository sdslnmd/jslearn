var uniqueID=(function(){
    var id=0;
    return function(){
        return id++;
    };
})();
alert(uniqueID())
alert(uniqueID())
alert(uniqueID())
alert(uniqueID())

function markFunc(x) {
    return function(){return x};
}
var a = [markFunc("a"), markFunc("b"), markFunc("c")];

var fun=function(arg1,arg2) {
    //do anything you want here
};
//fun.call(Object, arg1, arg2);

