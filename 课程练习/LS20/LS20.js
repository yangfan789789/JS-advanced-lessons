//正则表达式文本/标识符、
var reg1 = /[bcf]at/gi;
var str1="bat cat fat Fat difijfi";
//i忽略大写，g全局检索
var reg1 = /[bcf]at/gi;
var reg2 = new RegExp(/[bcf]at/,"gi");
var reg2 = new RegExp("[bcf]at","gi");
var str1="bat cat fat Fat difijfi";
str1.match(reg1);
//原字符
var reg1 = /ab/gi;
var str1= "abcdefg";
str1.replace(reg1,"x");
//字符分类
/*
\b: 匹配阿拉伯数字
\D:不是数字
\w：匹配所有的字符串
\s:匹配的是空格
^m:开头
n$：结尾
*/
var reg1 = /a\b/gi;
var str1="a1bsacasc";
/* 
/////////////////////字符类别（Character Classes）
g
全局匹配;找到所有匹配，而不是在第一个匹配后停止
i
忽略大小写
m
多行; 将开始和结束字符（^和$）视为在多行上工作（也就是，分别匹配每一行的开始和结束（由 \n 或 \r 分割），而不只是只匹配整个输入字符串的最开始和最末尾处。
u
Unicode; 将模式视为Unicode序列点的序列
y
粘性匹配; 仅匹配目标字符串中此正则表达式的lastIndex属性指示的索引(并且不尝试从任何后续的索引匹配)。
\d	
匹配任意阿拉伯数字。等价于[0-9]。

例如，/\d/ 或 /[0-9]/ 匹配 "B2 is the suite number." 中的 '2'。 

\D	
匹配任意一个不是阿拉伯数字的字符。等价于[^0-9]。

例如，/\D/ 或 /[^0-9]/ 匹配 "B2 is the suite number." 中的 'B'。

\w	
匹配任意来自基本拉丁字母表中的字母数字字符，还包括下划线。等价于 [A-Za-z0-9_]。

例如，/\w/ 匹配 "apple" 中的 'a'，"$5.28" 中的 '5' 和 "3D" 中的 '3'。

\W	
匹配任意不是基本拉丁字母表中单词（字母数字下划线）字符的字符。等价于 [^A-Za-z0-9_]。

例如，/\W/ 或 /[^A-Za-z0-9_]/ 匹配 "50%" 中的 '%'。

\s	
匹配一个空白符，包括空格、制表符、换页符、换行符和其他 Unicode 空格。

等价于 [ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​ \u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​​\u202f\u205f​ \u3000]。

例如 /\s\w(*)/ 匹配 "foo bar" 中的 ' bar'。

\S	
匹配一个非空白符。等价于 [^ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​ \u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u202f\u205f​\u3000]。

例如，/\S\w(*)/ 匹配 "foo bar" 中的 'foo'。

\t	匹配一个水平制表符（tab）
\r	匹配一个回车符（carriage return）
\n	匹配一个换行符（linefeed）
\v	匹配一个垂直制表符（vertical tab）
\f	匹配一个换页符（form-feed）
[\b]	匹配一个退格符（backspace）（不要与 \b 混淆）
\0	匹配一个 NUL 字符。不要在此后面跟小数点。
\cX	
X 是 A - Z 的一个字母。匹配字符串中的一个控制字符。

例如，/\cM/ 匹配字符串中的 control-M。

\xhh	匹配编码为 hh （两个十六进制数字）的字符。
\uhhhh	匹配 Unicode 值为 hhhh （四个十六进制数字）的字符。
\	
对于那些通常被认为字面意义的字符来说，表示下一个字符具有特殊用处，并且不会被按照字面意义解释。

例如 /b/ 匹配字符 'b'。在 b 前面加上一个反斜杠，即使用 /\b/，则该字符变得特殊，以为这匹配一个单词边界。

或

对于那些通常特殊对待的字符，表示下一个字符不具有特殊用途，会被按照字面意义解释。
*/



/* 
///////////////////////////////字符集合（Character Sets）
[xyz]	
一个字符集合，也叫字符组。匹配集合中的任意一个字符。你可以使用连字符'-'指定一个范围。

例如，[abcd] 等价于 [a-d]，匹配"brisket"中的'b'和"chop"中的'c'。


*/

/* 
/////////////////////////////////边界（Boundaries）
^	
匹配输入开始。如果多行（multiline）标志被设为 true，该字符也会匹配一个断行（line break）符后的开始处。

例如，/^A/ 不匹配 "an A" 中的 "A"，但匹配 "An A" 中的 "A"。

$	
匹配输入结尾。如果多行（multiline）标志被设为 true，该字符也会匹配一个断行（line break）符的前的结尾处。

例如，/t$/ 不匹配 "eater" 中的 "t"，但匹配 "eat" 中的 "t"。

\b	
匹配一个零宽单词边界（zero-width word boundary），如一个字母与一个空格之间。 （不要和 [\b] 混淆）

例如，/\bno/ 匹配 "at noon" 中的 "no"，/ly\b/ 匹配 "possibly yesterday." 中的 "ly"。

\B	
匹配一个零宽非单词边界（zero-width non-word boundary），如两个字母之间或两个空格之间。

例如，/\Bon/ 匹配 "at noon" 中的 "on"，/ye\B/ 匹配 "possibly yesterday." 中的 "ye"。

*/

/* 
//////////////////////////////////////分组（Grouping）与反向引用（back references）
(x)	
匹配 x 并且捕获匹配项。 这被称为捕获括号（capturing parentheses）。

\n	
n 是一个正整数。一个反向引用（back reference），指向正则表达式中第 n 个括号（从左开始数）中匹配的子字符串。

*/

/* 
///////////////////////////数量词（Quantifiers）
//x*	
匹配前面的模式 x 0 或多次。

例如，/bo（*)/ 匹配 "A ghost booooed" 中的 "boooo"，"A bird warbled" 中的 "b"，但是不匹配 "A goat grunted"。

x+	
匹配前面的模式 x 1 或多次。等价于 {1,}。

例如，/a+/ 匹配 "candy" 中的 "a"，"caaaaaaandy" 中所有的 "a"。

//x*?
x+?	
像上面的 * 和 + 一样匹配前面的模式 x，然而匹配是最小可能匹配。

例如，/".*?"/ 匹配 '"foo" "bar"' 中的 '"foo"'，而 * 后面没有 ? 时匹配 '"foo" "bar"'。
*/

