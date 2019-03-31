function test1() {
    console.log("this is",this);
}
test1();//window

//思考嵌套的情况下
function test2() {
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();//window

var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();


////////////////////////////////////////////////////////
//间接调用 实例一 间接调用的对象要和原对象之间，在数据结构上有对应的相似处，以便不影响调用效果
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB

//间接调用 实例二 
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);
//swim.call(null,1,2);
///////////////////////////////////////////////////
function test() {
    console.log(arguments);
    console.log(test.arguments==arguments,arguments);
    console.log(arguments.length);
	console.log(typeof arguments);
	console.log(arguments instanceof Array);//false
	console.log(arguments instanceof Object);
    console.log(Array.prototype.slice.call(arguments));
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");//"hello,world!"
/////////////////////////////////////////////////////
//值传递
var a = 1;
function foo(x) {
    console.trace("a:",a," x:",x);
    x = 2;//step 2222
    console.trace("a:",a," x:",x);//step 3333
}

console.trace("a:",a);
foo(a);// step 1111
console.trace("a:",a); // step 4444  a仍为1



//引用传递
var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x);
    o.x = 3;// step 2222
    console.trace("obj.x :",obj.x," o.x :",o.x);// step 3333
}

console.trace("obj.x :",obj.x);
fee(obj);// step 1111
console.trace("obj.x :",obj.x);//step 4444  obj.x被改写为3
/////////////////////////////////////////////////////