//小蛇对象
(function () {
    var elements = [];

    //小蛇构造函数,
    function Snake(width, height, direction) {
        this.width = width || 20;
        this.height = height || 20;
        this.direction = "right";
        //身体
        this.body = [
            {x: 3, y: 2, color: "red"}, //头部 x+1
            {x: 2, y: 2, color: "orange"}, //身体 索引-1
            {x: 1, y: 2, color: "orange"}        //索引-1
        ]
    }

    //创建小蛇的原型方法
    Snake.prototype.init = function (map) {
        remove();
        //循环创建小蛇 长度3
        for (var i = 0; i < this.body.length; i++) {
            //创建小蛇加到div
            var div = document.createElement("div");
            map.appendChild(div);
            //设置div的样式
            div.style.height = this.height + "px";
            div.style.width = this.width + "px";
            div.style.position = "absolute";
            //设置小蛇位置
            var obj = this.body[i];
            div.style.left = obj.x * this.width + "px";
            div.style.top = obj.y * this.height + "px";
            //设置小蛇的颜色
            div.style.backgroundColor = obj.color;
            elements.push(div);
        }
    };
    //小蛇动起来的函数
    Snake.prototype.move = function (food, map) {
        //小蛇动起来其实更换蛇身后面的索引值,2变1,1变0,蛇头++  。
        var i = elements.length - 1;
        for (; i > 0; i--) {                        //倒叙循环蛇身体2个
            this.body[i].x = this.body[i - 1].x;    //更改索引值-1
            this.body[i].y = this.body[i - 1].y;
        }
        switch (this.direction) {                   //判断蛇头方向
            case "right":
                this.body[0].x += 1;
                break;
            case "left":
                this.body[0].x -= 1;
                break;
            case "top":
                this.body[0].y -= 1;
                break;
            case "bottom":
                this.body[0].y += 1;
                break;
        }

        //判断蛇头是否和食物在一个坐标x和y上。
        //hearx蛇头的坐标
        var hearx = this.body[0].x * this.width;
        var heary = this.body[0].y * this.height;
        //food食物的坐标
        var foodx = food.x;
        var foody = food.y;
        if(hearx == foodx && heary == foody){
            //如果碰到得到last,也就是目前身体的最后一个索引，也就是蛇尾,把蛇尾加到身体后面，就变成了吃了一个食物
            //使用对象的方式添加
            var last = this.body[this.body.length -1];
            this.body.push(
                {
                    x:last.x,
                    y:last.y,
                    color:last.color
                }
            );
            //记得初始化食物，重新出来个食物
            food.init(map)
        }
    };

    //内部方法,删除尾巴
    function remove(){
        var i = elements.length-1;
        for(;i>=0;i--){
            var elm = elements[i];
            elm.parentNode.removeChild(elm);
            elements.splice(i,1)
        }
    }
    window.Snake = Snake;
})();