(function () {
    if (!window.ADS) {

        window['ADS'] = {};

        function isCompatiable(other) {
            //使用能力检测来检查必要条件
            if (other == false || !Array.prototype.push
                || !Object.hasOwnProperty || !document.createElement
                || !document.getElementsByName) {

                return false;
            }
            return true;
        }

        window['ADS']['isCompatiable'] = isCompatiable;

        function $() {
            var elements = new Array();
            //查找作为参数提供的所有元素
            for (var i = 0; i < arguments.length; i++) {
                var element = arguments[i];
                //如果该参数是一个字符串那假设它是一个ID
                if (typeof element == 'String') {
                    element = document.getElementById(element);
                }
                //如果只提供了一个元素
                //则立即返回这个元素
                if (arguments.length == 1) {
                    return element;
                }
                //否则，将它添加到数组中
                elements.push(element);
            }
            return elements;
        }

        window['ADS']['$'] = $;

        function addEvent(node, type, listener) {
            //使用前面的方法检查兼容性以保证平稳退化
            if (!isCompatiable()) {
                return false;
            }

            if (!(node = $(node))) {
                return false;
            }

            if (node.addEventListener) {
                //W3C方法
                node.addEventListener(type, listener, false);
                return true;
            } else if (node.attachEvent) {
                //MSIE方法
                node['e' + type + listener] = listener;
                node[type + listener] = function () {
                    node['e' + type + listener](window.event);
                };
                node.attachEvent('on' + type, node[type + listener]);
                return true;
            }
            //若两种方法都不具备则返回false
            return false;
        }

        window['ADS']['addEvent'] = addEvent;

        function removeEvent(node,type,listener) {
            if(!(node=$(node))) {
                return false;
            }
            if(node.removeEventListener) {
                node.removeEventListener(type, listener, false);
                return true;
            }
            return false;
        }

        window['ADS']['removeEventListener'] = removeEvent;

        function getElementsByClassName(className,tag,parent) {
            parent = parent || document;
            if (!(parent=$(parent))) {
                return false;
            }

        }
    }
})()