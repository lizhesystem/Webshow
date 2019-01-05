  (function () {
        var date = [
    [
        {title:"一、CSS效果实例"},
        {url:"self/01css/01/index.html",title:"1、边框相关样例"},
        {url:"self/01css/02/index.html",title:"2、图片遮罩层"},
        {url:"self/01css/03/index.html",title:"3、倒立小三角"},
        {url:"self/01css/04/index.html",title:"4、input样式相关"},
        {url:"self/01css/05/index.html",title:"5、导航栏效果"},
        {url:"self/01css/06/index.html",title:"6、Cs3动画展示"}
    ],
    [
        {title:"二、jQ内容操作"},
        {url:"self/02cont/01/index.html",title:"1、tab栏切换"},
		{url:"self/02cont/02/index.html",title:"2、复制加减框"},
		{url:"self/02cont/03/index.html",title:"3、下拉菜单"},
		{url:"self/02cont/04/index.html",title:"4、手风琴下拉菜单"},
		{url:"self/02cont/05/index.html",title:"5、内容左右选择"},
        {url:"self/02cont/06/index.html",title:"6、音乐导航"},
        {url:"self/02cont/07/index.html",title:"7、全选反选框"},
        {url:"self/02cont/08/index.html",title:"8、简易弹幕墙"},
        {url:"self/02cont/09/index.html",title:"9、五角星评分"}
    ],
    [
        {title:"三、jQ图片相关操作"},
        {url:"self/03pic/01/index.html",title:"1、亚马逊轮播图"},
        {url:"self/03pic/02/index.html",title:"2、淘宝精品推荐"},
        {url:"self/03pic/03/index.html",title:"3、图片遮罩显示"}
    ],
    [
        {title:"四、Dom内容操作"},
        {url:"self/04dcont/01/index.html",title:"1、正则验证登录"},
		{url:"self/04dcont/02/index.html",title:"2、原生JS贪吃蛇"}
    ],
    [
        {title:"五、Dom图片操作"},
        {url:"self/05dpic/01/index.html",title:"1、轮播旋转木马"},
        {url:"self/05dpic/02/index.html",title:"2、注册框移动"},
        {url:"self/05dpic/03/index.html",title:"3、小米手风琴"}
    ]
];
//拼接数据
var allStr = "";                 //定义最终所有的字符串
for(var i=0;i<date.length;i++){  //循环所有的数组
    var full = date[i];          //full代表每个数组
    var str ="";
    for(var j=0;j<full.length;j++){
        if(j===0){               //j===0代表拿到的是第标题加到str里。
            str += "<li><h4><a href=\"javascript:\"><span>" + full[j].title + "</span></a></h4><dl>"
        }else{                  //剩下的往后追加
            str += "<dd><a href='" +full[j].url+"' onclick=\"return false\"><i></i>"+ full[j].title +"</a></dd>"
        }
        if(j === full.length -1){
          str += "</dl></li>"   //full.length -1代表以及到末尾了,给加上结尾标签
        }
    }
    allStr +=str;               //这个写到循环外面,每个li加到allStr下,最终得到所有的li,
    // console.log(allStr)
}


var olList = document.getElementById("ol");  //li的父级
    olList.innerHTML = allStr;              //不能使用appendChild追加,因为allStr是个字符串,不是对象。使用innerText
var h4 = olList.getElementsByTagName("h4");  //所有的h4标题
h4[0].nextElementSibling.style.display = "block"; //默认显示第一章的内容
var dl = olList.getElementsByTagName('dl');  //所有的dl右侧
var dd = olList.getElementsByTagName("dd");  //所有的跳转的页面

for (var k=0;k<h4.length;k++){
    h4[k].onclick = function () {

//这个循环是
        for(var e=0;e<h4.length;e++){
            h4[e].className = ""
        }
        this.className = "border";

//循环所有的标题,绑定点击事件,然后把所有的dl都给隐藏掉
        for(var j=0;j<dl.length;j++){
            dl[j].style.display = "none"

        }                        //把当前点击的下个标签,dl的下个标签就是dd显示。
        this.nextElementSibling.style.display = "block";
    }
}

//这个是点击当前点击的dd,对应跳转iframe标签里,因为每个dd下都有个a标签链接指向就是新的html,并且绑定的 onclick="return false"
for(var t=0;t<dd.length;t++){
    dd[t].onclick = function () {
    document.getElementById("ifm").src = this.firstElementChild.href;
    }
}

})();