//js11
var a = 34;
if(a = 45){
    console.log("是否会输出？");会
}

var b = 34;
if(45 == b){
    console.log("是否会输出？");不会
}

//js12

var x = "1";
console.log(++x); //2 注意++和--的隐式类型转换
var x = "1";
console.log(x+1);//11
// 思考：+= 是转成字符串类型
// 不同情况下转换的类型不同
var x = "1";
console.log(x+=1);//11
var x = 1;
console.log(x+=1);//2

//回顾++i 与 i++
var i=1;
var y = ++i + ++i + ++i;
console.log(y);//2+3+4=9

//js13

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);//false
console.log(obj1 == obj2);//false
console.log(obj1 === obj2);//false
console.log(obj1 == new String("xyz"));//false

console.log(2 == 2);//true
console.log(new Number(2) == new Number(2));//false
console.log(2 == new Number(2));//true