
var obj = {x:1};
Object.defineProperty(obj,"y",{
    writable:true,//可写
    enumerable:true,//可读
    configurable:true,//可配置
    value:2
})
Object.defineProperty(obj,{
    x :{
        writable:true,//可写
        enumerable:true,//可读
        configurable:true,//可配置
        value:2
    },
    y:{},
    z:{
        get(){
            return this._z;
        },
        set(val){
            this._z=val;
        }
    }//访问器属性
})
Object.getOwnPropertyDescriptor(obj,"x");//对象描述符


var o1 = {x:1};
var o2 = Object.create(o1);
console.log(o2.__proto__ == o1);
o2.x=2;
delete o2.x;
o2.__proto__.x = 3;
console.log(o1.x);
console.log(o2.x);

var obj ={x:1}; 
console.log(obj.__proto__==Object.prototype);
console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);//对象的原型链尽头：obj.__proto__

var objProto = {
    z:3
};

var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log(obj.toString);//原型链上有toString属性

for(var k in obj){
    console.log(k,obj[k]);//无toString
}

var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}
//如果只更改writable特性的话，enumerable特性不会被修改
//[[Configurable]]：描述属性是否可以被删除，特性是否可以被改变，或是否可以被修改为访问器属性。
//[[Enumerable]]：描述属性是否可以被遍历。
//[[Writable]]：描述属性是否是可写的。
//[[Value]]：属性值就保存在此位置，读取或者写入属性均操作此处。

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Mike
delete person.name;
console.log(person.name);//Mike


var obj2={
    _name:"Lucy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);//Lucy_hihi
obj2.name="jack";
console.log(obj2.name);//jack_haha_hihi


/////////////////////////////////////////////
 

var obj = {
    num:10,
    str:"Hi",
    show:function(){
        console.log(this.str);
    }
};
var subObject = Object.create(obj);
console.log(subObject._proto_==obj);
console.log(obj.num);//10
console.log(obj.str);//Hi
obj.show();			 //Hi


function Person(usename,age){
    this.usename = usename;
    this.age = age;
    // this.sayHi =function(){
    //     console.log(whis.usename);
    // }
}
Person.prototype.sayHi = function(){
    console.log(whis.usename);
}//共有，节省空间
var Person1 = new Person("zhangsan",20);
var Person2 = new Person("lisi",20);
console.log(Person1._proto_ == Person.prototype);
//////////////////////////////////////////////////////////

var obj ={x:1};
var z ="age";
obj.z =20;
// obj[z] = 20;
console.log(obj);
// obj.y=2;
// obj["y"]=3;//通用性更好些
for(var i in obj){
    console.log(i,obj9[i]);
}

delete obj.x;//删除对象的属性




var objProto = {
    z:3
};

var obj = Object.create(objProto);//原型
obj.x = 1;
obj.y = 2;
console.log(obj.x); //1
console.log(obj.y); //2
console.log(obj.z); //3
console.log(obj.toString);//原型链上有toString
for(var k in obj){ //可以通过for...in遍历所有属性
    console.log(k,obj[k]);//是否能遍历到toString？
}
///////////////////////////////////////////////////

var obj ={
    x:1,
    y:2
};
Object.defineProperty (obj,"x",{enumerable:false,configurable:true,writable:true,value:"mike",
get:function(){
    return this.usename;
},
set:function(art){
    this.usename=art;
}
});
for(var k in obj){
    console.log(k,obj[k]);
}