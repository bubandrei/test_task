function findOdd(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        count++
      }
    }
    if(count%2 != 0){
      return A[i]
    }
  }
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))


//////////////////////////////////////////////////////////////////////////
// function max(...arg) {
//   if (arg.length === 0 || arg[0].length === 0) return 0
//   const arrFlat = arg.flat(Infinity).map((el) => { return Number(el) })
//   if (arrFlat.includes(NaN)) return NaN
//   return arrFlat.reduce((accum, next) => accum > next ? accum : next)
// }

// function min(...arg) {
//   if (arg.length === 0 || arg[0].length === 0) return 0
//   const arrFlat = arg.flat(Infinity).map((el) => { return Number(el) })
//   if (arrFlat.includes(NaN)) return NaN
//   return arrFlat.reduce((accum, next) => accum < next ? accum : next)
// }
// console.log(max([[], [-4]]));
// console.log(max(1, 2, [3, ['4r']]));
// console.log(max(1, 2, 3, ['4']));
// console.log(min(1, 2, [3, [4, 0]]));
//////////////////////////////////////////////////////////////////////////
// function spinWords(string) {
//   const arr = string.split(' ').map((el) => {
//     if (el.length >= 5) {
//       return el.split('').reverse().join('')
//     } else {
//       return el
//     }
//   }).join(' ')
//   return arr
// }
// console.log(spinWords("Hey fellow warriors"))
//////////////////////////////////////////////////////////////////////////
// function findNextSquare(sq) {
//   if (Number.isInteger(Math.sqrt(sq))) {
//     let num = Math.sqrt(sq);
//     let newNum = Math.pow(num + 1, 2)
//     return newNum
//   }
//   return -1
// }
// console.log(findNextSquare(120))
//////////////////////////////////////////////////////////////////////////
// function openOrSenior(data) {
//   return data.map((el) => {
//     if (el[0] >= 55 && el[1] > 7) {
//       return 'Senior'
//     } else {
//       return 'Open'
//     }
//   })
// }
// console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
//////////////////////////////////////////////////////////////////////////
// function friend(friends) {
//   return friends.filter((el) => el.length === 4)
// }
// console.log(friend(["Ryan", "Kieran", "Mark"]))
//////////////////////////////////////////////////////////////////////////
// function longest(s1, s2) {
// return [...new Set(s1+s2)].sort().join('')
// }
// console.log(longest("aretheyhere", "yestheyarehere"))
//////////////////////////////////////////////////////////////////////////
// function getSum(a, b) {
//   const arr = [];
//   if (a === b) {
//     return a
//   }
//   if (b < a) {
//     for (let i = b; i <= a; i++) {
//       arr.push(i)
//     }
//   } else {
//     for (let i = a; i <= b; i++) {
//       arr.push(i)
//     }
//   } 
//   return arr.reduce((accum, next) => accum + next, 0)
// }
// console.log(getSum(0,-1))
//////////////////////////////////////////////////////////////////////////
// function monkeyCount(n) {
//   let arr = [];
// for(let i = 1; i<=n; i++){
//   arr.push(i)
// }
//   return arr
// }
// console.log((monkeyCount(5)))
//////////////////////////////////////////////////////////////////////////
// function sumArray(array) {
//   if (array != null) {
//     return array.sort((a, b) => a - b).slice(1,array.length-1).reduce((accum,next)=>accum+next,0)
//   }
//   return 0
// }
// console.log(sumArray([null]))
//////////////////////////////////////////////////////////////////////////
// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return 'Draw'
//   }
//   if (p1 === 'scissors' && p2 === 'rock') {
//     return 2
//   }
//   if (p1 === 'rock' && p2 === 'paper') {
//     return 2
//   }
//   if (p1 === 'paper' && p2 === 'scissors') {
//     return 2
//   }
//   return 1
// };
// console.log(rps('scissors', 'scissors'))
//////////////////////////////////////////////////////////////////////////
// function maskify(cc) {
//   const arr = cc.split('');
//   for (let i = arr.length - 5; i >= 0; i--) {
//     arr[i] = '#'
//   }
//   return arr.join('')
// }
// console.log(maskify('4556364607935616'))
//////////////////////////////////////////////////////////////////////////
// function DNAStrand(dna) {
//   let result = '';
//   if (dna != undefined && dna != '') {
//     for (let i = 0; i < dna.length; i++) {
//       if (dna[i] === 'A') {
//         result += 'T'
//       } else if (dna[i] === 'T') {
//         result += 'A'
//       } else if (dna[i] === 'C') {
//         result += 'G'
//       } else if (dna[i] === 'G') {
//         result += 'C'
//       } 
//     }
//   }
//   return result
// }
// console.log(DNAStrand("ATTGC"))
//////////////////////////////////////////////////////////////////////////
// function findShort(s){
// return s.split(' ').reduce((accum, next)=> accum.length<next.length?accum:next).length
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
//////////////////////////////////////////////////////////////////////////
// var str = "How can mirrors be real if our eyes aren't real";
// function capitalize(str) {
//   return str.split(' ').map((el) => {
//     return el[0].toUpperCase() + el.substring(1)
//   }).join(' ')
// }
// console.log(capitalize(str))
//////////////////////////////////////////////////////////////////////////
// function XO(str) {
//   let newStr = str.toLowerCase();
//   let a = 0;
//   let b = 0;
//   for (let i = 0; i < newStr.length; i++) {
//     if (newStr[i] === 'x') {
//       a += 1
//     }
//     if (newStr[i] === 'o') {
//       b += 1
//     }
//   }
//   if (a != b)
//     return false
//   return true
// }
// console.log(XO("xxOoo"))
//////////////////////////////////////////////////////////////////////////
// function smash(words) {
//   return words.join(' ')
// };
// console.log(smash(["this", "is", "a", "really", "long", "sentence"]))
//////////////////////////////////////////////////////////////////////////
// function getAverage(marks) {
//   return Math.floor(marks.reduce((accum, next) => accum + next, 0) / marks.length)
// }
// console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]))
//////////////////////////////////////////////////////////////////////////
// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(x * i);
//   }
//   return z;
// }
// console.log(countBy(1, 10))
//////////////////////////////////////////////////////////////////////////
// var min = function(list){
//   return Math.min.apply(null,list)
// }
// var max = function(list){ 
//   return Math.max.apply(null,list)
// }
// console.log(min([-52, 56, 30, 29, -54, 0, -110]))
// console.log(max([-52, 56, 30, 29, -54, 0, -110]))
//////////////////////////////////////////////////////////////////////////
// function litres(time) {
//   return Math.floor(time*0.5)
// }
// console.log(litres(3))
// var a;
// a = 0;
// a++;
// console.log(a)
// function isIsogram(str){
//   let arr = str.toLowerCase().split('');
//   let result = 0;
//   for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr.length; j++){
//       if(arr[i] === arr[j]){
//         result +=1;
//       }
//     }
//     if(result > 1){
//       return false
//     }
//     result = 0;
//   }
//   return true
// return new Set(str.toUpperCase()).size == str.length;
// }
// console.log(isIsogram("abaaa"))
//////////////////////////////////////////////////////////////////////////
// function filter_list(l) {
//   return l.filter((el)=> Number.isInteger(el))
// //  return l.filter((el)=> isFinite(el) && el === parseInt(el, 10))
// }
// console.log(filter_list([1,2,'a','b']))
//////////////////////////////////////////////////////////////////////////
// function hero(bullets, dragons){
//   return dragons*2<=bullets? true:false
//   }
//   console.log(hero(10, 5))
//////////////////////////////////////////////////////////////////////////
// function greet(name){
//   if(name === "Johnny")
//     return "Hello, my love!";
//   return "Hello, " + name + "!";
// }
// console.log(greet("Simon"))
//////////////////////////////////////////////////////////////////////////
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
// return mpg*fuelLeft >= distanceToPump? true:false;
// };
// console.log(zeroFuel(50, 25, 2))

