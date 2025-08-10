// Return trong hàm 
confirm('Message'); //in ra thông báo confirm

///// 

var isConfirm = confirm('Message'); 

console.log(isConfirm);  //Hàm confirm bật lên 1 hộp thoại (sẽ không thực thi những câu lệnh ở sau)

////
function cong( a , b ){
    return a + b;   //trả về giá trị của biến bên phải return,các dòng code cùng với return sẽ bị bỏ qua
}   //return có thể trả về bất cứ kiểu dữ liệu gì
var result = cong (2 ,5);
console.log(result)