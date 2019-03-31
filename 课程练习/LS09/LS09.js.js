//思考如下代码输出什么 值类型
console.log(a,b);//输出什么 1 undefined
var b = 23;
console.log(a,b);//输出什么 1 23
var a = b;
console.log(a,b);//输出什么 23 23

//思考如下代码输出什么 引用类型
console.log(obj1,obj2);//undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//输出什么{x:23} undefined
var obj2 = obj1;
console.log(obj1,obj2);//输出什么{x:23} {x:23}
obj2.x =25;
console.log(obj1,obj2);//输出什么{x:25} {x:25}
/////////////////////////////////////////////
AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();

//上边代码等价如下
function AA(){
    console.log("AA_1");
}
var AA;

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();
////////////////////////////////////////////////
//ES5中无块作用域
if(true){
    var z = 23;
}
console.log(z);//正常输出

if(true){
    (function () { //IIFE start
        var z = 23;
    }());           //IIFE end
}
console.log(z);//报错