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