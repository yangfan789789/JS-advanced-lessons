/*
对象 instanceof 构造函数
1.判断对象是否可以使用构造函数实例化得到
2.判断在对象的原型链上能否找到构造函数的原型
对象。_proto_ == 构造函数.prototypr
*/
console.log(Object instanceof Function);//true
console.log(Object instanceof Object);//true
console.log(Boolean instanceof Function);//true
console.log(Boolean instanceof Object);//true
console.log(String instanceof Function);//true
console.log(String instanceof Object);//true
console.log(Number instanceof Function);//true
console.log(Number instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true


var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);

var o ={
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        if(0<x && x<150){
            this._x = val;
        }
        else{
            console.log("不符合要求")
        }
    }
}
o.x = 200;
console.log(o.x);