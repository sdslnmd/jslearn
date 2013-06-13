var myObject =(function(){
    var value = 0;
    return {
        increment:function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue:function(){
            return value;
        }
    }
}());//立即执行初始化

var quo=function(state) {
    return {
        getState:function(){
            return state;
        }
    };
};

//alert(myObject.getValue());
//alert(quo(1).getState(¡)) //在这里执行初始化
alert(new quo(1).getState()) //在这里执行初始化

var uniqueID=(function(){
    var id=0;
    return function(){
        return id++;
    };
})();
//alert(uniqueID())

var module = {};
((function(exports){
    exports.notGloablFunction=function(){
        console.log("notGloablFunction");
    };
})(module));

module.notGloablFunction(); //outputs "I am not global"

var fun=function(arg1,arg2) {
    //do anything you want here
};
//fun.call(Object, arg1, arg2);