//////////////////////////////////////////////////////////////////////////
// function reverseWords(str){
//     return str.split(' ').reverse().join(' ')
//   }
//   console.log(reverseWords("yoda doesn't speak like this" ))
//////////////////////////////////////////////////////////////////////////
// function fakeBin(x){
//     let result = '';
// for(let i = 0; i<x.length; i++){
//     if(x[i] < 5){
// result += '0';
//     } else {
//         result += '1'
//     }
// }
// return result
// }
// console.log(fakeBin('45385593107843568'))
// const set = new Set([1,1,2,3,4]);
// console.log(set)
//////////////////////////////////////////////////////////////////////////
// function compare(a, b){
//     let str1 = a.toLowerCase();
//     let str2 = b.toLowerCase();
//     for(let i = 0, maxLength = Math.max(str1.length, str2.length); i<=maxLength; i++){
//         if(i === maxLength){
//            return 0
//         } 
//         if(str1[i] > str2[i]){
//             return 1
//         }
//         if(str1[i] < str2[i]){
//             return -1
//         } 
//     } 
// }
// console.log(compare('abc','abc')) 
//////////////////////////////////////////////////////////////////////////
// function func(s, a, b){
//     var match_empty=/^$/ ;
//     if (s.match(match_empty)){
//         return -1;
//     } else {
//         var i=s.length-1;
//         var aIndex=-1;
//         var bIndex=-1;
//         while ((aIndex==-1) && (bIndex==-1) && (i>=0)){
//             if (s.substring(i, i+1) == a)
//                 aIndex=i;
//             if (s.substring(i, i+1) == b)
//                 bIndex=i;
//                 i--;                                                                            
//         }
//         if (aIndex != -1){
//             if (bIndex == -1){
//                 return aIndex;
//             }else{
//                 return Math.max(aIndex, bIndex); 
//             }                                                                                     
//         } else {
//             if (bIndex != -1)
//                 return bIndex;       
//             else
//                 return -1;                                                                                 
//    }                                                       
//  }
// };
//////////////////////////////////////////////////////////////////////////
// function func(s, a, b) {
//     return (s.length)
//       ? Math.max(s.lastIndexOf(a), s.lastIndexOf(b))
//       : -1;
//   };

//   console.log(func('abcdefgh', 'm', 'c'));
//////////////////////////////////////////////////////////////////////////
// const add = function addThem(){
//     let counter = 1;
//     return value=>{
//         counter *=value;
//         return counter
//     }
// }
// const addSub = add();
// for(var i = 1; i<=3; i++){
//     setTimeout(()=>console.log(addSub(i)), 1000)
// 
// function sayHi(){
//     return (()=>0)();
// }
// console.log(typeof sayHi())
//////////////////////////////////////////////////////////////////////////
// class A{
//     static b =1;
//     c = 2;
//     constructor(){
//         this.b = 3;
//         this.c = 4;
//     }
// }
// const B = new A();
// console.log(A.b,A.c,B.b,B.c)
//////////////////////////////////////////////////////////////////////////
// let fruit = ['Apple', 'Peach'];
// let moreFruit = [...fruit];
// fruit.push('Orange');
// console.log(moreFruit)
//////////////////////////////////////////////////////////////////////////
// const getN = async n=> await n;
// const getM = m => Promise.resolve(m);
// console.log( getN('2'));
// console.log( getM('3'));
// (()=>{
//     let x = (y=10);
// })();
// console.log(typeof x);
// console.log(typeof y);
//////////////////////////////////////////////////////////////////////////
// const arr = [1,2,3];
// arr[10] = 99;
// console.log(arr[6])
//////////////////////////////////////////////////////////////////////////
// for (var i = 0; i < 5; i++) {
//     setTimeout(function() { console.log(i); }, i * 1000 );
//   }
//////////////////////////////////////////////////////////////////////////
// var length = 10;
// function fn() {
// 	console.log(this.length);
// }
//////////////////////////////////////////////////////////////////////////
// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();
//   }
// };
// obj.method(fn, 1);
//////////////////////////////////////////////////////////////////////////
// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };
// var stoleSecretIdentity = hero.getSecretIdentity;
// console.log(stoleSecretIdentity());//undefind
// console.log(hero.getSecretIdentity());//'John Doe'
//////////////////////////////////////////////////////////////////////////
// (function(x) {
//     return (function(y) {
//         console.log(x);
//     })(2)
// })(1);
// console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
//////////////////////////////////////////////////////////////////////////
// var a={},
//     b={key:'b'},
//     c={key:'c'};
// a[b]=123;
// a[c]=456;
// console.log(a[b]);//456
//////////////////////////////////////////////////////////////////////////
// console.log(false == '0')//true
// console.log(false === '0')//false
//////////////////////////////////////////////////////////////////////////
// console.log("0 || 1 = "+(0 || 1));//1
// console.log("1 || 2 = "+(1 || 2));//1
// console.log("0 && 1 = "+(0 && 1));//0
// console.log("1 && 2 = "+(1 && 2));//2
//////////////////////////////////////////////////////////////////////////
// var globalVar = "xyz";
// (function outerFunc(outerArg) {
//     var outerVar = 'a';

//     (function innerFunc(innerArg) {
//     var innerVar = 'b';

//     console.log(
//         "outerArg = " + outerArg + "\n" +//123
//         "innerArg = " + innerArg + "\n" +//456
//         "outerVar = " + outerVar + "\n" +//a
//         "innerVar = " + innerVar + "\n" +//b
//         "globalVar = " + globalVar);//xyz

