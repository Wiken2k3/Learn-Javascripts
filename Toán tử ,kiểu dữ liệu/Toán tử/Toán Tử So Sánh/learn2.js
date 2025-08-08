/** 
 * ===   so sánh bằng tuyệt đối (dữ liệu và kiểu dữ liệu)
 * !==   so sánh khác tuyệt đối (dữ liệu và kiểu dữ liệu)
 */


//VD1
var a = 1;
var b = 1;

console.log(a == b);  // true


//VD 2
var c = 1;
var d = '1';

console.log(c== d);  // true

//VD 3
var e = 1;
var f = '1';

console.log(e === f);  // false (bằng dữ liệu , khác kiểu dữ liệu)

//VD4
var h = 1;
var g = '1';

console.log(h !== g);  // true  (bằng nhau ,khác kiểu dữ liệu)