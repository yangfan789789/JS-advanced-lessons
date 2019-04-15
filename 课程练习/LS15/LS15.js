//使用3种方式来创建对象

//通过字面量的方式创建 JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);//10   
console.log(obj.str);//Hi
console.log(obj.show());//Hi

//通过Object工场方法创建JS对象,注：JS对象是通过原型链的方式实现的对象继承
var newObj = Object.create(obj);
newObj.age = 23;
console.log(newObj.num);//10
console.log(newObj.str);//Hi
console.log(newObj.show());//Hi
console.log(newObj.age);//自有属性

//构造函数的方式创建JS对象
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};

var person1 = new Person("Mike",21);
person1.sayName();

//////////////////////////////////////////////////

var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.__proto__ === Object.prototype);//true

var newObj = Object.create(obj);
var newObj2 = Object.create(obj);
newObj.age = 23;

console.log(newObj.__proto__ === obj);//true
console.log(newObj2.__proto__ === obj);//true

//JavaScript的继承方式 是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null

////////////////////////////////////////

var proObj = {
    z:3
};

var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

////////////////原型链属性操作

obj.z = 5;

console.log(obj.hasOwnProperty("z"));//true
console.log(obj.z);
console.log(proObj.z);

obj.z = 8;
console.log(obj.z);


delete obj.z;
console.log(obj.z);

delete obj.z;
console.log(obj.z);//still 3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//此时彻底没有z了

//注意：hasOwnProperty是原型方法

