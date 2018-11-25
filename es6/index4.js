//数组的扩展

// 扩展运算符后面还可以放置表达式。

// const arr = [
//   ...(x > 0 ? ['a'] : []),
//   'b',
// ];



// 如果扩展运算符后面是一个空数组，则不产生任何效果。

// [...[], 1]
// [1]



//代替函数apply方法

//es5

// function fn(x, y, z) {
//     console.log(x + y + z)
// }
// var arr = [1, 2, 3]
// fn.apply(null, arr) // 6


// es6

// function fn(x, y, z) {
//     console.log(x + y + z)
// }
// var arr = [1, 2, 3]
// fn(...arr) // 6




//求数组最大值

// let arr = [1, 9, 6]

// console.log(Math.max.apply(null, arr))

// console.log(Math.max(...arr))



//将一个数组添加到另一个数组的尾部

// let arr = [1, 2, 3]
// let brr = [7, 8, 9]

//es5

// console.log(Array.prototype.push.apply(arr, brr)) //6 返回新数组的长度
// console.log(arr) //[1, 2, 3, 7, 8, 9]

//es6

// arr.push(...brr)
// console.log(arr) //[1, 2, 3, 7, 8, 9]



//console.log(new Date(...[2015, 1, 1])) // Sun Feb 01 2015 00:00:00 GMT+0800 (中国标准时间)




//复制数组

// const a1 = [1, 2];
// const a2 = a1;

// a2[0] = 2;
// a1 // [2, 2]

// 上面代码中，a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化。

//es5用变通方法来复制数组

// let arr = [2, 3, 5]

// let brr = arr.concat(0) // [2, 3, 5]
// brr[0] = 9
// brr // [9, 3, 5]


// es6复制数组

// const a1 = [1, 2]
// const a2 = [...a1]
// const [...a2] = a1



//合并数组

// var a1 = ["a", "c", "v"]
// var a2 = ["d", "f", "g"]
// var a3 = ["t", "p", "k"]

// //es5

// var a4 = a1.concat(a2, a3)
// console.log(a4) //  ["a", "c", "v", "d", "f", "g", "t", "p", "k"]

// // es6

// var a5 = [...a1, ...a2, ...a3]
// console.log(a5) // ["a", "c", "v", "d", "f", "g", "t", "p", "k"]


//与解构赋值结合

// const [first, ...rest] = [1, 2, 3, 4, 5];
// first // 1
// rest  // [2, 3, 4, 5]

// const [first, ...rest] = [];
// first // undefined
// rest  // []

// const [first, ...rest] = ["foo"];
// first  // "foo"
// rest   // []

// const [...butLast, last] = [1, 2, 3, 4, 5];
// 报错

// const [first, ...middle, last] = [1, 2, 3, 4, 5];
// 报错




// 字符串


//将字符串转化为数组

// var str = "hello"

// let arr = [...str]

// console.log(arr) // ["h", "e", "l", "l", "o"]





// let nodeList = document.querySelectorAll('div');
// let array = [...nodeList];
// console.log(nodeList) // NodeList(5) [div#list, div, div, div, div]
// console.log(array) // [div#list, div, div, div, div]

// 上面代码中，querySelectorAll方法返回的是一个nodeList对象。它不是数组，而是一个类似数组的对象。这时，扩展运算符可以将其转为真正的数组，原因就在于NodeList对象实现了 Iterator 。



// 对于那些没有部署 Iterator 接口的类似数组的对象，扩展运算符就无法将其转为真正的数组。


// let arrayLike = {
//   '0': 'a',
//   '1': 'b',
//   '2': 'c',
//   length: 3
// };

// let arr = [...arrayLike]; // TypeError: Cannot spread non-iterable object.

// let arr = Array.from(arrayLike)

// console.log(arr) // ["a", "b", "c"]

// 上面代码中，arrayLike是一个类似数组的对象，但是没有部署 Iterator 接口，扩展运算符就会报错。这时，可以改为使用Array.from方法将arrayLike转为真正的数组。




//Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

//Array.from(arrayLike, x => x * x);
// 等同于
//Array.from(arrayLike).map(x => x * x);

//Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]



//取出一组 DOM 节点的文本内容。

// let spans = document.querySelectorAll("span.name")

// //map()

// let names1 = Array.prototype.map.call(spans, s => s.textContent)

// console.log(names1)  //  ["xds", "sdg"]


// //es6

// let names2 = Array.from(spans, x => x.textContent)

// console.log(names2)  // ["xds", "sdg"]




//将数组中布尔值为false的成员转为0。

//console.log(Array.from([, 1, 5, , , 6], n => n || 0))


//返回各种数据的类型

// function typeofs() {
//     return Array.from(arguments, x => typeof(x))
// }
// console.log(typeofs(null, [], NaN)) // object object 



//Array.from()可以将各种值转为真正的数组，并且还提供map功能。

// let arr = Array.from({length: 3}, () => "aaa")

