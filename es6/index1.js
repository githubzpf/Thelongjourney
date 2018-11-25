
// let const  Set  变量的解构赋值



// var a = [];
// for (var i = 0;i < 10;i++){
//     a[i] = function() {
//         console.log(i)
//     };
// }
// a[6]() //10

// for(let i = 0;i < 10;i++){
//     a[i] = function() {
//         console.log(i)
//     }
// }
// a[6]()




// console.log(f) //undefined
// if(false){
//     var f= "csd"
// }
// console.log(f) //undefined

// console.log(f) //报错
// if(false){
//     let f= "csd"
// }




// var s = 'hello';

// for (var i = 0; i < s.length; i++) {
//   console.log(s[i]);
// }

// console.log(i); // 5



// function bar(y = 2, x = y) {
//     return [x, y];
// }
// console.log(bar());

// if(true){
//     let aa = 10
//     if(true){
//         let aa = 2
//         console.log(aa) //2
//     }
//     console.log(aa)  //10
// }



// var a = 10;
// console.log(window.a); // 10

// let b = 20;
// console.log(window.b); // undefined



// new set()方法
// ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

// Set本身是一个构造函数，用来生成Set数据结构。

// 与WeakSet区别
// WeakSet的成员只能是对象，而不能是其他类型的值。
// WeakSet是不可遍历的


// var s = new Set();
// [2,3,2,4,5,4,5,6,5,3,2].map(x => s.add(x));
// console.log(typeof s); // object


// add(value)：添加某个值，返回Set结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值。
// size(): 返回长度；WeakSet没有该属性，没办法遍历

// for (let i of s) {
//   console.log(i);
// }
// console.log(Array.from(s)) //[2,3,4,5,6]
// let [...arr] = [...s]
// console.log(arr) //[2,3,4,5,6]
// console.log(...s) //2 3 4 5 6
// console.log(s.size) //5
// console.log(s)
// console.log(s.length) //undefined
// 去除数组的重复成员
// [...new Set(array)]

// console.log(s.delete(2)) //true
// console.log(s.has(2))
// s.clear()

// Set结构的实例有四个遍历方法，可以用于遍历成员。

//     keys()：返回一个键名的遍历器
//     values()：返回一个键值的遍历器
//     entries()：返回一个键值对的遍历器
//     forEach()：使用回调函数遍历每个成员
// key方法、value方法、entries方法返回的都是遍历器对象。由于Set结构没有键名，只有键值（或者说键名和键值是同一个值），所以key方法和value方法的行为完全一致。
// let set = new Set(["red","blue","green","red"])

// for(let item of set.keys()){
//     console.log(item) //red blue green
// }

// for(let item of set.values()){
//     console.log(item) //red blue green
// }

// for (let item of set.entries()){
//     console.log(item) // ["red", "red"] ["blue", "blue"] ["green", "green"]
// }

// set.forEach((item,index,arr) => {console.log(item + "..." + index);console.log(arr)})//red...red set本身...
// for (let item of set){
//     console.log(item) //red blue green
// }



// let [a = 2] = [] //指定默认值
// console.log(a) //2

// let [a = 2] = [5] 
// console.log(a) //5

// let [a = 2] = [undefined] //指定默认值
// console.log(a) //2   ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。

// let [a = 2] = [null]
// console.log(a) //null


// function a () {
//     console.log(111)
// }

// let [s = a] = [1]
// console.log(s)//1

// let [x = a] = [undefined]
// console.log(x) //返回函数a

//等价于
// let x;

// if([1][0] == "undefined") {
//     x = a()
// } else {
//     x = [1][0]
// }
// console.log(x)


// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。

// let [x = 1, y = x] = []  //x = 1, y = 1
// let [x = 1, y = x] = [2] //x = 2, y = 2
// let [x = 1, y = x] = [3, 4] //x = 3, y = 4
// let [x = y, y = 1] = [];     // ReferenceError: y is not defined



//对象的解构赋值
// let {a,b} = {a:"aaa",b:"bbb",a:"aaa2"}; //a:"aaa" b:"bbb"
// console.log(a) //"aaa2"

