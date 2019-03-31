//词法作用域 与调用形式无关 实例一
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//Jack



//词法作用域 与调用形式无关 实例二
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();//Jack
/////////////////////////////////////////
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
};

//多人协同开发时问题，块作用域缺陷的问题可能会更加明显
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
////////////////////////////////////////
console.log("小明回家");
        var xx = ["书桌","书包","铅笔盒"];
        console.log("在家-做作业中");
        function gotostore(){
            var yy = ["文具店老板","出售的文件"];
            console.log("在文具店-买文具中");
            console.log("在文具店-买文具中 发现没带钱");
            gotobank();
            console.log("在文具店-买好文具 返回家");
        }
        function gotobank(){
            var zz=["银行职员","柜员机"];
            console.log("在银行-取钱 返回文具店");
        }
        console.log("在家-做作业中 发现笔没油了");
        gotostore();
        console.log("在家-继续做作业");