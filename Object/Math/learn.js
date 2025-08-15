/**MATH OBJECT
- Math.PI       //trả về số PI
- Math.round()  //làm tròn số
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.min()
- Math.max()
 */

console.log(Math.PI)
console.log(Math.round(1,4))    //làm tròn số
console.log(Math.abs(-4))   //chuyển thành giá trị tuyểt đối hoặc được hiểu là biến số âm thành số dương
console.log(Math.ceil(4.1))    //làm tròn trên
console.log(Math.floor(4.999))  //làm tròn dưới
console.log(Math.random())      //tạo ra dãy số thập phân nhỏ hơn 1 ngẫu nhiên (ứng dụng để đặt tên ngẫu nhiên hoặc tạo ra dãy số ngẫu nhiên)
console.log(Math.floor(Math.random()*10))   //random kết hợp với floor để tạo ra số từ 1 đến 10 ngẫu nhiên
console.log(Math.min(-100, 1, 2, 80 , 0))   //trả về số nhỏ nhất
console.log(Math.max(-100, 1, 2, 80 , 0))   //trả về số lớn nhất


//ứng dụng làm phần thưởng (random)
var random = Math.floor(Math.random()*5);

var bonus = [       //tỉ lệ đều
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
    '60 coin',
    '70 coin',
    '80 coin',
    '90 coin',
    '100 coin'
];
console.log(bonus[random]);



//tỉ lệ không đều 
var random = Math.floor(Math.random()*100);
if (random < 5 ){
    console.log('Nâng cấp thành công! ');
}