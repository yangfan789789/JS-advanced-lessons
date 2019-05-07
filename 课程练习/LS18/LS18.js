function baseclass(){

}
baseclass.f1=function(){
    console.log("静态方法");
}
baseclass.prototype.f2=function(){
    console.log("原型方法");//实例化对象
}
baseclass.f1();
var base = new baseclass();
base.f2();

//object.create();
//object.defineProperty();实例化对象，构造函数

function foo(){

}
foo.prototype.constructor==foo;
var foo=new foo(); 

(function(w,d){
     function input(inputId){
         this._init(inputId);
         this._effect();
     }
     input.prototype._init=function(inputId){
         var inputObject =d.getElementById(inputId);
         this.input
     }
     w.input=input;
})(window,document)
var input1=new input("usename");

var arr1=[,2,3,,5];
console.log(arr1.length);

Array.prototype.min="扩展属性";
//demo01
var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);//[] []

var a3 = [1,2,3];
var a4 = a3;
a4 = [];
console.log(a3,a4);//[1, 2, 3] []
//dome02
var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];
console.log(b);//[empty × 2, 3, undefined]

// Part22222222
var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a["100"] = 0;   // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);//101
console.log(a);//[empty, "Hi", empty × 98, 0, -1.23: true]

//dome03
var a1 = [,"abc"];
console.log(a1.length);//2

for(var i in a1){
    console.log(i,a1[i]);//1 abc
}
console.log(0 in a1,1 in a1);// false true

var a2 = new Array(3);
console.log(a2.length);//3
console.log(a2);

//注意：
var a3 = [,,];
console.log(a3.length);//2

console.log(["a","b"].length);//2
console.log(["a","b",].length);//2


//dome06
var arr1 = [1,2,3];
arr1.reverse();//倒置
console.log(arr1);

//Array.prototype.sort(compareFunction？)
var arr2 = ["banana","apple","pear","orange"];
arr2.sort();//排序，由大到小
console.log(arr2);

//思考sort中的参数
var arr3 = [-1,-20,7,50];
arr3.sort();//负数无用
console.log(arr3);//结果是否是预计结果,如何解决

//sort传递的函数对象
arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
//arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序

//如果想让arr2按第二个字母排序，怎么写？
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);


//Part222222 合并、切分和连接 非破坏性
//Array.prototype.concat(arr1?,arr2?,...)
var arr4 = ["banana","apple"];
var arr5 = ["pear","orange"];
var newArray = arr4.concat(arr5);
console.log(newArray,arr4,arr5);

//Array.prototype.slice(begin?,end?)注意：不要和splice弄混了
var arr6 = [1,2,3,4,5];
var newArray = arr6.slice(2,4);//截取2.3
console.log(newArray,arr6);//[3, 4] [1, 2, 3, 4, 5]
var newArray2 = arr6.slice(2);
console.log(newArray2,arr6);//[3, 4, 5] 

//Array.prototype.join(separator?)
var arr7 = [3,4,5];
var joinReturn = arr7.join("--");//返回了个什么类型？
console.log(joinReturn,arr7);
console.log(typeof joinReturn);
//注意：稀疏数组调用join
console.log([3,,,,,,5].join("*"));

//Part333333333 值的查找 非破坏性
//Array.prototype.indexOf(searchValue,startIndex?)
var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//输出几？//2
console.log(arr8.indexOf(5,3));//输出几？//3
console.log(arr8.indexOf(5,5));//输出几？//6

//Array.prototype.lastIndexOf(searchElement,startIndex?)
console.log(arr8.lastIndexOf(5));//输出几？//6
console.log(arr8.lastIndexOf(5,3));//输出几？//3
console.log(arr8.lastIndexOf(5,5));//输出几？//3