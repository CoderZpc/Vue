// 在html代码中引入js文件，并且<script>标签的type属性设置为'module'
// 1.导入对象中定义的变量
import { flag, sum } from './aaa.js';

if (flag) {
  console.log('小明是天才');
  console.log(sum(20, 30));

}

// 2.直接导入export定义的变量
import { num1, height } from './aaa.js';
console.log(height, num1);

// 3.导入export的function
import { mul, Person } from './aaa.js';
console.log(mul(30, 50));

const p = new Person();
p.run()

// 4.导入export default中的内容
import addr from './aaa.js'
addr(1)

// 5.统一全部导入
import * as aaa from './aaa.js'
console.log(aaa.flag);
