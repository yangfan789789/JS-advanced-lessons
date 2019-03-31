//逻辑与、或的基本理解
console.log(2>1&&4<5);//true
console.log(true&&(!2));//false
console.log(false&&("2" == 2));//false
console.log(false&&false);//false

console.log(2>1||4<5);//true
console.log(true||(!2));//true
console.log(false||("2" == 2));//true
console.log(false||false);//false

//操作数非布尔类型，&&短路原则
console.log(2&&4);//4
console.log(0&&4);//0
console.log({x:2}&&{name:"Jack"});//{name: "Jack"}
console.log(null&&"hello");//null
console.log({}&&"world");world

//操作数非布尔类型，||短路原则
console.log(2||4);//2
console.log(0||4);//4
console.log({x:2}||{name:"Jack"});//{x:2}
console.log(null||"hello");//hello
console.log({}||"world");{}

//思考 所有对象转换为布尔类型 都为 true
console.log((new Boolean(false))&&234);//234
console.log((new Boolean(false))||234);//(new Boolean(false)

console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");