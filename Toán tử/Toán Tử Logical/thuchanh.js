var a = true;  // a = true
var b = false; // b = false
var c = a || b; //c= true (1 trong 2 true là true)
var d = b && c; // d= false (1 trong 2 false là false)

console.log(c, d); // Output: true false

//Giải thích
// Với toán tử hoặc (||), nếu xuất hiện ít nhất 1 vế bằng true thì kết quả trả về sẽ là true.

// Còn với toán tử và (&&), nếu xuất hiện ít nhất 1 vế bằng false thì kết quả trả về sẽ là false.