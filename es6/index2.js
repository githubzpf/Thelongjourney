//字符串的扩展


//字符串for ... of 遍历
// for ( let n of "sdf") {
//     console.log(n) // s d f
// }


// 传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。
// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。

// let str = "hello word"
// console.log(str.includes("llo")) //true
// console.log(str.startsWith("hel")) //true
// console.log(str.endsWith("ord")) //true

//第二个参数表示开始搜索的位置
// console.log(str.includes("llo",2)) //true  针对从第n个位置直到字符串结束
// console.log(str.startsWith("hel",0)) //true  针对从第n个位置直到字符串结束
// console.log(str.endsWith("ord",10)) //true  针对前n个字符



// repeat()
// repeat方法返回一个新的字符串，表示将原字符重复n次

// let str = "a"

// console.log(str.repeat(3)) // "aaa"
// console.log(str.repeat(0)) // ""
// console.log(str.repeat(3.8)) // "aaa"

// 'na'.repeat(Infinity)
// RangeError
// 'na'.repeat(-1)
// RangeError

// 参数是 0 到-1 之间的小数，则等同于 0  NaN亦等同于0

// console.log(str.repeat(-0.6)) // ""
// console.log(str.repeat(NaN))  // ""

//repeat的参数是字符串，则会先转换成数字。
// console.log(str.repeat("da")) // ""
// console.log(str.repeat("3")) // "aaa"



//padStart()用于头部补全，padEnd()用于尾部补全。

// let a = "xx"

// console.log(a.padStart(5, "sss")) // "sssxx"
// console.log(a.padEnd(5, "sss")) // "xxsss"
// console.log(a) //"xx"

//原字符串的长度，等于或大于指定的字符串的长度，返回原字符串
// console.log("aa".padStart(2, "sfgsfd")) // "aa"
// console.log("aa".padEnd(2, "sfgs")) // "aa"

//如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。
// console.log("abc".padEnd(10,"0123456789")) // "abc0123456"

//如果省略第二个参数，默认使用空格补全长度。
// console.log("aa".padStart(5)) // "   aa"

// padStart的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。

// '1'.padStart(10, '0') // "0000000001"
// '12'.padStart(10, '0') // "0000000012"
// '123456'.padStart(10, '0') // "0000123456"

// 另一个用途是提示字符串格式。

// '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
// '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"



// console.log(`string text line 1
// string text line 2`);

//在模板字符串中需要使用反引号，则前面要用反斜杠转义。
// let aaa = `\`Yo\` World!`;
// console.log(aaa)

//模板字符串中嵌入变量，需要将变量名写在${}之中。
// let a = "first", b = "second"
// $("#list").html(`
// <ul>
//   <li>${a}</li>
//   <li>second</li>
// </ul>
// `)

//大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。

// let x = 1;
// let y = 2;

// `${x} + ${y} = ${x + y}`
// "1 + 2 = 3"

// `${x} + ${y * 2} = ${x + y * 2}`
// "1 + 4 = 5"

// let obj = {x: 1, y: 2};
// `${obj.x + obj.y}`
// "3"

//模板字符串之中还能调用函数
// function a() {
//     return "sdgs"
// }

// console.log(`ccc ${a()} vvv`) // "ccc sdgs vvv"

// 模板字符串中的变量没有声明，将报错。
// 变量place没有声明
// let msg = `Hello, ${place}`;
// 报错

//大括号内部是一个字符串，将会原样输出。
//console.log(`hello ${'word'}`) // "hello word"

// let str = "return " + "`hello ${name}`"
// let fnc = new Function("name", str)
// // console.log(fnc("jack")) // "hello jack"
// console.log(str) // "return `hello ${name}`"
// console.log(fnc()) // "hello undefined"

// let str = "(name) => `hello ${name}!`";
// let fun = eval.call(null, str)

// console.log(fun("jack")) // "hello jack!"


// alert`123`
// 等同于
// alert(321)

// let a = 5
// let b = 8
// function tag(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// tag`hello ${a + b} word ${a * b}`

// tag函数所有参数的实际值如下。

//     第一个参数：['Hello ', ' world ', '']
//     第二个参数: 15
//     第三个参数：50