// let {a: q,b: w} = {a: "aaa",b: "bbbb"}
// console.log(q) //"aaa"  真正被赋值
// console.log(a) //报错

// let obj = {
//     p: [
//         "hello",
//         {y: "word"}
//     ]
// };
// // let {p:[x,{y}]} = obj //x:"hello"  y:"word"

// let { p, p: [x, { y }] } = obj //x:"hello"  y:"word" 
// console.log(p) // ["Hello", {y: "World"}]


// const node = {
//     a: {
//         b: {
//             c: 1,
//             d: 2
//         }
//     }
// };
// let {a, a: { b }, a: { b: { c } }} = node
// console.log(a) // {b: {c: 1, d: 2}} 模式
// console.log(b) // {c: 1, d: 2} 模式
// console.log(c) // 1 变量


//字符串的解构赋值
// const [a,b,c,d] = "hello"
// console.log(a) //h
// console.log(b) //e
// console.log(c) //l
// console.log(d) //l

// let {length: len} = "dsgadf"
// console.log(len) //6

//数值与布尔值的解构赋值
// let {toString: a} = 123
// console.log(a === Number.prototype.toString) //true

// let {toString: a} = true
// console.log(Boolean.prototype.toString === a) //true

//解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
// let { prop: x } = undefined; // 报错
// let { prop: y } = null; // 报错


//函数参数的解构与赋值

// function add([x,y]){
//     return x + y
// }
// console.log(add([5,3]))

// [[1,2],[3,4]].map(([x,y]) => {console.log(x + y)}) //3   7

//默认值
// function move({x = 0, y = 0} = {}){
//     console.log(x, y)
// }
// move({x: 3, y: 8}) //3  8
// move({x: 3}) //3  0
// move({}) // 0  0
// move() // 0 0

// function move({x, y} = {x : 0, y : 0}){
//     console.log(x, y)
// }
// move({x: 3, y: 8}) //3  8
// move({x: 3}) //3  0
// move({}) //undefined  undefined
// move() // 0  0

// [1, 2, 3].map((x = "hello") => {console.log(x)}) //1 2 3
// [1, "undefined", 3].map((x = "hello") => {console.log(x)}) //1 undefined 3
// [1, undefined, 3].map((x = "hello") => {console.log(x)}) //1 hello 3

//可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。

// [(b)] = [3]; // 正确
// console.log(b)  //3
// ({ p: (d) } = {}); // 正确
// [(parseInt.prop)] = [3]; // 正确

// function example() {
//   return [1, 2, 3];
// }
// let [a, b, c] = example();
//console.log(a) // 1

// function example() {
//     return {
//       foo: 1,
//       bar: 2
//     };
//   }
//   let { foo, bar } = example();
//   console.log(foo) // 1

// function f([a, b, c]) {
//     console.log(a, b, c)
// }
// f([1,2,3]) //1  2  3

// function f({a, b, c}) {
//     console.log(a, b, c) //1  2  3
// }
// f({a: 1, c: 3, b: 2})

// let jsonData = {
//     id: 42,
//     status: "OK",
//     data: [867, 5309]
//   };
  
//   let { id, status, data: number } = jsonData;
  
//   console.log(id, status, number);
// 42, "OK", [867, 5309]

//遍历map结构
// const map = new Map()
// map.set("first", "hello")
// map.set("second", "word")
// console.log(map)

// for(let [key, value] of map){
//   console.log(key + "is" + value)
// }

// for(let arr of map) {
//   console.log(key) //["first", "hello"]  ["second", "word"]
// }

//获取键名
// for (let [key] of map) {
//   console.log(key) //first  second
// }

//获取键值
// for(let [,value] of map) {
//   console.log(value) //hello  word
// }





// let arr = [2, 8, 9, 3];
// let {max} = Math;
// console.log(max.apply(this, arr));


// [[1, 2], [3, 4]].map(([a, b]) => console.log(a + b)); // 3 7


var tmp = 123;
if (true) {
    console.log(tmp);
    let tmp = 566
}