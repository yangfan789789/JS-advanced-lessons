//js02
//全局变量滥用
var x = 10;
document.onclick = function () {
alert("x = "+x);
};

//使用IIFE函数
(function () {  
    var x = 10;
    document.onclick = function () {
        alert("x = "+x);
    };
})();
console.log("x="+x);

//js03
console.error();//打印错误信息
console.trace();//函数用来打印函数调用的栈信息

//js04
console.log(a);
if(true){
    var a = 2;
}
console.log(a);
//undefined
//2
//undefined

console.log(b);
if(false){
    var b = 3;
}
console.log(b);
//undefined
//undefined
//undefined
for(var i=0;i<3;i++){
    console.log("i:",i);
}
console.log(i);//0.1.2 i=3

//js05

// _str
// num
// $abc
// 8def不合法

console.log(typeof NaN);//undefined

//js06
var num = 1;
var str = "some string";
var b = true;
var n = null;
var u = undefined;//如果没赋值的话，是什么情况

var arr = ["apple", "pear", "banana"];
var func = function(){
    return "this a function";
};
var obj = new Object();
obj.name = "test";

console.log("\n");
console.log(typeof num); //number
console.log(typeof str); //string
console.log(typeof b); //boolean
console.log(typeof n); //这里返回的是object，这是JS语言的特别之处
console.log(typeof u); //undefined
console.log("\n");
console.log(typeof arr); //object
console.log(typeof func); //function
console.log(typeof obj); //object


console.log(typeof Number); //function
console.log(typeof String); //function
console.log(typeof Boolean); //function
console.log(typeof Object); //function
console.log(typeof Array); //function
console.log(typeof Function); //function
console.log(typeof RegExp); //function
console.log(typeof Error); //function
console.log(typeof Math); //object
console.log(typeof JSON);//object

//==、=== 回顾 值类型与引用类型回顾 不同类型变量 判等时的区别
//判等步骤
//1.看是==还是===

//2.如果是===则先看类型
// 类型不同肯定false
// 类型相同（如果是基本类型：判断值是否相等；  如果是引用类型：判断引用是否是同一个引用）

//3.如果是==则先看类型
// 先试着进行类型转换
// 转换后（如果是基本类型：判断值是否相等；   如果是引用类型：判断引用是否是同一个引用）
var a1 = 2;
var a2 = "2";
console.log(a1==a2);//true，类型转换，转换后相同
console.log(a1===a2);//false

var b1 = {};
var b2 = {};
console.log(b1==b2);//false 引用类型
console.log(b1===b2);//false 引用类型
console.log(b1===b1);//true 引用相同

//进一步理解
var c1 = 23;
var c2 = new Number(23);
console.log(c1==c2);//true
console.log(c1===c2);//false，类型不同

//包装对象
var str2 = "abc";
console.log(str2.length);
str2.length = 1;
console.log(str2);//原始类型变量的不可变性，指的是包装对象的改变并不影响原始类型的变量

//改变此临时包装对象的属性，并不会影原变量（原始类型变量的不可变性）

//undefined与null 未确定的值、空引用

//typeof 与 instance
//typeof 常用于检测基本类型的变量
//instance 常用于检测引用类型的变量 instance左侧期望是一个对象，右侧期望是一个类型
console.log({}instanceof Object);//true
console.log([]instanceof Object);//true
console.log([]instanceof Array);//true

//js07
console.log(2>1&&4<5);true
console.log(true&&(!2));false
console.log(false&&("2" == 2));false
console.log(false&&false);false

console.log(2>1||4<5);true
console.log(true||(!2));true
console.log(false||("2" == 2));true
console.log(false||false);false

//js08

console.log(1===1.0);//true
console.log(Number("xyz"));//NAN 类型不同，转换出错
console.log(3/0);//Infinity 出错

//js09

var a = 10;
console.log(++a);//a+1，输出a

