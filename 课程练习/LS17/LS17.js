function Person(name){
    this.name=name;
}
Person.prototype.age=22;
Person.prototype.showName=function(){
    console.log(this.name);
}
function Student(is){
    this.id=id;
}
Student.prototype=new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);
console.log(s1.id);
console.log(s1.name,s2.name);
//s1.__proto__==student.prototype
//student.prototype=person
//person.__proto__==person.prototype
//s1.__proto__.__proto__==peoson.prototype
console.log(s1.age,s2.age);

function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.showName=function(){
    console.log(this.name);
}
function Student(name,age,id){
    Person.call(this,name,age);
    this.id=id;
}
Student.prototype.__proto__=Person.prototype;
var s1 =new Student("xxx",22,2017001);
var s2 =new Student("www",23,2017002);

function Animal(name,weight){
    this.name=name;
    this.weight=weight;
}
Animal.prototype.run = function(){
    console.log(this.name+"can run");
}
function Bird(name,weight,color,height){
    Animal.call(this,name,weight);
    this.color=color;
    whis.height=height;
}
Bird.prototype.__proto__=Animal.prototype;
var b1=new Bird("fff",20,"green",40);
var b2=new Bird("ggg",30,"block",30);
b1.run;

var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;//若此行写为subObj_First.x = 5;结果又是如何？
console.log(subObj_Second.x);

//静态方法实例与原型方法实例
var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function(){//定义静态方法
    console.log("This is a static method ");
};
BaseClass.f1();//This is a static method
var instance1 = new BaseClass();
instance1.f2();//This is a prototype method


//思考下述案例 实例方法 原型方法
var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1 This is a method in Base.prototype");
};
var instance1 = new BaseClass();
instance1.method1();//1 This is a method in Base.prototype


instance1.method1 = function(){
    console.log("2 This is a method in instance1");
};
instance1.method1();//2 This is a method in instance1

// 1 确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);

// 2 创建相似对象
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);

// 3 constructor可用于指定构造函数
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); //function person()
console.log(Father.prototype.constructor); //function person()
Father.prototype.constructor = Father;     //修正constructor指向
console.log(Father.prototype.constructor); //function father()
var one = new Father(25);


//Part2 公有属性、私有属性、特权方法
function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);
// console.log(a.privateId);
a.getId();


//思考哪些是true，哪些是false
function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){}
// Person.prototype = { //测试如果更改了Person.prototype输出又会变成什么?
// 	getName:function(){}
// }
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype);//true
console.log(p.__proto__ === p.constructor.prototype);//true
console.log(Object.prototype === p.constructor.prototype);//false
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);//false
console.log(({getName:function(){}}).__proto__ === Object.prototype);//true