//     })(456);
// })(123);
//////////////////////////////////////////////////////////////////////////
// console.log(1 +  "2" + "2");//122
// console.log(1 +  +"2" + "2");//32
// console.log(1 +  -"1" + "2");//02
// console.log(+"1" +  "1" + "2");//112
// console.log( "A" - "B" + "2");//Nan2
// console.log( "A" - "B" + 2);//Nan
//////////////////////////////////////////////////////////////////////////
// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));//5
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));//5
//////////////////////////////////////////////////////////////////////////
// var d = {};
// [ 'zebra', 'horse' ].forEach(function(k) {
// 	d[k] = undefined;
// });
// console.log(d)
//////////////////////////////////////////////////////////////////////////
// function sum(a, b) {
//     if (b !== undefined) {
//         return a + b
//     }
//     return function (b) {
//         return a + b
//     }
// }
// console.log(sum(2, 3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5
//////////////////////////////////////////////////////////////////////////
// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);//bar
//         console.log("outer func:  self.foo = " + self.foo);//bar
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);//undefind
//             console.log("inner func:  self.foo = " + self.foo);//bar
//         }());
//     }
// };
// myObject.func();
//////////////////////////////////////////////////////////////////////////
// (function(){
//     var a = b = 3;
//   })();
//   console.log("a defined? " + (typeof a !== 'undefined'));//false
//   console.log("b defined? " + (typeof b !== 'undefined'));//true
//////////////////////////////////////////////////////////////////////////
// const arr = [7, 'correct', 0, false, 9, NaN, ''];
// const res = arr.filter((item) => !!item);
// console.log(res)
//////////////////////////////////////////////////////////////////////////
// const array = [10, 2, 1, 7, 5, 6, 6];
// let newArr = [];
// // array.reverse(array);
// for (let i = array.length - 1; i >= 0; i--) {
//     newArr.push(array[i])
// }
// console.log(newArr)
// console.log(array)
// const users = [
//     {
//         name: 'Jonh',
//         age: 40
//     },
//     {
//         name: 'Alex',
//         age: 30
//     }
// ]
// // users.sort((a, b) => a.age - b.age)
// users.sort((a, b) => a.name.localeCompare(b.name))
// console.log(users)
//////////////////////////////////////////////////////////////////////////
// const array = [10, 2, 1, 7, 5, 6, 6];
// let result = array.sort((a, b) => a - b)
// let min = array.sort((a, b) => b - a)
// console.log(result)
// console.log(min)
//////////////////////////////////////////////////////////////////////////
// let max = array[0];
// let min = array[0];
// for (let i = 0; i < array.length; i++) {
//     // max = array[i]
//     if (max < array[i] ) {
//         max = array[i]
//     }
//     if (min > array[i]) {
//         min = array[i]
//     }
// }
// let max = Math.max.apply(null,array)
// let min = Math.min.apply(null,array)
//////////////////////////////////////////////////////////////////////////
// let max = array.reduce((accum, next) => accum > next ? accum : next)
// let min = array.reduce((accum, next) => accum < next ? accum : next)
// console.log(max)
// console.log(min)
//////////////////////////////////////////////////////////////////////////
// const sum = array.reduce((accum, prev) => accum + prev, 0);
// console.log(sum)
//////////////////////////////////////////////////////////////////////////
// let result = 0;
// for (let i = 0; i < array.length; i++) {
//     result += array[i]
// }
// console.log(result)
//////////////////////////////////////////////////////////////////////////
// function pl(s) {
//     let c = '';
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === 'm') {
//             c += '-'
//         }
//         if (s[i] === 'p') {
//             c += '+'
//         }
//     }
//     console.log(c)
// }
// pl('minusplusminusminusplusminus')
//////////////////////////////////////////////////////////////////////////
// let person = {name:'Jonh'};
// const members = [person];
// console.log(members)
// person = null;
// console.log(members)
// console.log(person)
//////////////////////////////////////////////////////////////////////////
// const a = 'g';
// console.log(a == NaN? 'y': 'g')
//////////////////////////////////////////////////////////////////////////
// const a = {
//     d: 'a',
//     b: 'g',
//     hob: ['a', 'f'],
// list() {
//         this.hob.forEach(function (hobby) {
//             console.log(`${this.d} ${ hobby }`)
//         })
//     }
// }
// a.list()

//////////////////////////////////////////////////////////////////////////
// let a = -true;
// let b = -false;
// let c = a==b;
// console.log(c)
// const people = [
//   { name: 'A', age: 18 },
//   { name: 'B', age: 20 },
//   { name: 'C', age: 9 },
//   { name: 'D', age: 30 },
//   { name: 'E', age: 25 },
// ]
// function getPeople() {
//   let arr = [];
//   let i = 0;
//   const inter = setInterval(() => {
//     if (people[i]) {
//       if (people[i].age > 18) {
//         arr.push(people[i].name);
//         console.log(arr)
//       }
//       i++
//     } else {
//       clearInterval(inter)
//     }
//   }, 1000)

// }
// getPeople()
//////////////////////////////////////////////////////////////////////////
// function correct(string) {
//     let arr = string.split('')
//     let result = arr.map((item, index) => {
//       return  item === '5' ? arr[index] = 'S' : item === '0' ? arr[index] = 'O' : item === '1' ? arr[index] = 'I' : item
//     }).join('')
//     return result
// }
// console.log(correct("L0ND0N"))
//////////////////////////////////////////////////////////////////////////
// const verify = (text) => {
//     let result = [];
//     let open = "([<";
//     let close = ")]>";
//     let chr = "";
//     for (let i = 0; i < text.length; i++) {
//         chr = text[i];
//           if (open.indexOf(chr) !== -1) {
//             // console.log(open.indexOf(chr))
//               result.push(chr); 
//           } 
//           else if (close.indexOf(chr) !== -1) {
//               if (result.length === 0) {
//                   return 0;
//               }
//               if (result[result.length-1] === open[close.indexOf(chr)]) {
//                 console.log(open[close.indexOf(chr)])
//                   result.pop();
//               }
//             //   else {
//             //       return 0;
//             //   }
//           }
//       }
//     return result.length === 0 ? 1 : 0;
// }
// console.log(verify("---(++++)----"))
//////////////////////////////////////////////////////////////////////////
// function stringToArray(string) {
//     return string.split(' ')
// }
// console.log(stringToArray("Robin Singh"))
//////////////////////////////////////////////////////////////////////////
// function sumMix(x) {
//     return x.reduce((accum, prev) => +prev + accum, 0);
// }
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
// const arr = ['a', 'b', 1, 2];
// const [y] = arr;
// console.log(y)//'a'
// const [,,z] = arr;//1
// console.log(z);//
//////////////////////////////////////////////////////////////////////////
//  * Описать функцию spinWords, получающую на вход строку и возвращающую строку,
//  * в которой все слова длиной более 4 символов отражены зеркально.
//  * @param {string} str
//  * @return {string}
//  */

// function spinWords(str) {
//     let arr = str.split(' ')
//     let newArr = arr.map((item) => {
//         if (item.length > 4) {
//             let result = [...item].reverse().join('')
//             return result
//         } else {
//             return item
//         }
//     })
//     return newArr.join(' ')
// }
// console.log(spinWords("Welcome")); // emocleW
// console.log(spinWords("Hey fellow warriors")); // Hey wollef sroirraw
// console.log(spinWords("This is a test")); // This is a test
// console.log(spinWords("This is another test")); // This is rehtona test
//////////////////////////////////////////////////////////////////////////
// * Построить строку из объекта данных,
// * где ключ - это символ,
// * а значение - массив с индексами в строке для этого символа
// * @param {object} obj
// * @return {string}
// */
// const data = {
//     ' ': [5],
//     d: [10],
//     e: [1],
//     H: [0],
//     l: [2, 3, 9],
//     o: [4, 7],
//     r: [8],
//     w: [6],
// }
//////////////////////////////////////////////////////////////////////////
// const data2 = {
//     ' ': [1, 6],
//     '!': [17],
//     a: [8, 10],
//     c: [12],
//     e: [5],
//     I: [0],
//     i: [14],
//     J: [7],
//     l: [2],
//     o: [3],
//     p: [15],
//     r: [13],
//     S: [11],
//     t: [16],
//     v: [4, 9]
// }
// const buildString = (obj) => {
//     let val = Object.values(obj);
//     let propertyLength = [];
//     let arr3 = val.map((item) => {
//         return propertyLength.push(...item)
//     })
//     let arr = [];
//     for (let i = 0; i < propertyLength.length; i++) {
//         for (key in obj) {
//             let y = obj[key].map((item) => {
//                     return item == i ? arr.push(key): arr
//             })
//         }
//     }
//     console.log(arr.join(''))
// }
// buildString(data2)
//////////////////////////////////////////////////////////////////////////
// var obj = {
//     fullname: 'Coling',
//     prop:{
//         fullname: 'Aurelio',
//         getFullname:function(){
//             return this.fullname;
//         }
//     }
// }
// var test = obj.prop.getFullname;
// console.log(test())
// console.log(test.call(obj.prop))
//////////////////////////////////////////////////////////////////////////
// function sum(a) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//     let summary = [];
//     if (a) {
//         const word = a.toLowerCase().split('');
//         for (let i = 0; i < alphabet.length; i++) {
//             for (let j = 0; j <= word.length; j++) {
//                 if (alphabet[i] == word[j]) {
//                     summary.push(i + 1)
//                 }
//             }
//         }
//         let result = summary.reduce((acum, prev) => {
//             return acum + prev
//         }, 0);
//         return result
//     }
// }
// console.log(sum('friendship'))
//////////////////////////////////////////////////////////////////////////
// const obj = {
//         a:this,
//         b:function(){
//             return this;
//         },
//         c:()=>{
//             return this;
//         },
//         d(){
//             return this;
//         },
//         e:function(){
//             return this.a
//         }
//     }
//     console.log(this)
// console.log(obj.a);
// console.log(obj.b);//obj
// console.log(obj.c);//undefind
// console.log(obj.d);//obj
// console.log(obj.e);//undefind
//////////////////////////////////////////////////////////////////////////
// function point(x, y) {
//     if (typeof x === 'undefined') {
//         x = 320;
//     };
//     if (typeof y === 'undefined') {
//         y = 130;
//     }
//     return { x: x, y: y }
// }
// console.log(point(3,2))
// console.log(point())
//////////////////////////////////////////////////////////////////////////
// var b = 1;
// function outer(){
//    	var b = 2
//     function inner(){
//         b++;
//         var b = 3;
//         console.log(b)//3
//     }
//     inner();
// }
// outer();
//////////////////////////////////////////////////////////////////////////
// console.log(typeof typeof 1);//string
//////////////////////////////////////////////////////////////////////////
// console.log(1 < 2 < 3);//true<3(1<3)
// console.log(3 > 2 > 1);//true>1(1>1) false
//////////////////////////////////////////////////////////////////////////
// for (let i = 0; i < 5; i++) {
//     setTimeout(function() { console.log(i); }, i * 1000 );
//   }//0,1,2,3,4
//////////////////////////////////////////////////////////////////////////
// var x = 21;
// var girl = function () {
//     console.log(x);//undefind
//     var x = 20;
// };
// girl ();
//////////////////////////////////////////////////////////////////////////
// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);//1
//     }
//     console.log(x);//undefind
//     console.log(y);//2
// })();
//////////////////////////////////////////////////////////////////////////
// var length = 10;
// function fn() {
// 	console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();//10
//     arguments[0]();//2
//   }
// };
// obj.method(fn, 1);
//////////////////////////////////////////////////////////////////////////
// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };
// var stoleSecretIdentity = hero.getSecretIdentity;
// console.log(stoleSecretIdentity.apply(hero));//'John Doe'
// console.log(stoleSecretIdentity());//undefind
// console.log(hero.getSecretIdentity());//'John Doe'
//////////////////////////////////////////////////////////////////////////
// (function(x) {
//     return (function(y) {
//         console.log(x);//1
//     })(2)
// })(1);
//////////////////////////////////////////////////////////////////////////
// console.log((function f(n) { return ((n > 1) ? n * f(n - 1) : n) })(10));
//10*(9*(8*(7*(6*(5*(4*(3*(2*(1)))))))))
//////////////////////////////////////////////////////////////////////////
// var a={},
//     b={key:'b'},
//     c={key:'c'};

// a[b]=123;//a{Objectobject:123}
// a[c]=456;//a{Objectobject:456}

// console.log(a[b]);//456
//////////////////////////////////////////////////////////////////////////
// console.log(false == '0')//true
// console.log(false === '0')//false (type)
//////////////////////////////////////////////////////////////////////////
// console.log("0 || 1 = "+(0 || 1));//1
// console.log("1 || 2 = "+(1 || 2));//1
// console.log("0 && 1 = "+(0 && 1));//0
// console.log("1 && 2 = "+(1 && 2));//2
//////////////////////////////////////////////////////////////////////////
// var list = readHugeList();
// var nextListItem = function () {
//     var item = list.pop();
//     if (item) {
//         setTimeout(nextListItem, 0)
//     }
// };
//////////////////////////////////////////////////////////////////////////
// console.log(1 +  "2" + "2");//122
// console.log(1 +  +"2" + "2");//32
// console.log(1 +  -"1" + "2");//02
// console.log(+"1" +  "1" + "2");//112
// console.log( "A" - "B" + "2");//NaN2
// console.log( "A" - "B" + 2);//NaN
//////////////////////////////////////////////////////////////////////////
// var arr1 = "john".split('');//[j,o,h,n]
// var arr2 = arr1.reverse();//[n,h,o,j]
// var arr3 = "jones".split('');//[j,o,n,e,s]
// arr2.push(arr3);//[n,h,o,j,[j,o,n,e,s]]
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));//5 [j,o,n,e,s]
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));//5 [j,o,n,e,s]
//////////////////////////////////////////////////////////////////////////
// var d = {};
// [ 'zebra', 'horse' ].forEach(function(k) {
// 	d[k] = undefined;
// });
// console.log(d)
//////////////////////////////////////////////////////////////////////////
// const sum = (a, b) => {
//     if (b != undefined) {
//         return a + b
//     }
//     return function (b) {
//         return a + b
//     }
// }
// function sum (a) {
//     if (arguments.length == 2) {
//         return arguments[0] + arguments[1];
//     }
//     return function (b) {
//         return a + b
//     }
// }
// console.log(sum(2, 5));   // Outputs 5
// console.log(sum(2)(1));  // Outputs 5
//////////////////////////////////////////////////////////////////////////
// (function() {
//     console.log(1); //1
//     setTimeout(function(){console.log(2)}, 1000); //4
//     setTimeout(function(){console.log(3)}, 0); //3
//     console.log(4);//2
// })();
//////////////////////////////////////////////////////////////////////////
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);//false
//////////////////////////////////////////////////////////////////////////
// function foo1() {
//     return {
//         bar: "hello"
//     };
// }

// function foo2() {
//     return//
//     {
//         bar: "hello"
//     };
// }
// console.log(foo2())//undefind
//////////////////////////////////////////////////////////////////////////
// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);//bar
//         console.log("outer func:  self.foo = " + self.foo);//bar
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);//undefind
//             console.log("inner func:  self.foo = " + self.foo);//bar
//         }());
//     }
// };
// myObject.func();
//////////////////////////////////////////////////////////////////////////
// (function(){
//     var a = b = 3;
//   })();
//   console.log("a defined? " + (typeof a !== 'undefined'));//referenceError false
//   console.log("b defined? " + (typeof b !== 'undefined'));//3 true
//////////////////////////////////////////////////////////////////////////
// function zeroAndOne(s) {
//   let cnt = 0;
//   for (let i=0; i<s.length; i++){
//     if ( (s[i]=='0' && s[i+1]=='1') || (s[i]=='1' && s[i+1]=='0') ) i++;
//     else cnt++;
//   }
//   console.log(cnt)
//   return cnt;
// }
// zeroAndOne("110100")
//////////////////////////////////////////////////////////////////////////
// function arrayPlusArray(arr1, arr2) {
// return [...arr1,...arr2].reduce((acum,prev)=>acum+prev,0)
//   return arr1 + arr2; //something went wrong
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))

//////////////////////////////////////////////////////////////////////////
// function past(h, m, s) {
//   return ((h * 3600) + (m * 60) + s) * 1000;
// }
// console.log(past(0, 1, 1))
//////////////////////////////////////////////////////////////////////////
// function howManyGifts(maxBudget, gifts) {
//   let j = 0;
//   let newArr = gifts.sort((a, b) => a - b);
//   let sum = 0;
//   for (let i = 0; i <= newArr.length; i++) {
//     sum += newArr[i]
//     if (sum <= maxBudget) {
//       j++
//     } else {
//       return j
//     }
//   }
// }
// howManyGifts(20, [13, 2, 4, 6, 1])
//////////////////////////////////////////////////////////////////////////
// function convert(arr){
// return arr.map((item)=> +item)
// }
// console.log(convert(['1','2','3']))
//////////////////////////////////////////////////////////////////////////
// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//   }
//   console.log(accum('abcd'))
//////////////////////////////////////////////////////////////////////////
// function accum(s) {
//     let result = '';
//     s = s.toLowerCase();
//     for (let i = 0; i < s.length; i++) {
//         if (i != s.length - 1) {
//             result += s[i].toUpperCase() + s[i].repeat(i) + '-'
//         } else {
//             result += s[i].toUpperCase() + s[i].repeat(i)
//             console.log(typeof result)
//             return result
//         }
//     }
// }
//     console.log(accum('abcd'))
// accum('abcd')
//////////////////////////////////////////////////////////////////////////
// var k = 1;
// if (1) {
//   function foo() {};
//   console.log(typeof foo)
//   k += typeof foo;
// }
// console.log(k);
//////////////////////////////////////////////////////////////////////////
// const a = 'fizz';
// const b = 'buzz';
// const c = 'FizzBuzz';
// for (let i = 1; i <= 100; i++) {
//     i % 5 == 0 && i % 3 == 0 ? console.log(i + '' + c) : i % 3 == 0 ? console.log(i + '' + a) : console.log(i + '' + b)
// }
//////////////////////////////////////////////////////////////////////////
// function createBase(a) {
//     return function (b) {
//         return a + b
//     }
// }

// var addSix = createBase(6);
// console.log(addSix(10));
// console.log(addSix(21))
// addSix(10); // returns 16
// addSix(21); // returns 27
//////////////////////////////////////////////////////////////////////////
// function mul(a) {
//     return function (b) {
//         return function (c) {
//             return a * b * c
//         }
//     }
// }
// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48
//////////////////////////////////////////////////////////////////////////
// const strReverse = (str)=>{
//     let arr = str.split(' ');
//     const newArr = arr.map((item)=>{
//         return item.split('').reverse().join('')
//     });
//     return newArr.join(' ')
// }
// console.log(strReverse('Welcome to this Javascript Guide!'))
//////////////////////////////////////////////////////////////////////////
// var arrayList = [1 , 2, 3];
// console.log(Array.isArray(arrayList))
//////////////////////////////////////////////////////////////////////////
// function duplicate(x) {
//     return x.concat(x)
//     return [...x,...x]
// }
// console.log(duplicate([1, 2, 3, 4, 5]))
// duplicate([1, 2, 3, 4, 5]);
//////////////////////////////////////////////////////////////////////////
// var b = 1;
// function outer(){
//    	var b = 2
//     function inner(){
//         b++;//Nan
//         var b = 3;
//         console.log(b)//3
//     }
//     inner();
// }
// outer();
//////////////////////////////////////////////////////////////////////////
// for (var i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );//5,5,5,5,5,5
// }
//////////////////////////////////////////////////////////////////////////
// console.log(typeof typeof 1);//string
//////////////////////////////////////////////////////////////////////////
// typeof undefined == typeof NULL//true
//////////////////////////////////////////////////////////////////////////
// var a = [1, 2, 3];
// a[10]= 99;
// console.log(a[6])//undefined
//////////////////////////////////////////////////////////////////////////
// console.log(1 < 2 < 3);//true
// console.log(3 > 2 > 1);//false
//////////////////////////////////////////////////////////////////////////
// for (let i = 0; i < 5; i++) {
//     setTimeout(function() { console.log(i); }, i * 1000 );//0,1,2,3,4
//   }
//////////////////////////////////////////////////////////////////////////
// var x = 21;
// var girl = function () {
//     console.log(x);//undefined
//     var x = 20;
// };
// girl ();
//////////////////////////////////////////////////////////////////////////
// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);//1
//     }
//     console.log(x);//undefined
//     console.log(y);//2
// })();
//////////////////////////////////////////////////////////////////////////
// var length = 10;
// function fn() {
// 	console.log(this.length);
// }
// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();//undefined
//     arguments[0]();//2
//   }
// };
// obj.method(fn, 1);
//////////////////////////////////////////////////////////////////////////
// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };
// var stoleSecretIdentity = hero.getSecretIdentity;
// console.log(stoleSecretIdentity());//undefined
// console.log(hero.getSecretIdentity());//'John Doe'
//////////////////////////////////////////////////////////////////////////
// (function(x) {
//     return (function(y) {
//         console.log(x);//1
//     })(2)
// })(1);
//////////////////////////////////////////////////////////////////////////
// console.log((function f(n) { return ((n > 1) ? n * f(n - 1) : n) })(10));
//////////////////////////////////////////////////////////////////////////
// var a={},
//     b={key:'b'},
//     c={a:'c'};
// a[b]=123;
// a[c]=456;
// console.log(a)
// console.log(a[b]);//456
//////////////////////////////////////////////////////////////////////////
// console.log(false == '0')//true
// console.log(false === '0')//false
//////////////////////////////////////////////////////////////////////////
// console.log("0 || 1 = "+(0 || 1));//1
// console.log("1 || 2 = "+(1 || 2));//1
// console.log("0 && 1 = "+(0 && 1));//0
// console.log("1 && 2 = "+(1 && 2));//2
//////////////////////////////////////////////////////////////////////////
// var globalVar = "xyz";
// (function outerFunc(outerArg) {
//     var outerVar = 'a';
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
//     console.log(
//         "outerArg = " + outerArg + "\n" +//123
//         "innerArg = " + innerArg + "\n" +//456
//         "outerVar = " + outerVar + "\n" +//a
//         "innerVar = " + innerVar + "\n" +//b
//         "globalVar = " + globalVar);//xyz
//     })(456);
// })(123);
//////////////////////////////////////////////////////////////////////////
// console.log(1 +  "2" + "2");//122
// console.log(1 +  +"2" + "2");//32
// console.log(1 +  -"1" + "2");//02
// console.log(+"1" +  "1" + "2");//112
// console.log( "A" - "B" + "2");//Nan2
// console.log( "A" - "B" + 2);//Nan
//////////////////////////////////////////////////////////////////////////
// var arr1 = "john".split('');//[j,o,h,n]
// var arr2 = arr1.reverse();//[n,h,o,j]
// var arr3 = "jones".split('');//[j,o,n,e,s]
// arr2.push(arr3);//[n,h,o,j,[j,o,n,e,s]]
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));//5 [j,o,n,e,s]
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));//5 [[j,o,n,e,s]
//////////////////////////////////////////////////////////////////////////
// var d = {};
// [ 'zebra', 'horse' ].forEach(function(k) {
// 	d[k] = undefined;
// });
// console.log(d)
//////////////////////////////////////////////////////////////////////////
// function sum(a,b) {
//     if (b !== undefined) {
//         return a + b
//     } else {
//         return function (b) {
//             return a + b
//         }
//     }

