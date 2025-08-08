// Ví dụ toán tử --
// Cập nhật tháng 3 năm 2022

// Bên file main.js có sử dụng những ví dụ được nêu 
// ra ở bài trước. Các bạn hãy mở tab Console 
// theo video hướng dẫn dưới đây để xem kết quả và 
// khám phá cách hoạt động của các toán tử này nhé.


// #1 Sử dụng ++ làm hậu tố
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
console.log(d);


// #2 Sử dụng -- làm hậu tố 
var a = 5;
a--; // Giảm giá trị của a lên 1, tương đương với a = a - 1
console.log(a); // 4

a--; // Tiếp tục Giảm giá trị của a lên 1
console.log(a); // 3

// Sau mỗi khi sử dụng toán tử --, giá trị của biến number được Giảm lên 1. Có vẻ khá dễ dàng để hiểu cách hoạt động của nó phải không?

// Tuy nhiên, hãy xem xét thêm ví dụ sau:

var b = 10;

console.log(b--); // In ra giá trị của b trước khi Giảm, nên sẽ in ra 10
console.log(b); // In ra giá trị của b sau khi Giảm, nên sẽ in ra 9

console.log(b--); // In ra giá trị của b trước khi Giảm, nên sẽ in ra 10
console.log(b); // In ra giá trị của b sau khi Giảm, nên sẽ in ra 9


// #2 Sử dụng -- làm tiền tố
// Bây giờ, chúng ta sẽ xem xét cách sử dụng toán tử -- làm tiền tố
// Ở ví dụ này, chúng ta sử dụng -- làm tiền tố. Tuy nhiên, kết quả trông sẽ không khác gì khi dùng -- làm hậu tố:
var c = 5;
--c; // Giảm giá trị của c xuống 1, tương đương với c = c - 1
console.log(c); // 4

--c; // Tiếp tục giảm giá trị của c xuống 1
console.log(c); // 3


// Nhưng khi xem xét kỹ hơn, các bạn sẽ nhìn ra điểm khác:
var d = 10;

console.log(--d); // In ra giá trị của d sau khi Giảm, nên sẽ in ra 9
console.log(d); // In ra giá trị của d sau khi Giảm, nên sẽ in ra 9

console.log(--d); // In ra giá trị của d sau khi Giảm, nên sẽ in ra 8
console.log(d);