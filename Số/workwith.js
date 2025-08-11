/**Làm việc với số
1. Tạo giá trị Number
- Các cách tạo
- Dùng cách nào ? Tại sao ?
- Kiểm tra data type 

2. Làm việc với Number
- To string
- To Fixed
 */


//1.Tạo Giá Trị Number
//Cách 1 (nên dùng)*
var age = 18;
var PI = 3.14;

//Cách 2 (tránh dùng)
var otherNumber = new Number(9);

// Kiểm tra phép chia có hợp lệ không
var result = 20 / 'ABC';
console.log(isNaN(result))  //true (là không hợp lệ)


var result1 = 20 / 1;
console.log(isNaN(result1))  // false (hợp lệ)

//KEYWORD : Javascript numvber methods



/**2. Làm việc với Number
- To string
- To Fixed (làm tròn số thập phân)
 */

var age = 18;
var PI = 3.140000;
//To String
console.log(age.toString())     //chuyển đổi kiểu number thành kiểu string

//To Fixed
console.log(PI.toFixed())       
//3 (chuyển về kiểu string và làm tròn số thập phân,nhỏ hơn 0,5 thì sẽ làm tròn dưới, từ >= 0,5 thì sẽ thành trên)

console.log(PI.toFixed(2))  //=> sẽ rút gọn còn 2 số thập phân ; in ra 3,14