// console.log(arr) // ["aaa", "aaa", "aaa"]





// Array.of()  用于将一组值转化为数组



// console.log(Array.of()) // []
// console.log(Array.of(3)) // [3]


// 这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。

// Array() // []
// Array(3) // [, , ,]
// Array(3, 11, 8) // [3, 11, 8]


// Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。

// Array.of() // []
// Array.of(undefined) // [undefined]
// Array.of(1) // [1]
// Array.of(1, 2) // [1, 2]

// Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组。

// Array.of方法可以用下面的代码模拟实现。

// function ArrayOf(){
//   return [].slice.call(arguments);
// }




// 数组实例的copyWithin()


//copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组,会修改当前数组


// 它接受三个参数。

//     target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
//     start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
//     end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。


// 将3号位复制到0号位
// [1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
// [1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// [4, 2, 3, 4, 5]

// 将3号位复制到0号位
// [].copyWithin.call({length: 5, 3: 1}, 0, 3)
// {0: 1, 3: 1, length: 5}

// 将2号位到数组结束，复制到0号位
// let i32a = new Int32Array([1, 2, 3, 4, 5]);
// i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// 对于没有部署 TypedArray 的 copyWithin 方法的平台
// 需要采用下面的写法
// [].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]





// 数组实例的find()和findIndex()

//数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。

// let n = [1, 5, -8, 6, 58].find(x => x < 0)
// console.log(n) // -8

// let s = [1, 5, -8, 6, 58].find(x => x < -50)
// console.log(s) // undefined


//find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。

// let n = [1, 33, 5, -8, 6, 58].find((value, index, arr) => {
//     console.log(value)
//     console.log(index)
//     console.log(arr)
//     return value > 20
// })
// console.log(n)  // 33



//数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。


// let n = [1, 5, -8, 6, 58].findIndex(x => x < 0)
// console.log(n) // 2

// let s = [1, 5, -8, 6, 58].findIndex(x => x < -50)
// console.log(s) // -1



// 这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。

// function f(v) {
//     return v > this.age
// }
// let person = {name: "lihua", age: "33"}
// let x = [1, 56, 2, 555].find(f, person)
// console.log(x) // 56

//上面的代码中，find函数接收了第二个参数person对象，回调函数中的this对象指向person对象。



//这两个方法都可以发现NaN，弥补了数组的indexOf方法的不足。

// [NaN].indexOf(NaN)
// -1

// console.log([0, 6, NaN].findIndex(y => Object.is(NaN, y))) // 2




//数组实例的fill()

// 使用给定值来填充一个数组，用于空数组的初始化非常方便。数组中已有的元素会被全部抹去；
// 接收3个参数，第一个参数为指定值，第二个参数和第三个参数指定填充的起始位置和结束为止，如果省略则默认从开始到结束


// let arr = [1, 2, 3]

// arr.fill("a")

// console.log(arr)  // ["a", "a", "a"]

// arr.fill("b", 2, 3)

// console.log(arr) // ["a", "a", "b"]



//注意，如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。

// let arr = new Array(3).fill({name: "wang"})
// arr[0].name = "zhang"
// console.log(arr) // [{name: "zhang"}, {name: "zhang"}, {name: "zhang"}]

// let brr = new Array(3).fill([])
// brr[0].push([3])
// console.log(brr) // [[3], [3], [3]]




//  数组实例的entries() keys() values()


// for (let v of ["a", "b"].keys()) {
//     console.log(v) // 0 1
// }


// for (let elem of ['a', 'b'].values()) {
//     console.log(elem); // 报错 ，火狐与谷歌暂时不支持  
// }


// for (let [index, elem] of ['a', 'b'].entries()) {
//     console.log(index, elem);  //   0: "a"  1: "b"
// }



//let arr = [1, 2, 3, 4]

//返回布尔值，第二个参数表示搜索的起始位置，默认为0。

// console.log(arr.includes(1)) //true
// console.log(arr.includes(8)) //false
//console.log(arr.includes(2,1)) //true
//console.log(arr.includes(2,3)) //false



// let arr = [undefined, undefined, undefined]

// let brr = [ , , ,]

// console.log(1 in arr) //true

// console.log(1 in brr) //false



// let crr = ["a", , "b"]

// crr.forEach(function(item, i){
//     // console.log(item) // a b
//     //console.log(i) // 0 2
// })



// let drr = crr.filter(function(x) {
//     return true
// })

// console.log(drr) // ["a", "b"]




// every方法

// let a = [,"a"]
// console.log(a.every(x => x==='a')) // true

// // reduce方法
// [1,,2].reduce((x,y) => return x+y) // 3

// // some方法
// [,'a'].some(x => x !== 'a') // false

// // map方法
// [,'a'].map(x => 1) // [,1]

// // join方法
// [,'a',undefined,null].join('#') // "#a##"

// // toString方法
// [,'a',undefined,null].toString() // ",a,,"