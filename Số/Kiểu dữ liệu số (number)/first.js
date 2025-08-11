/** Kiểu dữ liệu số (number) 
Kiểu số - Number
JavaScript có 2 loại số chính:

1.1. Số thông thường (Number)
-Là loại số phổ biến nhất, chiếm hầu hết các trường hợp trong JS.

-Được lưu trữ theo chuẩn IEEE-754 64-bit, tức là số thực (số phẩy động) — 
có thể là số nguyên (vd: 5) hoặc số thập phân (vd: 3.14).

1.2. Số nguyên lớn (BigInt)
-Dùng khi bạn cần làm việc với số nguyên rất lớn (vượt quá giới hạn của kiểu Number).

-Bài này không học về BigInt, chỉ tập trung vào số thông thường.
*/


/** 2. Cách khai báo số
Bạn có thể khai báo số trực tiếp: */
var million = 1000000;

//Hoặc viết ngắn gọn hơn bằng ký hiệu e (khoa học):
var million = 1e6; // 1 nhân 10 mũ 6 = 1.000.000
var billion = 2e9; // 2 nhân 10 mũ 9 = 2.000.000.000


/** 3. Đối tượng Number trong JavaScript
Number là một đối tượng tích hợp sẵn, cung cấp các phương thức (hàm) để làm việc với kiểu số. 
3.1. Một số phương thức thường dùng
Phương thức	Chức năng

Number.isFinite(value)	    Kiểm tra xem giá trị có phải là số hữu hạn (không phải Infinity hay NaN)
Number.isInteger(value)	    Kiểm tra xem giá trị có phải là số nguyên
Number.parseFloat(string)	Chuyển chuỗi thành số thực (có thể có phần thập phân)
Number.parseInt(string)	    Chuyển chuỗi thành số nguyên
number.toFixed(n)	        Làm tròn số đến n chữ số sau dấu thập phân, trả về chuỗi
number.toString()	        Chuyển số thành chuỗi
*/

//4. Ví dụ minh họa
//🔍 Number.isFinite()
Number.isFinite(2 / 0); // false (vì 2/0 = Infinity)
Number.isFinite(20 / 5); // true (kết quả là 4)
Number.isFinite(0 / 0); // false (vì 0/0 = NaN)

//🔍 Number.isInteger()
Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false


//🔍 Number.parseFloat()

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34 (chỉ lấy phần đầu)
Number.parseFloat('18 is my age') // 18

//🔍 Number.parseInt()

Number.parseInt('10.00') // 10
Number.parseInt('237.22') // 237 (bỏ phần thập phân)
Number.parseInt('18 is my age') // 18

//🔍 toFixed()

var num = 1234.56789;

num.toFixed();     // '1235' (làm tròn tới số nguyên)
num.toFixed(1);    // '1234.6'
num.toFixed(6);    // '1234.567890'

//🔍 toString()

(11).toString();      // '11'
(17.3).toString();    // '17.3'

