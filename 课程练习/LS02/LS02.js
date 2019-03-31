
console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Number);//function

console.log(typeof Math);//object
console.log(typeof JSON);//object
console.log(typeof 123);//number
console.log(typeof true);//boolean
console.log(typeof "abc");//string
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof {name:"Mike",age:20});//object

console.log(typeof function foo(){});//function




///////////////////////////////////////////////////////////////////////////////////////////
var str_a = "a"; 
    var str_b = str_a; // 原始类型直接访问值,是值赋值
    str_b = "b"; // str_b的值为"b",而str_a的值仍然是"a"
    console.log(str_a,str_b);//str_b的值为"b",而str_a的值仍然是"a"

    var obj_a = {v:"a"}; // obj_a存的是引用，引用堆内存中存的对象:{v:"a"};
    var obj_b = obj_a; // obj_b存的也是引用,引用了堆内存的值{v:"a"}；是引用赋值
    obj_b.v = "b"; // 通过obj_b访问(修改)堆内存的变量,这时候堆内存中对象值为:{v:"b"},由于obj_a和obj_b引用的是堆内存中同一个对象值，
    // 所以这时候打印都是{v:"b"}
    console.log(obj_a,obj_b);//str_b的值为"b",而str_a的值仍然是"b"
    obj_b = {v:"c"}; // 注意：因为改的是整个对象，这里会在堆内存中创建一个新的对象值:{v:"c"},而现在的obj_b引用的是这个对象，
    // 所以这里打印的obj_a依旧是{v:"b"},而obj_b是{v:"c"}(两者在内存中引用的是不同对象了)。
    console.log(obj_a,obj_b);
//////////////////////////////////////////////////////////////////////////////////////////

var a4 = new Number(200);
var b4 = 200;
console.log(a4 == b4);//思考：是b4转换了，还是a4转换了
console.log(a4 === b4);//b4转换了

var a5 = {x:1,y:2};
var b5 = {x:1,y:2};
console.log(a5 === b5);//引用比较
console.log(a5.x === a5.x);//值比较


var str = "abcde";
console.log(str.length);//5 临时包装成了String对象
str.length = 1;
console.log(str.length,str);//5 "abcde" 临时包装对象并不影响原始值

var arr = [1,2,3,4];
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1 [1]