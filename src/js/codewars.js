// ?=================================================
// function filter_list(l) {
//   return l.filter(str => typeof str != 'string');
//   // Return a new array with the strings filtered out
// }
// ?=================================================
// function getSum(a, b) {
//   if (a == b) return a;
//   if (a < b) {
//     return a + getSum(a + 1, b);
//   } else {
//     return a + getSum(a - 1, b);
//   }
//   //Good luck!
// }
// console.log('=', getSum(1, 1)); //1 (1=)
// console.log('=', getSum(1, 2)); //2 (1+3)
// console.log('=', getSum(1, 3)); //6 (?) (1+2+3)
// console.log('=', getSum(2, 1)); //3 (2+1)
// console.log('=', getSum(2, 2)); //2 (2=2)
// console.log('=', getSum(2, 3)); //5 (2+3)
// console.log('=', getSum(0, 3)); //6 (?) (1+2+3)
// console.log('=', getSum(2, 5)); //14 (2+3+4+5)

// ?=================================================
// *Самое короткок слово
// function findShort(s) {
//   // return s.split(' ').reduce((a, b) => (b.length < a.length ? b : a)).length;
//   //   return Math.min.apply(
//   //     null,
//   //     s.split(' ').map(w => w.length),
//   //     );
//   return Math.min(...s.split(' ').map(s => s.length));
// }
// console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

// ?=================================================
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// function arrayDiff(a, b) {
//   //   return a.filter(e => !b.includes(e));
//   const array_diff = (a, b) => a.filter(x => b.indexOf(x) === -1);
// }
// console.log(arrayDiff([3, 4], [3]));

// ?=================================================
// var countBits = function (n) {
//   // make an array with the bit result
//   const base = n.toString(2).split('');

//   // make a sum with the array and make the index a Number
//   const result = base.reduce((sum, num) => sum + Number(num), 0);

//   return result;
// };
// console.log(countBits(10));
// console.log(countBits(1234));
// ?=================================================
// function accum(s) {
//   return s
//     .split(' ')
//     .map(word => word.split('').join('-'))
//     .join(' ');
//   // your code
// }
// console.log(accum('abcd'));
// // ?=================================================
