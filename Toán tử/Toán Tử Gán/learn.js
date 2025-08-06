/** Toán tử gán
 * Toán tử       Ví dụ            Tương đương
 * =              a = y            a = y
 * +=             a += y           a = a + y
 * -=             a -= y           a = a - y
 * *=             a *= y           a = a * y
 * /=             a /= y           a = a / y
 * %=             a %= y           a = a % y
 * **=            a **= y          a = a ** y
*/ 

// Vi dụ về toán tử (1)
var a = 1;
a = a + 1; // Tương đương với a += 1

console.log(a); // 2

// Vi dụ về toán tử (2)
var b = 5;
b += 2; // Tương đương với b = b + 2        
console.log(b); // 7


// Vi dụ về toán tử (3)
var c = 10;         
c -= 3; // Tương đương với c = c - 3
console.log(c); // 7

// Vi dụ về toán tử (4)
var d = 4;      
d *= 2; // Tương đương với d = d * 2
console.log(d); // 8

// Vi dụ về toán tử (5)
var e = 20;
e /= 4; // Tương đương với e = e / 4
console.log(e); // 5

// Vi dụ về toán tử (6)
var f = 15; 
f %= 4; // Tương đương với f = f % 4
console.log(f); // 3

// Vi dụ về toán tử (7)
var g = 2;
g **= 3; // Tương đương với g = g ** 3
console.log(g); // 8


//Prefix & Postfix
var x = 5;
var output = x++; // output = 5, x = 6
console.log('output', output);// 5 
console.log('x after output', x); // 6

// Ví dụ về toán tử prefix và postfix
var number = 6 ;
var output1 = ++number *2 - number-- *2; // output1 = 7 * 2 - 7 * 2 = 14 - 14 = 0
console.log('output1', output1); // 0
console.log('number after output1', number); // 6

// ++a trả về kết quả sau khi cộng
// a++ trả về kết quả trước khi cộng
// --a trả về kết quả sau khi trừ
// a-- trả về kết quả trước khi trừ
