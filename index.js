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