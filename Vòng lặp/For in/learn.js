// Lấy ra key của đối tượng 
/**for...in được dùng để duyệt qua các key 
(chỉ số hoặc thuộc tính) của một đối tượng hoặc mảng hoặc chuỗi. */

var myInfo = {
    name : 'Tuan Tran',
    age : 18,
    address : 'HCM City',
}
for (var key in myInfo){
    console.log(key);
}



//kiểu string 
var languages = [
    'Java',
    'HTML',
    'CSS'
];
for (var key in languages){
    console.log(key);
}

//vd khác
var myString = 'Javascript';

for (var key in myString){
    console.log(myString [key]);
}