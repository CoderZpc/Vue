/* 
 * 需求：
 * 1.取出所有小于500的数字
 * 2.将所有小于500的数字*2
 * 3.求和
*/
const nums = [10, 153, 658, 20, 1456, 320, 546, 25, 874]
/*
 * 
 * 一般做法
 * 
*/
let new1Nums = []
for (let n of nums) {
  if (n < 500) {
    new1Nums.push(n)
  }
}
console.log(new1Nums)
let new2Nums = []
for (let n of new1Nums) {
  new2Nums.push(n * 2)
}
console.log(new2Nums)
let total1 = 0
for (let n of new2Nums) {
  total1 += n
}
console.log(total1)

/*
 * 
 * 高阶函数
 * 
 *
*/

/*
 * filter中的回调函数有一个要求：必须返回一个Boolean值
 * true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
 * false：当返回false时，函数内部会过滤这次的n
 * 
 * map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值，按照原始数组元素顺序依次处理元素。
 * 
 * reduce作用：对数组中所有内容汇总
*/
// 1.filter函数的使用
let newNums1 = nums.filter(function (n) {
  return n < 500
})
console.log(newNums1);

// 2.map函数的使用
let newNums2 = newNums1.map(function (n) {
  return n * 2
})
console.log(newNums2);

// 3.reduce函数的使用
let total2 = newNums2.reduce(function (preValue, n) {
  return preValue + n
}, 0)// 初始化第二个参数的值为0
console.log(total2);

// 函数式编程
let total3 = nums.filter(function (n) {
  return n < 500
}).map(function (n) {
  return n * 2
}).reduce(function (preValue, n) {
  return preValue + n
}, 0)
console.log(total3);

// 一行代码(箭头函数)
let total4 = nums.filter(n => n < 500).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total4);