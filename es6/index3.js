//函数的扩展


// function p(x, y) {
//     // y = y || "word";

//     if (typeof y === "undefined") {
//         y = "word"
//     }
//     console.log(x,y)
// }

// p("a") //a word
// p("a", "b") // a b
// p("a", "") // a word || a


// function P(x = 0, y = 0) {
//     this.x = x;
//     this.y = y
// }

// const p = new P()
// console.log(p) // {x: 0, y: 0}


// 参数变量是默认声明的，所以不能用let或const再次声明。

// function foo(x = 5) {
//   let x = 1; // error
//   const x = 2; // error
// }


// 使用参数默认值时，函数不能有同名参数。

// 不报错
// function foo(x, x, y) {
//   // ...
// }

// 报错
// function foo(x, x, y = 1) {
//   // ...
// }
// SyntaxError: Duplicate parameter name not allowed in this context


//参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
// let a = 5
// function x(n = a + 1) {
//     console.log(n)
// }
// x() // 6
// a = 10 // 11
// x()


// function fn({x, y = 5}) {
//     console.log(x, y)
// }

// fn({}) // undefined 5
// fn({x: 1, y: 2}) // 1 2
// fn({x: 1}) // 1 5
// fn() //报错

// function fn({x, y = 6} = {}) {
//     console.log(x, y)
// }
// fn() // undefined 6


// function fetch(url, { body = '', method = 'GET', headers = {} }) {
//     console.log(method);
//   }
  
//   fetch('http://example.com', {})
//   // "GET"
  
//   fetch('http://example.com')
//   // 报错

// function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
//     console.log(method);
//   }
  
//   fetch('http://example.com')
  // "GET"


// function m1({x = 0, y = 0} = {}) {
//   return [x, y];
// }

// // 写法二
// function m2({x, y} = { x: 0, y: 0 }) {
//   return [x, y];
// }

// m1() // [0, 0]
// m2() // [0, 0]

// // x 和 y 都有值的情况
// m1({x: 3, y: 8}) // [3, 8]
// m2({x: 3, y: 8}) // [3, 8]

// // x 有值，y 无值的情况
// m1({x: 3}) // [3, 0]
// m2({x: 3}) // [3, undefined]

// // x 和 y 都无值的情况
// m1({}) // [0, 0];
// m2({}) // [undefined, undefined]

// m1({z: 3}) // [0, 0]
// m2({z: 3}) // [undefined, undefined]


// function f(x = 1, y) {
//   return [x, y];
// }

// f() // [1, undefined]
// f(2) // [2, undefined])
// f(, 1) // 报错
// f(undefined, 1) // [1, 1]

// // 例二
// function f(x, y = 5, z) {
//   return [x, y, z];
// }

// f() // [undefined, 5, undefined]
// f(1) // [1, 5, undefined]
// f(1, ,2) // 报错
// f(1, undefined, 2) // [1, 5, 2]

// function foo(x = 5, y = 6) {
//     console.log(x, y);
//   }

//   foo(undefined, null)
// 5 null


// console.log((function(a) {}).length) //
// console.log((function(a = 2) {}).length) // 0
// console.log((function(a, b, c = 5) {}).length) // 2
// console.log((function(...rag) {}).length) // 0
// console.log((function (a = 0, b, c) {}).length )// 0
// (function (a, b = 1, c) {}).length // 1


// let x = 1
// function fn(x, y = x) {
//   console.log(x)
// }
// fn(5) // 5

// let x = 1
// function fn(y = x) {
//   let x = 3
//   console.log(y)
// }
// fn() // 1

// function fn(y = x) {
//   console.log(y)
// }
// fn() // 报错 x is not defined

// let a = "aaaa"
// function fn(fun = () => a) {
//   let a = "cccc"
//   console.log(fun())
// }
// fn() // aaaa

// function bar(func = () => foo) {
//   let foo = 'inner';
//   console.log(func());
// }
// bar() // ReferenceError: foo is not defined

// var x = 1
// function fn(x, y = function(){x = 3}) {
//   var x = 2
//   y()
//   console.log(x)
// }
// fn() // 2
// console.log(x) // 1

// var x = 1
// function fn(x, y = function(){x = 3}) {
//   x = 2
//   y()
//   console.log(x)
// }
// fn() // 3
// console.log(x) // 1


// function throwIfMissing() {
//   throw new Error('Missing parameter');
// }
// function foo(mustBeProvided = throwIfMissing()) {
//   return mustBeProvided;
// }
// foo()
// Error: Missing parameter
//参数默认值设为undefined，表明这个参数是可以省略的。



// function fn(...arr) {
//   let n = 0
//   for(var x of arr){
//     n+=x
//   }
//   return n
// }
// console.log(fn(1, 2, 3)) //6


// function push(array, ...item) {
//   item.forEach(item => {
//     array.push(item)
//     console.log(item)
//   })
//   console.log(array)
// }
// var a = []
// push(a,1, 2, 3)
//  rest 参数就是一个真正的数组，数组特有的方法都可以使用。

//rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
// 报错
// function f(a, ...b, c) {
//   // ...
// }

// 函数的length属性，不包括 rest 参数。
// (function(a) {}).length  // 1
// (function(...a) {}).length  // 0
// (function(a, ...b) {}).length  // 1


//函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
//this对象的指向是可变的，但是在箭头函数中，它是固定的。

// function foo() {
//   setTimeout(() => {
//     console.log("id:", this.id)
//   }, 1000)
// }
// var id = "a"
// foo.call({id: "b"}) //id: b

// function foo() {
//   setTimeout(function(){
//     console.log("id:", this.id)
//   }, 1000)
// }
// var id = "a"
// foo.call({id: "b"})  //id: a


// function Timer() {
//   this.s1 = 0;
//   this.s2 = 0;
//   // 箭头函数
//   setInterval(() => this.s1++, 1000);
//   // 普通函数
//   setInterval(function () {
//     this.s2++;
//   }, 1000);
// }

// var timer = new Timer();

// setTimeout(() => console.log('s1: ', timer.s1), 3100);  // s1: 3
// setTimeout(() => console.log('s2: ', timer.s2), 3100);  // s2: 0


// let arr = [5, 6, 233, 4, 56, 546, 456, 999, 999, 5, 6]
// console.log(Math.max.apply(null, arr))


//递归

// function add(n) {
//   if (n == 1) return n
//   return n + add(n - 1)
// }
// console.log(add(100))

// 尾递归

// function add(n, x) {
//   if (n == 1) return x
//   return add(n-1, n + x)
// }
// console.log(add(100, 1))

