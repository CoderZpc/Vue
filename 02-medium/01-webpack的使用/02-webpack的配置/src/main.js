// 1.使用commonJs的模块化规范导入
const { add, mul } = require('./js/mathUtils.js');

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化规范导入
import { name, age, height } from './js/info'    //可以不加文件后缀名
console.log(name, age, height);
