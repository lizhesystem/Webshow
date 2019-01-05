//食物对象
(function () {
    //食物的列表
    var elements = [];

    //食物的构造函数
    function Food(width, height, color, x, y) {
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "yellow";
        this.x = x || 0;
        this.y = y || 0;
    }

    //生成随机食物的原型方法
    Food.prototype.init = function (map) {
        remove();
        //创建食物
        var div = document.createElement("div");
        //增加食物的属性
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        div.style.position = "absolute";
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        //食物添加到map下
        my$("map").appendChild(div);
        elements.push(div);
    };

    //内部方法删除食物
    function remove() {
        for (var i = 0; i < elements.length; i++) {
            var elm = elements[i];  //每个食物
            elm.parentNode.removeChild(elm);
            elements.splice(i, 1);
        }
    }
    window.Food = Food;
})();