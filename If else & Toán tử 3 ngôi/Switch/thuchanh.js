/**Hoàn thành code còn thiếu #1
Cho trước một đoạn mã bị thiếu phần switch case, 
hãy bổ sung để hoàn thiện đoạn mã.

Chỉ bổ sung phần còn thiếu, không thay đổi code có sẵn nhé các bạn.
 */
function run(fruits) {
    var result;

switch(fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
        default :
            console.log('Không biết');
    }
    return result;
}

console.log(run("Banana")); // This is a Banana
console.log(run("Apple"));  // This is an Apple
console.log(run("Orange")); // undefined (vì không có case "Orange")