// }
// console.log(sum(2, 3));   // Outputs 5
// console.log(sum(2)(3))
//////////////////////////////////////////////////////////////////////////
// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);//bar
//         console.log("outer func:  self.foo = " + self.foo);//bar
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);//undefined
//             console.log("inner func:  self.foo = " + self.foo);//bar
//         }());
//     }
// };
// myObject.func();
//////////////////////////////////////////////////////////////////////////
// (function(){
//     var a = b = 3;
//   })();
//   console.log(typeof a);//undefined
//   console.log(typeof b);//number
//   console.log(a);//ReferenceError: a is not defined
//   console.log(b);
//   console.log("a defined? " + (typeof a !== 'undefined'));//false
//   console.log("b defined? " + (typeof b !== 'undefined'));//true

//////////////////////////////////////////////////////////////////////////
// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }
//////////////////////////////////////////////////////////////////////////
// function lovefunc(flower1, flower2) {
//     return (flower1 % 2 == 0 && flower2 % 2 !== 0) || (flower2 % 2 == 0 && flower1 % 2 !== 0) ? true : false
// }
// console.log(lovefunc(2, 3))
//////////////////////////////////////////////////////////////////////////
// function getMiddle(s) {
//     if (s.length % 2 == 0) {
//         return s[s.length / 2-1] + s[s.length / 2]
//     } else {
//         return s[Math.floor(s.length / 2)]
//     }
// }
// console.log(getMiddle('test'))
//////////////////////////////////////////////////////////////////////////
// let num = 145263;
// function descendingOrder(n){
//     let arr = n.toString().split('');
//    return Number(arr.map(Number).sort((a,b)=>b-a).join(''))
// }
// descendingOrder(num)
//////////////////////////////////////////////////////////////////////////
// function highAndLow(numbers) {
//     let num = numbers.split(' ');
//     console.log(num)
//     let newArr = num.map(Number)
//     return Math.max.apply(0, newArr) + ' ' + Math.min.apply(0, newArr);

