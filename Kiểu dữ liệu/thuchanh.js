var a = '1';
var b = 2;

var c = typeof a;  //string
var d = typeof b;  //number 
var e = typeof d;  //number

console.log(c, d, e) // Output: string number string

// typeof của 1 số sẽ trả về 'number'.

// typeof của 1 chuỗi sẽ trả về 'string'.

// Chú ý: Kết quả trả về của typeof sẽ luôn là 1 chuỗi, vậy nên typeof của d sẽ là 'string'.