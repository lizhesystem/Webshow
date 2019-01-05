

//游戏对象
(function(){
    function Game(map){
        //把食物小蛇地图传进来,创建对象,这里不用再传Food了。因为已经给window了。所有都能获取到
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this
    }
    Game.prototype.init = function(){
        //init方法创建食物,小蛇到地图上,小蛇动起来的runSnake方法也写进来,还有按键
        this.food.init(this.map);
        this.snake.init(this.map);
        //把食物对象和地图传给runSnake对象
        this.runSnake(this.food,this.map);
        this.bindKey();
    };
    Game.prototype.runSnake = function(food,map){
        var isTime = setInterval(function(){
            this.snake.move(food,map);
            this.snake.init(map);
            //map横纵坐标的最大X和Y
            var maxX = map.offsetWidth / this.snake.width;
            var maxY = map.offsetHeight / this.snake.height;
            //小蛇目前头部的横纵坐标
            var hearX = this.snake.body[0].x;
            var hearY = this.snake.body[0].y;
            //判断蛇头是否超出map
            if( hearX < 0 || hearX >= maxX){
                clearInterval(isTime);
                alert("游戏结束")
            }
            if( hearY <0 || hearY >= maxY ){
                clearInterval(isTime);
                alert("游戏结束")
            }
            //改变this指向,setinterval里的this默认是window,改成that指向Game对象
        }.bind(that),150);
    };
    Game.prototype.bindKey = function () {
        document.addEventListener("keydown",function (e) {
            switch (e.keyCode) {
                case 37:this.snake.direction = "left";break;
                case 38:this.snake.direction = "top";break;
                case 39:this.snake.direction = "right";break;
                case 40:this.snake.direction = "bottom";break;
            }
        }.bind(that),false)
    };
    window.Game = Game;

})();