// }
// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
//////////////////////////////////////////////////////////////////////////
// function highAndLow(numbers) {
//     let str = numbers.split('');
//     console.log(str)
//     let arr = [];
//     let result = null;
//     str.sort((a, b) => a - b)
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != ' ') {
//             arr.push(str[i])
//         }
//     }
//     arr.reverse()
//     return result = arr[0] + ' ' + arr[arr.length - 1]
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
//////////////////////////////////////////////////////////////////////////
// function bmi(weight, height) {
//     let sum = weight/Math.pow(height,2);
//   if(sum<= 18.5){
//     return "Underweight"
//   }
// }
// console.log(bmi(10, 5))
//////////////////////////////////////////////////////////////////////////
// function lovefunc(flower1, flower2) {
//     return (flower1 % 2 == 0 && flower2%2 !== 0) || (flower2 % 2 == 0 && flower1%2 !== 0) ? true : false
// }
// console.log(lovefunc(2, 3))
//////////////////////////////////////////////////////////////////////////
// let a =1/2; b=1*2;c=1+2;d=1-2;
// let arr = [a,b,c,d].map((num)=>{
//     return num + true
// });
// console.log(arr)//[1.5,3,4,0]
//////////////////////////////////////////////////////////////////////////
// a()
// function a(){
//     console.log('a')
// }
// b()
// var b = function(){
//     console.log('b')
// }
//////////////////////////////////////////////////////////////////////////
// var a = [1,2,3,4,5];
// console.log(a.slice(2,4))//3,4
//////////////////////////////////////////////////////////////////////////
// for (let i = 0; i < 5; i++) {
//     setTimeout(function () { console.log(i); }, i * 1000);//0,1,2,3,4
// }
//////////////////////////////////////////////////////////////////////////
// console.log(1 < 2 < 3);//true
// console.log(3 > 2 > 1);//false
//////////////////////////////////////////////////////////////////////////
// var b = [undefined];
// b[2] = 1;
// console.log(b);             // (3) [undefined, empty × 1, 1]
// console.log(b.map(e => 7));
//////////////////////////////////////////////////////////////////////////
// console.log(typeof undefined == typeof NULL)//true  because NULL!!!!!!
//////////////////////////////////////////////////////////////////////////
// console.log(typeof typeof 1);//string!!!
//////////////////////////////////////////////////////////////////////////
// console.log(Number.isNaN('number'))//false
//////////////////////////////////////////////////////////////////////////
// var b = 1;
// function outer(){
//    	var b = 2
//     function inner(){
//         b++;
//         var b = 3;
//         console.log(b)//3
//     }
//     inner();
// }
// outer();
//////////////////////////////////////////////////////////////////////////
// let str = '123';
// let str1 = str.repeat(0);
// let str2 = str.repeat(3.5)//'123123123'
// console.log(str1)//''
// console.log(str2)//'123123123'
// console.log((str1+str2).length)
//////////////////////////////////////////////////////////////////////////
// var globalVar = "xyz";
// (function outerFunc(outerArg) {
//     var outerVar = 'a';

//     (function innerFunc(innerArg) {
//     var innerVar = 'b';

//     console.log(
//         "outerArg = " + outerArg + "\n" +//123
//         "innerArg = " + innerArg + "\n" +//456
//         "outerVar = " + outerVar + "\n" +//a
//         "innerVar = " + innerVar + "\n" +//b
//         "globalVar = " + globalVar);//xyz

//     })(456);
// })(123);
//////////////////////////////////////////////////////////////////////////
// console.log("0 || 1 = "+(0 || 1));//1
// console.log("1 || 2 = "+(1 || 2));//1
// console.log("0 && 1 = "+(0 && 1));//0
// console.log("1 && 2 = "+(1 && 2));//2
//////////////////////////////////////////////////////////////////////////
// console.log(false == '0')//true
// console.log(false === '0')//false
//////////////////////////////////////////////////////////////////////////
// var a={},
//     b={key:'b'},
//     c={key:'c'};//
// a[b]=123;//a["[object Object]"]
// a[c]=456;//a["[object Object]"]
// console.log(a[b]);//456
//////////////////////////////////////////////////////////////////////////
// console.log((function f(n) { return ((n > 1) ? n * f(n - 1) : n) })(10));
//////////////////////////////////////////////////////////////////////////
// (function(x) {
//     return (function(y) {
//         console.log(x);
//     })(2)
// })(1);
//////////////////////////////////////////////////////////////////////////
// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };
// var stoleSecretIdentity = hero.getSecretIdentity;
// console.log(stoleSecretIdentity());//undefind
// console.log(hero.getSecretIdentity());//'John Doe'
//////////////////////////////////////////////////////////////////////////
// var length = 10;
// function fn() {
// 	console.log(this.length);//10
// }
// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();//2
//   }
// };
// obj.method(fn, 1);
//////////////////////////////////////////////////////////////////////////
// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);//1
//     }
//     console.log(x);//undefined
//     console.log(y);//2
// })();
//////////////////////////////////////////////////////////////////////////
// var x = 21;
// var girl = function () {
//     console.log(x);//undefind
//     var x = 20;
// };
// girl ();
//////////////////////////////////////////////////////////////////////////
// const str = 'hello';
// function rep(str){
//     return str.repeat(3)
// }
// console.log(rep(str))
//////////////////////////////////////////////////////////////////////////
// String.prototype.repeatify = String.prototype.repeatify || function(times){
//     var str = '';
//     for(var i = 0; i<times; i++){
//         str +=this;
//     }
//     return str
// }
//////////////////////////////////////////////////////////////////////////
// function test(){
//     console.log(a);
//     console.log(foo());
//     var a = 1;
//     function foo(){
//         return 2;
//     }
// }
// test()
//////////////////////////////////////////////////////////////////////////

// var obj = {
//     fullname: 'Coling',
//     prop:{
//         fullname: 'Aurelio',
//         getFullname:function(){
//             return this.fullname;
//         }
//     }
// }
// var test = obj.prop.getFullname;
// console.log(test())
// console.log(test.call(obj.prop))
//////////////////////////////////////////////////////////////////////////
// (function () {
//     b=3;
//     var a = b;
// })();

// console.log("a defined? " + (typeof a !== 'undefined'));//referenceError
// console.log("b defined? " + (typeof b !== 'undefined'));//number
// console.log(b)
//////////////////////////////////////////////////////////////////////////
// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);//bar
//         console.log("outer func:  self.foo = " + self.foo);//bar
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);//undefind
//             console.log("inner func:  self.foo = " + self.foo);//bar
//         }());
//     }
// };
// myObject.func();
//////////////////////////////////////////////////////////////////////////
// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();
//////////////////////////////////////////////////////////////////////////
// function product(a){
//     return function(b){
//         return [
//             function (c){
//                 return a*b+c
//             }
//         ]
//     }
// }
// console.log(product(10)(10)[0](5))
//////////////////////////////////////////////////////////////////////////
// const str = 'level';
// function polidrom(str) {
//     let newStr = str.toLowerCase();
//     let len = newStr.length;
//     if (len !== '') {
//         for (let i = 0; i <= newStr.length/2; i++) {
//             if (newStr[i] != newStr[len-1]) {
//                 console.log(str[i])
//                 return false
//             } else {
//                 len--
//             }
//         }
//         return true
//     }
// }
// console.log(polidrom(str))
//////////////////////////////////////////////////////////////////////////
// function sum(x) {
//     if (arguments.length == 2) {
//         return arguments[0] + arguments[1]
//     } else {
//         return function (y) {
//             return x + y
//         }
//     }
// }
// console.log(sum(2, 3));   // Outputs 5
// console.log(sum(2)(3));
//////////////////////////////////////////////////////////////////////////
// function sum(x, y) {
//     if (y !== undefined) {
//         return x + y
//     } else {
//         return function (y) {
//             return x + y
//         }
//     }
// }
// console.log(sum(2, 3));   // Outputs 5
// console.log(sum(2)(3));
//////////////////////////////////////////////////////////////////////////
// var d = {};
// [ 'zebra', 'horse' ].forEach(function(k) {
// 	d[k] = undefined;
// });
// console.log(d)
//////////////////////////////////////////////////////////////////////////
// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
//array 1: length=5 last=j,o,n,e,s
//array 2: length=5 last=j,o,n,e,s
//////////////////////////////////////////////////////////////////////////
// console.log(1 +  "2" + "2");//122
// console.log(1 +  +"2" + "2");//32
// console.log(1 +  -"1" + "2");//'02'
// console.log(+"1" +  "1" + "2");//112
// console.log( "A" - "B" + "2");//NaN2
// console.log( "A" - "B" + 2);//NaN
//////////////////////////////////////////////////////////////////////////
// (function () {
//     var a = b = 5;
// })();
// console.log(b)
//////////////////////////////////////////////////////////////////////////
// console.log(variable)
// console.log(typeof variable)
//////////////////////////////////////////////////////////////////////////
// function getCircumference(radius) {
//     console.log(circumference)
//     circumference = PI*radius*2;
//     const PI = 22/7;
//   }
//   getCircumference(2)
//////////////////////////////////////////////////////////////////////////
// function greet(person) {
//     if (person !== { name: 'amy' }) {
//         return person
//     }
//     else { return 'hey arnold' }
// }
// console.log(greet({ name: 'amy' }))
//////////////////////////////////////////////////////////////////////////
// let dog = {
//     name: 'doggo',
//     sayName: () => {
//         console.log(this.name)
//     }
// }
// let sayName = dog.sayName
// console.log(sayName.call(dog.sayName))
// console.log(sayName())

//////////////////////////////////////////////////////////////////////////
// const arr = [1,2,3,4,5]
// const newArr = arr.reduce((x,y)=> console.log(x,y))
// console.log(newArr)
//////////////////////////////////////////////////////////////////////////
// const a = {};
// const b = {key:'111'};
// const c ={key:'222'};
// a[b] = 123;
// a[c] = 456;
// console.log(a[b])
//////////////////////////////////////////////////////////////////////////
// const obj = {
//     '0':5,
//     0:3
// }
// console.log(obj['0']+obj[0])
//////////////////////////////////////////////////////////////////////////
// let x = y=5
// console.log(x)
// console.log(y)


////////////////////////////////////////////////////////////////////////////
// const classPoints = [40, 40, 34, 57, 29, 72, 57, 88];
// const yourPoints = 75;
// function betterThanAverage(classPoints, yourPoints) {
//     let sumPoint = classPoints.reduce((accum, prev) => accum + prev, 0)
//     let averagePoint = sumPoint / classPoints.length;
//     if (averagePoint < yourPoints) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(betterThanAverage(classPoints, yourPoints))


////////////////////////////////////////////////////////////////////////////
// function powersOfTwo(n){
//     var result = [];
//     for (var i = 0; i <= n; i++) {
//       result.push(Math.pow(2, i));
//     }
//     return result;
//   }
// powersOfTwo(5)

////////////////////////////////////////////////////////////////////////////
// x = 5;
// console.log(x);
// var x;

////////////////////////////////////////////////////////////////////////////
// const obj = {
//     a:this,
//     b:function(){
//         return this;
//     },
//     c:()=>{
//         return this;
//     },
//     d(){
//         return this;
//     },
//     e:function(){
//         return this.a
//     }
// }
////////////////////////////////////////////////////////////////////////////
// console.log(1);
// setTimeout(()=>console.log(2),0);
// Promise.resolve().then(()=>console.log(3));
// setTimeout(()=>console.log(4),1);
// console.log(5)
////////////////////////////////////////////////////////////////////////////
// const obj = {
//     a: 1,
//     b: 'hello',
//     c: {
//         d: 'world'
//     },
//     e: {
//         f: {
//             g: 100
//         }
//     }
// }

// const newObj = JSON.stringify(obj);
// const obj2 = JSON.parse(newObj)
// const obj3 = JSON.parse(JSON.stringify(obj))
// console.log(obj3)

////////////////////////////////////////////////////////////////////////////
// var f = function () {
//     console.log(1);
// }
// var execute = function (f) {
//     setTimeout(f, 1000);
// }
// execute(f);
// f = function () {
//     console.log(2);
// }



////////////////////////////////////////////////////////////////////////////
// const str = 'asdfhg';
// const str2 = 'hgfdsa';

