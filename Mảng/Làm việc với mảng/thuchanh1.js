/**Để vượt qua thử thách này, hãy tạo hàm getLastElement có 1 tham số 
 (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array), 
hàm này sẽ trả về phần tử cuối cùng trong mảng.:// Viết hàm tại đây  */

function getLastElement(array) {
    return array.slice(-1)[0];
}

// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']


/**Giải thích nhanh:
array.slice(-1) → tạo mảng mới gồm phần tử cuối.

[0] → lấy phần tử đầu tiên (cũng là duy nhất) của mảng mới đó.

Không ảnh hưởng đến mảng gốc. */