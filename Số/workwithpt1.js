/**Để vượt qua thử thách này, hãy thực hiện theo các yêu cầu sau:

Tạo hàm isNumber, hàm này dùng với mục đích kiểm tra xem một 
giá trị có phải là 1 số hay không
Hàm isNumber có 1 tham số, hãy đặt tên nó là value
Khi value có kiểu số, hàm sẽ trả về true, ngược lại trả về false */





function isNumber(value){
    return typeof value === 'number' && !isNaN(value);
}


// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

/**Mục tiêu bài tập
Viết một hàm có tên isNumber(value) dùng để kiểm tra xem một giá trị có phải là kiểu số hợp lệ trong JavaScript hay không.

🧩 1. Kiến thức áp dụng từ bài học
✅ Từ phần "Tạo giá trị Number":
Có 2 cách tạo số:

Cách 1: Dùng trực tiếp → var age = 18; (nên dùng)

Cách 2: Dùng new Number(9) → tạo ra object, không phải number thật sự.

✅ Từ phần "Kiểm tra phép chia có hợp lệ"
var result = 20 / 'ABC'; 
console.log(isNaN(result)) // true
→ Đây là ví dụ giúp bạn nhận biết giá trị không hợp lệ bằng cách dùng hàm isNaN().

🧪 2. Viết và giải thích hàm isNumber(value)
📌 Viết hàm
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
🧠 Giải thích từng phần:
1. typeof value === 'number'
Dùng để kiểm tra xem value có đúng kiểu dữ liệu là number hay không.

Ví dụ:
typeof 10         // 'number'
typeof '10'       // 'string'
typeof new Number(5)  // 'object'
✅ Nếu không phải kiểu number, trả về false luôn.

2. !isNaN(value)
isNaN() kiểm tra xem giá trị có phải là NaN hay không.

Lưu ý: NaN cũng là một kiểu number nhưng nó không hợp lệ trong tính toán.
typeof NaN     // 'number'
isNaN(NaN)     // true → Không hợp lệ
→ Vì thế, bạn cần thêm !isNaN(value) để loại bỏ các giá trị không hợp lệ.

✅ Kết hợp 2 điều kiện
typeof value === 'number' && !isNaN(value)
→ Chỉ trả về true nếu value vừa là kiểu number, vừa không phải NaN.

 */