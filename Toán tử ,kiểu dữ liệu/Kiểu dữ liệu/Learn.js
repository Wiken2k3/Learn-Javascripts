/**
 * Kiểu dữ liệu trong JS

1. Dữ liệu nguyên thuỷ -Primitive Data
- Number (số)
- String 
- Boolean
- Undefined
- Null
- Symbol

2. Dữ liệu phức tạp -Complex Data
- Function (hàm) nhiều phương thức và thuộc tính so với dl nguyên thuỷ
- Object   

*/


// Number type
var a = 1; 
var b = 2;
var c = 1.5; 

console.log(typeof a)  // kiểm tra kiểu dữ liệu cho từng biến

//String type : được bao quanh bởi nháy đơn hoặc nháy kép
var fullName = "Quoc Tuan";
var lastName = 'Tran';

console.log(typeof fullName)   // kiểm tra kiểu dữ liệu cho từng biến
//Boolean type : Lưu giá trị đúng hay sai (on hay off)
var isSuccess = true;
var isSuccess = false;

console.log(typeof isSuccess)   // kiểm tra kiểu dữ liệu cho từng biến
// Undefined :Dữ liệu không gắn biến 
var age;

console.log(typeof age)   // kiểm tra kiểu dữ liệu cho từng biến
// Null : nothing , không có gì (in ra)
var isNull = null;

console.log(typeof isNull)     // kiểm tra kiểu dữ liệu cho từng biến  =Object 
// Symbol  
var id = Symbol('id');  //unique : duy nhất
var id2 = Symbol('id2'); //khác với id1

console.log(typeof id)   // kiểm tra kiểu dữ liệu cho từng biến
//Dữ liệu phức tạp -Complex Data
// - Function (hàm) nhiều phương thức và thuộc tính so với dl nguyên thuỷ
var myFunction = function(){  // Function tự định nghĩa  (có thể gọi được ,viết được một số thứ)
    alert('Hi xin chào các bạn nhé !'); 
}
myFunction()


console.log(typeof myFunction)   // kiểm tra kiểu dữ liệu cho từng biến
// - Object type

//Object
var myObject = {   //Object sẽ mở và đóng ngoặc nhọn sau đó là key và value thì trong đó là object
    name: 'Tuan Tran',
    age : 20,
    adress :'Ho Chi Minh city'
}

console.log('myObject',myObject);  //in ra label myObject

console.log(typeof myObject)   // kiểm tra kiểu dữ liệu cho từng biến
// Array  (key và value sẽ tự động tăng)
var myArray = [
    'Javascript',
    'PHP',
    'ReactJS'
];
console.log(myArray);

console.log(typeof myArray)   // kiểm tra kiểu dữ liệu cho từng biến





