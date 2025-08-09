/**
Truthy và Falsy là gì?

Truthy - to bool is true
Bất cứ giá trị nào trong Javascript khi chuyển đổi 
sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy.

Các giá trị 1, ['BMW'], { name: 'Miu' } và 'hi' được đề cập 
trong ví dụ dưới đây là Truthy vì khi chuyển sang Boolean ta nhận được giá trị true.
 */

console.log(Boolean(1)) // true
console.log(Boolean(['BMW'])) // true
console.log(Boolean({ name: 'Miu' })) // true

console.log(!!'hi') // true

/** Giải thích:
!! là gì? Đơn giản thôi. Toán tử ! là toán tử not (phủ định) nên !! 
là 2 lần phủ định, mà 2 lần phủ định lại trở thành "khẳng định". Trong Javascript 
thì đây là một "tip" để convert (chuyển đổi) mọi kiểu dữ liệu khác sang Boolean.
 */


console.log(!!1) // true
console.log(!!'f8') // true
console.log(!!['Mercedes']) // true

/** Giải thích :
Thêm !! phía trước các giá trị truthy sẽ luôn trả về true.
 */


/**
 Falsy - to bool is false
Bất cứ giá trị nào trong Javascript khi chuyển đổi sang 
kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.

Trong Javascript có 6 giá trị sau được coi là Falsy:

false
0 (số không)
'' or "" (chuỗi rỗng)
null
undefined
NaN
 */

console.log(!!false) // false
console.log(!!0) // false
console.log(!!'') // false
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!NaN) // false

/** Chú ý
Nội dung đã đề cập phía trên đã đầy đủ khi nói về Truthy và Falsy trong Javascript. 
Tuy nhiên mình vẫn cần nhấn mạnh lại với các bạn rằng:

Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, 
kể cả những giá trị sau:

'0' (một chuỗi chứa số không)
' ' (một chuỗi chứa dấu cách)
'false' (một chuỗi chứa từ khóa false)
[] (một array trống)
{} (một object trống)
function(){} (một hàm "trống")
Một số người chuyển từ ngôn ngữ khác sang rất có thể sẽ bị nhầm [] (mảng "rỗng") là falsy, bởi vì trong ngôn ngữ họ đã học trước đó [] là falsy.

Với những người hiểu nhầm [] là falsy sẽ gặp trường hợp khó hiểu sau:
 */
var cars = [] // Dù là mảng "rỗng" vẫn là truthy

if (!cars) {
    // Họ sẽ thắc mắc: "Tại sao lại không lọt vào đây?"
}
//Vì [] là truthy nên !cars sẽ trả về false. Câu lệnh if sẽ nhận được kết quả 
// của mệnh đề so sánh là false,
//  vì vậy đoạn mã trong if trên sẽ không được lọt vào.


/**Ngoại lệ? - document.all
Trong Javascript (phía trình duyệt) sẽ có sẵn một đối tượng document, và khi bạn thử !!document.all sẽ trả về false. Chẳng lẽ document.all cũng là falsy hay sao?

Bản thân mình cũng thắc mắc điều này nên mình đã search Google "Why document.all is falsy?" và mình đã tìm được câu trả lời tại đây.

Tóm tắt câu trả lời:

document.all là một ngoại lệ chính thức duy nhất theo đặc tả ECMA (phiên bản 5). Đặc tả này mô tả toàn bộ các object khi chuyển sang boolean sẽ là true. Tuy nhiên, document.all là một ngoại lệ.

Cụ thể như sau:

document.all chuyển sang boolean sẽ là false
document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
Khi typeof document.all sẽ trả về "undefined"
ECMA là đặc tả chi tiết kỹ thuật mà các ngôn ngữ theo đặc tả này phải tuân theo. Javascript là một ngôn ngữ tuân thủ đặc tả kỹ thuật ECMA.
 */


/** Tóm tắt
Truthy là gì?
Là giá trị mà khi ép sang boolean sẽ ra true.

Ví dụ:

1, 'hello', [], {}, '0', 'false', function() {} → đều là Truthy

❌ Falsy là gì?
Là giá trị mà khi ép sang boolean sẽ ra false.

Chỉ có 6 giá trị Falsy:


false
0
''
null
undefined
NaN
👉 Cách kiểm tra?
Dùng !! để ép sang boolean:

js
Copy
Edit
!!value  // true nếu là Truthy, false nếu là Falsy
Ví dụ:


!!0       // false
!!'0'     // true
!![]      // true
!!''      // false
💡 Lưu ý quan trọng:
[], {}, '0', ' ' → là Truthy

Đừng nhầm chúng là Falsy!

🔎 Ngoại lệ đặc biệt:
document.all trong trình duyệt là Falsy, dù là một object.

Đây là trường hợp đặc biệt hiếm gặp, bạn có thể bỏ qua nếu không làm web nâng cao.

 */