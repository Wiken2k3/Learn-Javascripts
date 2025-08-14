/**Để vượt qua thử thách này, bạn hãy tạo một object constructor Student 
 * gồm: firstName, lastName. Sau đó, định nghĩa thêm phương thức là getFullName,
 *  phương thức này sẽ trả về tên đầy đủ của sinh viên.

Giữa firstName và lastName cần có 1 khoảng trắng (1 dấu space). */

// Làm bài tại đây
function Student(firstName, lastName) { 
    this.firstName = firstName;
    this.lastName = lastName;  
}

Student.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);      // 'Long'
console.log(student.lastName);       // 'Bui'
console.log(student.getFullName());  // 'Long Bui'


/**Tạo object constructor Student
Thuộc tính & Phương thức của Student đúng yêu cầu
 */