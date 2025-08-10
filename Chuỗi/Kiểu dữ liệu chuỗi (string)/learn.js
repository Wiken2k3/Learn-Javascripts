/** Chuỗi trong JavaScript */

// Cách Tạo Chuỗi :
//1.Nên dùng vì nhanh hơn *
var fullName = 'Tuan Tran'; 

//2.không nên vì dùng String nên kiểu dữ liệu sinh ra là object chứ không còn là chuỗi nữa
var fullName = new String ('Tuan Tran');

alert(fullName);


//3. Kiểm tra data type:
var fullName = 'Tuan Tran';

console.log(typeof fullName)  // thêm typeof trước chuỗi



// Sử dụng dấu nháy trong chuỗi 
var fullName = 'Tuan Tran la mot \'developer\'';  //trong chuỗi thì dấu \' sẽ là ' và \" sẽ là "

console.log(fullName)  // in ra : Tuan Tran la mot 'developer'

// =>> Đây là Backlach (\) ; \\ = \ (tương tự với ')



// Xem độ dài chuỗi : (length)
var fullName = 'Tuan Tran la mot developer'; 

console.log(fullName.length)

// cách xuống dòng:
var fullName = 
'Tuan Tran la mot developer'; 

console.log(fullName.length)

//cách 2 
var fullName = 'Tuan Tran '
+'la mot developer'
+'la mot developer'
; 

console.log(fullName.length)


/** Template string ES6 */
var firstName = 'Tuan';
var lastName = 'Tran';

console.log('Toi la: '+ firstName +''+ lastName ) // Toi la Tuan Tran


// Dùng template string 
// => 

var firstName = 'Tuan';
var lastName = 'Tran';

console.log(`Toi la : ${firstName} ${lastName}` ) // Toi la Tuan Tran (lưu ý giá trị phải là string)