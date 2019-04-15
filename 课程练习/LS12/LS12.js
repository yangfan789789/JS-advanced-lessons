var tmp = 100;
function foo(x){
    var tmp = 3;
    return function(y){
        console.log(x+y,++tmp);
    }
}
var fee =foo(2);
fee(10);//12 4

var tmp = 100;
function foo(){
    return function(){
        console.log(++tmp);
    }
}
var fee =foo();
fee();//闭包：将内存保护到内存，延长函数内部变量，不会被释放



function foo(x){
    var tmp = 3;
    return function (y){
        x.count=x.count?x.count+1:1;
        console.log(x+y+tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age);
bar(10);
bar(10);
bar(10);

function counter(){
    var n =0;
    return{
        count:function(){return ++n},
        reset:function(){n=0;return n;}
    }
}
var c =counter()
var d = counter();
console.log(c.count());
console.log(d.count());
console.log(c.count());
console.log(c.count());
console.log(d.count());

function fn() {
    var a;
    return function() {
        return a || (a = document.body.appendChild(document.createElement('div')));
    }
};
var f = fn();
f();


window.onload = function () {
    var btns = document.getElementsByClassName("btn");
    function closureExample(objID) {
        var ol = document.getElementById(objID);
        // var li = document.createElement("li");//闭包，单例模式
        // ol.appendChild(li);//闭包，单例模式
        return function () {
            var li = document.createElement("li");
            ol.appendChild(li);
            li.innerHTML = "列表内容";
        };
    }
    var foo = closureExample("orderList");
    for(var i=0;i<3;i++){
        (function (j) {
            btns[j].onclick = function () {
                setTimeout(foo,(3*j+2)*1000);
            };
        }(i));
    }
};