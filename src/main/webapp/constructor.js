function myConstructor(message) {
    this.myMessage = message;

    //私有属性
    var separtor = ' -';
    var myOwner = this;

    //私有方法
    function alertMessage() {
        alert(myOwner.myMessage);
    }

    //ASDF

    //特权方法（也是共有方法）
    this.appendToMessage = function (string) {
        this.myMessage += separtor + string;
        alertMessage();
    };


    //公有方法 定义在构造函数内,可以访问私有方法和属性（理论上是不可以的啊）
    myConstructor.prototype.clearMessageInner = function (string) {
        alertMessage()
        this.myMessage = '';
    }


    //静态属性
    myConstructor.name = "jeff";
    myConstructor.alertName= function () {
        alert(this.name);
    }
}
//公有方法 无法访问私有方法和私有属性
myConstructor.prototype.clearMessage = function (string) {
    this.myMessage = '';
}
