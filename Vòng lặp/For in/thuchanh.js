/**Bài tập sử dụng for...in

Để vượt qua thử thách này, trước tiên, hãy quan sát code cho trước 
và kết quả mong đợi (bên code editor).

👉 Hãy hoàn thành hàm sao cho kết quả được như kết quả mong đợi. */

function run(object) {
    var result = [];

    for (var key in object) {
        var value = object[key];
        var sentence = 'Thuộc tính ' + key + ' có giá trị ' + value;
        result.push(sentence);
    }

    return result;
}


// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

/**Giải thích từng dòng:
👉 Dòng 1:
function run(object) {


📝 Đây là định nghĩa hàm có tên là run, nhận vào một tham số object.

👉 Dòng 2:
    var result = [];


📦 Mình tạo một mảng rỗng result để chứa các kết quả sau này.
(Vì đề bài yêu cầu trả về một mảng các chuỗi mô tả.)

👉 Dòng 3:
    for (var key in object) {


🔁 Đây là vòng lặp for...in dùng để lấy từng key trong object.

👉 Ví dụ:
Với object = { name: 'Nguyen Van A', age: 16 }
thì vòng lặp sẽ chạy 2 lần với:

key = 'name'

key = 'age'

👉 Dòng 4:
        var value = object[key];


📌 Dùng object[key] để lấy giá trị (value) tương ứng với key.

👉 Ví dụ:

object['name'] ➜ 'Nguyen Van A'

object['age'] ➜ 16

👉 Dòng 5:
        var sentence = 'Thuộc tính ' + key + ' có giá trị ' + value;


📝 Mình tạo ra một chuỗi mô tả theo yêu cầu đề bài.
➡️ Ghép chuỗi bằng dấu +

👉 Ví dụ:

'Thuộc tính ' + 'name' + ' có giá trị ' + 'Nguyen Van A'
➜ 'Thuộc tính name có giá trị Nguyen Van A'

👉 Dòng 6:
        result.push(sentence);


📥 Đưa chuỗi vừa tạo vào trong mảng result.

👉 Dòng 7:
    }


🔚 Kết thúc vòng lặp.

👉 Dòng 8:
    return result;


📤 Trả về mảng kết quả sau khi vòng lặp chạy xong.

✅ Kết quả khi chạy:
console.log(run({ name: 'Nguyen Van A', age: 16 }));


➡️ In ra:

[
  'Thuộc tính name có giá trị Nguyen Van A',
  'Thuộc tính age có giá trị 16'
]

📌 Ghi nhớ:
Cú pháp	Ý nghĩa
for (var key in obj)	    Duyệt từng key trong object
obj[key]	                Truy cập giá trị (value) theo key
array.push(x)	            Thêm phần tử vào cuối mảng */