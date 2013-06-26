var YourGlobal={
    namespace:function(ns) {
        var parts = ns.split(".");
        var object = this;
        var i, len;
        for(i=0,len=parts.length;i<len;i++) {
            if(!object[parts[i]]) {
                object[parts[i]] = {};
            }
            object = object[parts[i]];

        }
        return object;
    }
}