var b = 20;
console.log(b++);//输出b，b+1

//js10

var str1 = "aaa".concat("bbb");//concat链接 aaabbb
var str2 = "abcdef".slice(2);//slice返回数字之外的字符 cdef
var str3 = "abcdef".slice(2,5);//cde 包含2不包含5
var str4 = "abcdef".slice(-2);//ef，包含-2
var str5 = "abcdef".slice(2,-2);//cd，不包含-2
var str6 = "abcdef".split("c");//["ab","def"]
var str7 = "abcdef".split("c",1);//["ab"]
var str8 = "abcdef".split("c",2);//["ab","def"]
var str9 = "abcdef".charAt(2);//c
var str10 = "abcdefabcdef".indexOf("d",1);//3
var str11 = "abcdefabcdef".indexOf("d",4);//9 返回d从第四个字符第一次出现的位置
var str12 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串 abc def
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度 cdefg
var str15 = str13.substring(2,5);//后一个参数代表第几个end cde

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);
console.log(str7);
console.log(str8);
console.log(str9);
console.log(str10);
console.log(str11);
console.log(str12);
console.log(str13);
console.log(str14);
console.log(str15);

//js11
for(var i=0;i<10;i++){
    console.log("i:",i);
}
console.log("out of for:",i);//10

//js12

function max(a,b) {
    return a>b?a:b;
}
console.log(max(2,3));

var min = function(a,b){
    return a<b?a:b;
};
console.log(min(2,3));

//函数参数数量问题回顾
function f1() {
    console.log(arguments);//[2, 3, 4, "a", callee: ƒ, Symbol(Symbol.iterator): ƒ]
    var argArr = Array.prototype.slice.call(arguments);
    console.log(argArr);//[2, 3, 4, "a"]
}

//js13

var x = 23;
var foo = function () {
    var x = 34;
    console.log("inside x:",x);//34
    y = 45;//加var和不加var的区别
    console.log("inside y:",y);//45
};
foo();//如果没调用会如何
console.log("outside x:", x);//23
console.log("outside y:", y);//45

//立即执行表达式 IIFE
(function (x,y) {
    return x>y?x:y;
}(4,5));//5

//js14
//添加属性，删除属性
student.id = 2015015001;

delete  student.id;

//查看对象是否有某个属性 in   for...in   Object.keys()
console.log("name" in student);//true
for(var k in student){
    console.log(k,student[k]);
}
console.log(Object.keys(student));//["name","age","sayHi"]

var obj = {
    foo:function () {
        console.log("foo里的this:",this);
        function fee() {
            //"use strict"
            console.log("fee里的this:",this);
        }
        fee();
    }
};
obj.foo();
//{foo:f}
//{window}

function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfo = function () {
    console.log("Hi,i'm",this.name,",i'm",this.age,"years old!");
};

var p1 = new Person("Mike",60);
p1.showInfo();

//js15

var arr1 = [2,3,"a","b"];
console.log(arr1[2]);//a
console.log(arr1.length);//4
arr1.length-=1;
console.log(arr1);//[2, 3, "a"]

//数组相关方法回顾

var arr2 = ['a','b','c'];
var arr3 = arr2.slice(1,2);//并不破坏arr2
console.log(arr3);//["b"]

var arr4 = ['m','n'];
var pushReturn = arr4.push('o');
console.log(pushReturn);//push后数组的长度 3
console.log(arr4);//["m", "n", "o"]

var popReturn =arr4.pop();//最后一个
console.log(popReturn);//pop出的元素 o
console.log(arr4);//["m", "n"]

var arr5 = [1,2,3,4];
var shiftReturn = arr5.shift();//前第一个
console.log(shiftReturn);//shift移除的元素
console.log(arr5);//[2, 3, 4]

var unshiftReturn = arr5.unshift(0);//替换
console.log(unshiftReturn);//unshift后数组的长度
console.log(arr5);//[0, 2, 3, 4]