// function equals(str, str2) {
//     let x = 0;
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < str2.length; j++) {
//             if (str[i] === str[j]) {
//                 x += 1
//             }
//         }
//     }
//     console.log(str.length)
//     if (str.length === x) {
//         return true
//     } else {
//         return false
//     }

// }
// console.log(equals(str, str2))




////////////////////////////////////////////////////////////////////////////
// function arraySum(arr) {
//     let newArr = arr.flat().flat();
//     return newArr.reduce((sum, prev) => sum + prev, 0)

//     console.log(newArr)
// }
// console.log(arraySum([[1, 2, [3, 4]], [9], [10, 12]]))
// arraySum([
//     [1, 2, [3, 4]],
//     [9],
//     [10, 12]
// ])

////////////////////////////////////////////////////////////////////////////
// const url =(number)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>console.log('Hello'), 1000);
//         resolve()
//     })
//     number().then(()=>sec(2))
//     .then(()=>sec(3))
// }

////////////////////////////////////////////////////////////////////////////
// for(var i=0; i<3; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, i*1000);
// }

////////////////////////////////////////////////////////////////////////////
// let arr =[1,2,3,4,5];
// let result = arr.filter((el)=>{
//     return console.log(el%2)
// })
// let newArr = [...arr,...arr];
// console.log(newArr)
// console.log(result)


////////////////////////////////////////////////////////////////////////////
// let str = 'google.com';
// function text(str){
// let arr = str.split('.')
// return arr[arr.length-1].toString()
// // console.log(arr)
// }
// console.log(text(str))

////////////////////////////////////////////////////////////////////////////
// function add(a, b) {
//     if (b != undefined) {
//         return a + b
//     }
//     return (c) => a + c
// }
// console.log(add(2, 5))
// console.log(add(3)(5))

// function add(a){
//     return function(b){
//         return a+b
//     }
// }
// console.log(add(2)(5))




////////////////////////////////////////////////////////////////////////////
// let obj = {a:1, b:2, c:3};
// let linkObj = obj;
// let newObj = Object.assign(obj);
// let new2Obj = {...obj};

// console.log(newObj)
// console.log(new2Obj)
// console.log(obj == new2Obj);
// console.log(newObj == new2Obj);
// console.log(obj == linkObj)

////////////////////////////////////////////////////////////////////////////
// function Person(){
//     return 'aaa'
// }

// let person2 = Person();//'aaa'
// let person1 = new Person();//Person{}

// console.log(person1)
// console.log(person2)



////////////////////////////////////////////////////////////////////////////
// const arr = [1,2,3,4,5,4,3,2,3];
// let newArr = new Set(arr);
// let thirdArr = [...newArr]
// let secArr = [];
// newArr.forEach((el)=>{
//     return secArr.push(el)
// })
// console.log(thirdArr)


////////////////////////////////////////////////////////////////////////////
// const marks = [50, 20, 70, 60, 45, 30];
// function findMin(arr){
// // return Math.min.apply(null, arr)
// return Math.min(...arr)
// }

// function findMax(arr){
//     // return Math.max.apply(null, arr)
//     return Math.max(...arr)
// }
// console.log(findMin(marks))
// console.log(findMax(marks))

// const marks = [50, 20, 70, 60, 45, 30, 80, 10];
// function findMin(arr) {
//     if (arr.length === 0) {
//         return 'no marks'
//     }
//     let min = arr[0];
//     arr.forEach(element => {
//         if (min > element) {
//             min = element
//         }
//     });
//     return min

// }

////////////////////////////////////////////////////////////////////////////
// function findMax(arr) {
//     if (arr.length === 0) {
//         return 'no marks'
//     }
//     let max = arr[0];
//     arr.forEach(element => {
//         if (max < element) {
//             max = element
//         }
//     });
//     return max

// }
// console.log(findMin(marks))
// console.log(findMax(marks))


////////////////////////////////////////////////////////////////////////////
// function capitalizeFirstLetter(str) {
//     return str.charAt(0).toUpperCase() + str.substr(1)
// }
// console.log(capitalizeFirstLetter('hello'))

////////////////////////////////////////////////////////////////////////////
// function capitalizeFirstLetter(str){
// let arr = str.split(' ');
// let newArr = arr.map((item)=>{
//     return item[0].toUpperCase() + item.substr(1)
// })
// return newArr.join(' ')
// }
// console.log(capitalizeFirstLetter('hello my friend'))

////////////////////////////////////////////////////////////////////////////
// class Bike {
//     constructor(model, color) {
//         this.model = model,
//         this.color = color
//     }
//     getDeails() {
//         return this.model + ' bike has ' + this.color + ' color'
//     }
// }
// let bike = new Bike('GT', 'black')
// console.log(bike.getDeails())

////////////////////////////////////////////////////////////////////////////
// const inData = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark';

// function queryObjectify(str) {
//     let res = {};

//     str = str.split('&');
//     str = str.map((item) => item.split('.'));
//     for (let i = 0; i < str.length; i++) {
//         let cur = res;
//         for (let j = 0; j < str[i].length; j++) {
//             let name = str[i][j];
//             if (j == str[i].length - 1) {
//                 name = name.split('=');
//                 cur[name[0]] = decodeURIComponent(name[1]);
//                 break
//             }
//             if (cur[name]) {
//                 cur = cur[name]
//             } else {
//                 cur[name] = {};
//                 cur = cur[name]
//             }
//         }

//     }
//     return res
// }

// console.log(queryObjectify(inData))

////////////////////////////////////////////////////////////////////////////
// let num = 12344338657567;

// function findLucky(num) {
//     num = [...String(num)];
//     let res = {};
//     for (let i = 0; i < num.length; i++) {
//         if (res[num[i]]) {
//             console.log(res[num[i]])
//             res[num[i]]++
//         } else {
//             res[num[i]] = 1
//         }
//     }
//     return res
// }
// console.log(findLucky(num))


////////////////////////////////////////////////////////////////////////////
// let num = 1234433899999999;
// let newArr = num.toString().split('');
// let sum = 0;
// let resultArr = [];
// for (let i = 0; i < newArr.length; i++) {
//     for (let j = 0; j < newArr.length; j++) {
//         if (newArr[i] === newArr[j]) {
//             sum += 1
//         }
//     }
//     if (newArr[i] == sum) {
//         resultArr.push(sum)

//     }
//     sum = 0;
// }
// let luckyNum = Math.max.apply(null, resultArr)
// console.log(luckyNum)
////////////////////////////////////////////////////////////////////////////
// const arr = [1,2,3,5,6,7,8];
// let reversed = [];

// for(let i = arr.length-1; i>=0; i--){
//     reversed.push(arr[i]);
// }
// console.log(reversed)


////////////////////////////////////////////////////////////////////////////
// const users = [
//     {
//         name: 'John',
//         age: 20
//     },
//     {
//         name: 'Sara',
//         age: 15
//     },
//     {
//         name: 'Mike',
//         age: 30
//     },
// ]
// let newArr = users.sort((u1, u2) => u1.age - u2.age)
// console.log(newArr)

////////////////////////////////////////////////////////////////////////////
// let x = Math.ceil(Math.random() * (6 - 1) + 1)
// console.log(x)
////////////////////////////////////////////////////////////////////////////
// function minSum(arr) {
//     let newArr = arr.sort((a, b) => a - b)
//     let result = 0;
//     let arrLen = newArr.length;
//     for (let i = 0; i < newArr.length / 2; i++) {
//         arrLen = arrLen - 1;
//         result += newArr[i] * newArr[arrLen]
//     }
//     console.log(result)
// }

// minSum([5,4,2,3])


////////////////////////////////////////////////////////////////////////////
// function findNeedle(haystack) {
//    return haystack.indexOf("needle")
//   }
//   console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))


////////////////////////////////////////////////////////////////////////////
// var number = function (array) {
//     return array.map((el, index) => {
//         return `${index+1}: ${el}`
//     })
// }
// console.log(number(["a", "b", "c"]))
////////////////////////////////////////////////////////////////////////////
// function basicOp(operation, value1, value2) {
//     let result = null;

//     operation === '+' ? result = +value1 + +value2 : result;
//     operation === '-' ? result = +value1 - +value2 : result;
//     operation === '*' ? result = +value1 * +value2 : result;
//     operation === '/' ? result = +value1 / +value2 : result;

//     return result

// }

// console.log(basicOp('+', 2, 2))



////////////////////////////////////////////////////////////////////////////
// function wordsToMarks(str){
//     const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//     return [...str].reduce((sum,letter)=> (sum += (alphabet.indexOf(letter) + 1),sum),0)
//   }

////////////////////////////////////////////////////////////////////////////
// function sum(a) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//     let summary = [];
//     if (a) {
//         const word = a.toLowerCase().split('');
//         for (let i = 0; i < alphabet.length; i++) {
//             for (let j = 0; j <= word.length; j++) {
//                 if (alphabet[i] == word[j]) {
//                     summary.push(i + 1)
//                 }
//             }
//         }
//         let result = summary.reduce((acum, prev) => {
//             return acum + prev
//         }, 0);
//         return result
//     }
// }
// console.log(sum('friendship'))

////////////////////////////////////////////////////////////////////////////
// function digitize(n) {
// // return n.toString().split('').map((el)=> +el).reverse()
// return Array.from(String(n), Number).reverse();
//    }
//    console.log(digitize(23654))

////////////////////////////////////////////////////////////////////////////
// function removeEveryOther(arr){
//   return arr.filter((item, index)=>{return index%2 == 0 })
// }
// console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))
// removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])

////////////////////////////////////////////////////////////////////////////
// const invert = array => array.map(num => -num);

////////////////////////////////////////////////////////////////////////////
// function getGrade(s1, s2, s3) {
//     let score = Math.floor((s1 + s2 + s3) / 3);
//     let result = '';
//     if (90 <= score) {
//         return result = 'A';
//     }
//     if (80 <= score) {
//         return result = 'B';
//     }
//     if (70 <= score) {
//         return result = 'C';
//     }
//     if (60 <= score) {
//         return result = 'D';
//     }
//     if (0 <= score) {
//         return result = 'F';
//     }
//     return result
// }
// getGrade(60, 60, 92)
////////////////////////////////////////////////////////////////////////////
// function growingPlant(upSpeed, downSpeed, desiredHeight) {
//     let count = 0;
//     for (let i = upSpeed; i < desiredHeight; i = i + upSpeed) {
//         i = i - downSpeed
//         count++
//     }
//     console.log(count)
//     return count
// }
// growingPlant(100, 55, 101)



////////////////////////////////////////////////////////////////////////////
// function disemvowel(str) {
//     let arr = str.split('');
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (char == 'e' || char == 'i' || char == 'a' || char == 'u' || char == 'o') {
//             arr[i] = ''
//         }
//     }
//     return arr.join('').toString()
// }
// console.log(disemvowel('This website is for losers LOL!'))
// disemvowel('This website is for losers LOL!')



////////////////////////////////////////////////////////////////////////////
// function unusualFive(a) {
//   return a.length
// }
// console.log(unusualFive('qqqqq'))

////////////////////////////////////////////////////////////////////////////
// var countSheep = function (num){
//   let string = '';
//   if(num){
//     for(let i =1; i<=num; i++){
//       string += i + ' '+'sheep...'
//     }
//   }
//   return string
// }
// countSheep(3)

////////////////////////////////////////////////////////////////////////////
// function zeroAndOne(s) {
//   let cnt = 0;
//   for (let i=0; i<s.length; i++){
//     if ( (s[i]=='0' && s[i+1]=='1') || (s[i]=='1' && s[i+1]=='0') ) i++;
//     else cnt++;
//   }
//   console.log(cnt)
//   return cnt;
// }
// zeroAndOne("110100")

////////////////////////////////////////////////////////////////////////////
// function f1(a,b){
//   console.log(a,b)
// }
// const f2 = f1.bind(null, 1);
// f2(2,3)

////////////////////////////////////////////////////////////////////////////
// function billboard(name, price = 30) {
//  return name.split('').reduce((accum, prev)=>{return accum + price},0)
//   }
// console.log(billboard('Andrei Bubeleu'))

////////////////////////////////////////////////////////////////////////////
// let arr = [
//   [7, true],
//   [5, false]
// ];

// function countLoopIterations(arr){
//   const res = [];
//   let prod = 1;
//   for (const [n, b] of arr) {
//     console.log(n)
//     console.log(b)
//     const q = n + 1 + b;
//     console.log(q)
//     res.push(prod*q);
//     prod *= q-1;
//   }
//   return res;
// }
// countLoopIterations(arr)
// console.log(countLoopIterations(arr))

////////////////////////////////////////////////////////////////////////////
// var isSquare = function (n) {
//   let num = Math.sqrt(n)
//   return Number.isInteger(num) ? true : false
// }
// console.log(isSquare(25))
// isSquare(25)

////////////////////////////////////////////////////////////////////////////
// function index(array, n){
//     return array.length >= n? Math.pow(array[n-1], n):-1
//   }
// console.log(index([1,2,3,4], 2))

////////////////////////////////////////////////////////////////////////////
// function century(year) {
//     return Math.ceil(year/100)
// }
// console.log(century(160001200))

////////////////////////////////////////////////////////////////////////////
// function century(year) {
//     let arr = year.toString().split('');
//     let result = null;
//     if (arr.length == 2) {
//         result = 1
//     }
//     if (arr.length > 2) {
//         if (arr[arr.length - 2] != 0 || arr[arr.length - 1] != 0) {
//             result = +(arr.slice(0, -2).join('')) + 1;
//         } else {
//             result = +(arr.slice(0, -2).join(''))
//         }
//     }
//     return result
// }
// console.log(century(160001210))

////////////////////////////////////////////////////////////////////////////
// function squareArea(a) {
//     let r = ((a*4) / (2 * Math.PI));
//     return Math.pow(r, 2).toFixed(2)
// }
// console.log(squareArea(2))

////////////////////////////////////////////////////////////////////////////
// const sequenceSum = (begin, end, step) => {
//         let sum = 0;
//        for(let i = begin; i<=end; i+=step){
//            sum += i
//        }
//        return sum
//    };
// sequenceSum(2, 6, 2)

////////////////////////////////////////////////////////////////////////////
// function sumTwoSmallestNumbers(numbers) {
//     let result = numbers.sort((a, b) => a - b);
//     return result[0]+result[1]
// }
// sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])


////////////////////////////////////////////////////////////////////////////
// let number = 6;

// function balancedNum(number) {
//     let result = null;
//     let arr = number.toString().split('');
//     let numSym = arr.length;
//     let lrSide = null;
//     let lefSum = [];
//     let rightSum = [];
//     let summaLeft = 0;
//     let summaRight = 0;
//     numSym % 2 == 0 ? lrSide = numSym / 2 : lrSide = Math.floor(numSym / 2)

//     for (let i = 0; i < lrSide-1; i++) {
//         lefSum.push(+arr[i]);
//     }
//     for (let j = lrSide+1; j < numSym; j++) {
//         rightSum.push(+arr[j]);
//     }
//     summaLeft = lefSum.reduce((accum, prev) => {
//         return accum + prev
//     }, 0)
//     summaRight = rightSum.reduce((accum, prev) => {
//         return accum + prev
//     }, 0)

//     summaLeft == summaRight || numSym == 1? result = "Balanced" : result = "Not Balanced"

//     // console.log(lrSide)
//     // console.log(lefSum)
//     // console.log(rightSum)
//     // console.log(summaLeft)
//     // console.log(summaRight)
//     console.log(result)
//     console.log(numSym)
//     return result
// }
// balancedNum(number)



// const array = [
//     [4.23, 6.43], 1.23, 3.444, [1.342, 3.212]
// ];

// function sortByArea(arr) {

//     let sorted = [], result = []

//     arr.forEach((e, i) => (e.length == 2) ? sorted.push([i, e[0]*e[1]]) : sorted.push([i, Math.PI*e*e]))

//     sorted.sort((a, b) => (a[1] === b[1]) ? 0 : (a[1] < b[1]) ? -1 : 1)
//       .forEach(e=> console.log(result.push(arr[e[0]])))

//     return result

//   }
// console.log(sortByArea(array))
// sortByArea(array)



// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
// sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]

////////////////////////////////////////////////////////////////////////////
// function countSheeps(arrayOfSheep) {
//     let x = 0;
//     arrayOfSheep.forEach(element => {
//         element ? x += 1 : x;
//     });
//     return x
// }
// console.log(countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]))

////////////////////////////////////////////////////////////////////////////
// function fixTheMeerkat(arr) {
// return arr.reverse()

// }
// console.log(fixTheMeerkat(["tail", "body", "head"]))

////////////////////////////////////////////////////////////////////////////
// const price = [6, 2, 5, 9, 8, 3, 6];
// const maxProfit = (price) => {
//     const result = {};
//     let minPrice = Math.min.apply(null, price);
//     let maxPrice = Math.max.apply(null, price);
//     let arr = [];
//     let profit = null;
//     for (let i = 0; i < price.length - 1; i++) {
//         let allDayProfit = []
//         for (let j = i + 1; j < price.length; j++) {
//             let curMax = price[j] - price[i];
//             allDayProfit.push(curMax)
//         }
//         profit = allDayProfit.reduce((cur, prev) => { return cur > prev ? cur : prev }, 0);
//         arr.push(profit)
//     }
//     let bestProfit = Math.max.apply(null, arr);
//     result.bestDayBuy = price.indexOf(minPrice) + 1;
//     result.bestDaySell = price.indexOf(maxPrice) + 1;
//     result.profit = bestProfit;
//     return result;
// }

// console.log(maxProfit(price))


/////////////////////////////////////////////////////////////////////////////
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min.apply(null,args)
//     }
//   }

//   const num = new SmallestIntegerFinder;
//   console.log(num.findSmallestInt([1,2,3,4,5,6]))