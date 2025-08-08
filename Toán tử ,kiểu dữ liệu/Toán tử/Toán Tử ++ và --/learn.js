// Toán tử ++
// Toán tử ++ giúp tăng giá trị của một biến mang giá trị số lên 1. Có 2 cách để sử dụng toán tử ++ là:

// Dùng làm hậu tố: variable++ (toán tử nằm sau biến)
// Dùng làm tiền tố: ++variable (toán tử nằm trước biến)
// #1 Sử dụng ++ làm hậu tố
// Ở đây, chúng ta sẽ xét ví dụ sử dụng toán tử ++ làm hậu tố trước (vì trong thực tế, chúng ta thường dùng kiểu hậu tố nhiều hơn):

var a = 5;
a++; // Tăng giá trị của a lên 1, tương đương với a = a + 1
console.log(a); // 6

a++; // Tiếp tục tăng giá trị của a lên 1
console.log(a); // 7

// Sau mỗi khi sử dụng toán tử ++, giá trị của biến number được tăng lên 1. Có vẻ khá dễ dàng để hiểu cách hoạt động của nó phải không?

// Tuy nhiên, hãy xem xét thêm ví dụ sau:

var b = 10;

console.log(b++); // In ra giá trị của b trước khi tăng, nên sẽ in ra 10
console.log(b); // In ra giá trị của b sau khi tăng, nên sẽ in ra 11

console.log(b++); // In ra giá trị của b trước khi tăng, nên sẽ in ra 11
console.log(b); // In ra giá trị của b sau khi tăng, nên sẽ in ra 12


// #2 Sử dụng ++ làm tiền tố
// Bây giờ, chúng ta sẽ xem xét cách sử dụng toán tử ++ làm tiền tố
// Ở ví dụ này, chúng ta sử dụng ++ làm tiền tố. Tuy nhiên, kết quả trông sẽ không khác gì khi dùng ++ làm hậu tố:
var c = 5;
++c; // Tăng giá trị của c lên 1, tương đương với c = c + 1
console.log(c); // 6

++c; // Tiếp tục tăng giá trị của c lên 1
console.log(c); // 7


// Nhưng khi xem xét kỹ hơn, các bạn sẽ nhìn ra điểm khác:
var d = 10;

console.log(++d); // In ra giá trị của d sau khi tăng, nên sẽ in ra 11
console.log(d); // In ra giá trị của d sau khi tăng, nên sẽ in ra 11

console.log(++d); // In ra giá trị của d sau khi tăng, nên sẽ in ra 12
console.log(d); // In ra giá trị của d sau khi tăng, nên sẽ in ra 12

// Toán tử - -
// Cách hoạt động tương tự như toán tử ++, điểm khác biệt là thay vì cộng thêm 1, thì toán tử -- sẽ trừ đi 1.


// Tổng kết
// x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
// ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
// x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
// --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảm