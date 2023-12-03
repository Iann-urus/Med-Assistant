// 👇️ named import
// import {Car} from './test.js';

const car = new Car('Ford Mustang', 1997);

console.log(car.name); // 👉️ 'Alice'
console.log(car.year); // 👉️ 1997
let car_yr = car.year;
car.increaseyear();
console.log("Cars age in a decade-");
console.log(car.year - car_yr); // 👉️ 1997-2007
