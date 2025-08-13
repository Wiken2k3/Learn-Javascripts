/**
✅ TIPS ÁP DỤNG CƠ BẢN:
Việc bạn muốn làm (theo thầy dạy)	Cách viết trong function	Mẹo nhớ
Lấy phần tử đầu	                    array[0]	                📌 Chỉ số đầu tiên luôn là 0
Lấy phần tử cuối	                array[array.length - 1] hoặc array.slice(-1)[0]	📌 length - 1 là vị trí cuối
Cắt một phần của mảng (không thay đổi mảng gốc)	            array.slice(start, end)	📌 slice = cắt mềm, không làm hỏng mảng
Xoá, chèn, thay phần tử trong mảng (thay đổi mảng gốc)	    array.splice(...)	    ⚠️ splice = cắt cứng, thay đổi mảng gốc
Thêm phần tử vào cuối mảng	                                array.push(...)	        📌 push = đẩy vào cuối
Thêm phần tử vào đầu mảng	                                array.unshift(...)	📌 unshift = đẩy lên đầu
Xoá phần tử đầu tiên	                                    array.shift()	    ⚠️ Thay đổi mảng
Xoá phần tử cuối cùng	                                    array.pop()	        ⚠️ Thay đổi mảng
Nối mảng	                                                array1.concat(array2)	📌 concat = gắn thêm
Biến mảng thành chuỗi	                    array.join(',') hoặc array.toString()	📌 join = nối lại bằng ký tự

 */
// ✅ TIPS CHUYỂN TỪ console.log() → function
// ✅ Biến mà bạn log ra chính là đối số của function
// Ví dụ:
var fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]);

// → Chuyển thành:
function getFirstElement(array) {
    return array[0];
}
// ✅ Bất kỳ đoạn xử lý nào bạn dùng cho console.log thì copy nguyên vào return trong function
// Ví dụ:
console.log(fruits.slice(-1)[0]);
// → Chuyển thành:
function getLastElement(array) {
    return array.slice(-1)[0];
}
// ✅ Bạn không cần biết “array” là gì — cứ xử lý nó giống như cách bạn đã từng xử lý với biến fruits, animals, v.v.

// ✅ Ví dụ cụ thể:
// Bài thầy dạy
var animals = ['Monkey', 'Tiger', 'Elephant'];
console.log(animals[0]);
// Áp dụng vào function
function getFirstElement(array) {
    return array[0];
}
// 🧠 Tổng kết:
// Khi bạn làm việc với function, hãy nghĩ như thế này:

// "Thay vì xử lý trên biến cụ thể, mình sẽ viết cách xử lý đó thành công thức, để có thể dùng lại nhiều lần cho bất kỳ mảng nào."