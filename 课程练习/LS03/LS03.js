//js13

var n1 = 12345.6789;
console.log(n1.toFixed(2));//12345.68
console.log(n1.toPrecision(2));//1.2e+4
console.log(n1.toString());//12345.6789
console.log(n1.toExponential(2));//1.23e+4

//
console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true
console.log(Math.floor(3.8));//3
console.log(Math.floor(-3.8));//-4
console.log(Math.ceil(3.2));//4
console.log(Math.ceil(-3.2));//-3
console.log(Math.round(-3.2));//-3
console.log(Math.round(-3.5));//-3
console.log(Math.round(-3.8));//-4

//js14
var str1 = "aaa".concat("bbb");//concat链接 aaabbb
var str2 = "abcdef".slice(2);//slice返回数字之外的字符 cdef
var str3 = "abcdef".slice(2,5);//cde 包含2不包含5
var str4 = "abcdef".slice(-2);//ef，包含-2
var str5 = "abcdef".slice(2,-2);//cd，不包含-2
var str6 = "abcdef".split("c");//["ab","def"]
var str7 = "abcdef".split("c",1);//["ab"]
var str8 = "abcdef".split("c",2);//["ab","def"]
var str9 = "abcdef".charAt(2);//c
var str10 = "abcdefabcdef".indexOf("d",1);//3
var str11 = "abcdefabcdef".indexOf("d",4);//9 返回d从第四个字符第一次出现的位置
var str12 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串 abc def
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度 cdefg
var str15 = str13.substring(2,5);//后一个参数代表第几个end cde

var arr2 = ['a','b','c'];
var arr3 = arr2.slice(1,2);//并不破坏arr2
console.log(arr3);//["b"]

var arr4 = ['m','n'];
var pushReturn = arr4.push('o');
console.log(pushReturn);//push后数组的长度 3
console.log(arr4);//["m", "n", "o"]

var popReturn =arr4.pop();//最后一个
console.log(popReturn);//pop出的元素 o
console.log(arr4);//["m", "n"]

var arr5 = [1,2,3,4];
var shiftReturn = arr5.shift();//前第一个
console.log(shiftReturn);//shift移除的元素
console.log(arr5);//[2, 3, 4]

var unshiftReturn = arr5.unshift(0);//替换
console.log(unshiftReturn);//unshift后数组的长度
console.log(arr5);//[0, 2, 3, 4]