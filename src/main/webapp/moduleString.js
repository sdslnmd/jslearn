String.method('deentityify', function () {
    //字符实体表。它存储字符实体的名字到对应的字符
    var entify = {
        quot: '"',
        lt: '<',
        gt: '>'
    };

    //返回deentityify方法

    return function(){
        alert(1);
        return this.replace(/&([^&;]+);/g,function(a,b) {
            var r = entify[b];
            return typeof r === 'string' ? r : a;
        })
    }
}()) //关键在最后的（），立刻执行刚构造出来的函数

