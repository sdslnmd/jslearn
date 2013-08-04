var Class = function () {
    var Klass = function () {
        this.init.apply(this, arguments);
    };
    Klass.prototype.init = function () {
        return Klass;
    };
};
var Persion = new Class();
Persion.prototype.init=function() {
    //基于person的实例做初始化
};

//用法
var person = new Persion;