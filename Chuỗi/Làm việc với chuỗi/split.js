/**Cho trước chuỗi coursesStr chứa tên các khóa học 
cách nhau bởi dấu ,.

Bạn hãy viết hàm strToArray nhận vào 1 tham số là str 
và trả về 1 mảng chứa tên các khóa học.

Gợi ý: Bạn có thể sử dụng phương thức split đã được học ở bài trước. */


function strToArray(str){
    var courses =   str.split(',');
    for (var i = 0; i < courses.length; i++) {
        courses[i] = courses[i].trim(); // Loại bỏ khoảng trắng
    }
    return courses;
}

var coursesStr = 'HTML , CSS , Javascript, ReactJS';
var result = strToArray(coursesStr);
console.log(result);

// hàm `stringToArray` đáp ứng yêu cầu đề bài

// // Bước 1: Định nghĩa hàm
// function strToArray(str) {
//     var courses = str.split(','); // Tách theo dấu phẩy
//     for (var i = 0; i < courses.length; i++) {
//         courses[i] = courses[i].trim(); // Loại bỏ khoảng trắng
//     }
//     return courses; // Trả về mảng sau khi xử lý
// }

// // Bước 2: Gọi hàm
// var coursesStr = 'HTML , CSS , Javascript , ReactJS';
// var result = strToArray(coursesStr);

// console.log(result);
// // Output: ["HTML", "CSS", "Javascript", "ReactJS"]
