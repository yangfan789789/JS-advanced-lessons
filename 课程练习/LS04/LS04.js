function foo(){
	var a=b=3;
}
foo();
console.log("b:",b);//3
console.log("a:",a);//报错


//循环语句
for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out for ",i);
////////////////////////////////////////////
{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a);//注意对比

for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);//报错么，输出啥？

if(true){
    var a = 20;
}
console.log(a);

// 思考：下边的例子是否报错，输出什么，相关知识参考预解析部分
// 你是否能够区分undefined和undeclared
if(false){
    var b = 30;
}
console.log(b);
////////////////////////////////////////////////////////////////
// switch 语句在比较值时使用的是全等操作符,因此不会发生类型转换
var i = "1";
switch(i){
    case 1:
        console.log("case 1 Number");
        break;
    default:
        console.log("default");
}
//输出default 而不是 case 1 Number

var i = "1";
switch(i){
    case 1:
        console.log("case 1 Number");
        break;
    case "1":
        console.log("case 1 String");
        break;
    default:
        console.log("default");
}
//此时输出 case 1 String


var j = new Number(23);
switch (j){
    case 23:
        console.log("case_111");
        break;
    case "23":
        console.log("case_222");
        break;
    case new Number(23):
        console.log("case_333");
        break;
    default:
        console.log("case_default");
}
//此时输出 case_default
//////////////////////////////////////////////////
// 利用switch的穿透性:求某月某日是一年中的第几天?
var year = 2017,
    month = 5,
    date = 20,
    sum = 0;
switch(month-1){
    case 11:
        sum += 30;
    case 10:
        sum += 31;
    case 9:
        sum += 30;
    case 8:
        sum += 31;
    case 7:
        sum += 31;
    case 6:
        sum += 30;
    case 5:
        sum += 31;
    case 4:
        sum += 30;
    case 3:
        sum += 31;
    case 2:
        sum += year%4==0&&year%100!=0||year%400==0?29:28;
    case 1:
        sum += 31;
    default:
        sum += date;
}
console.log(sum);
/////////////////////////////////////////////////////////