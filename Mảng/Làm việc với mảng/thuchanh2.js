/**Để vượt qua thử thách này, 
 hãy tạo hàm getFirstElement có 1 tham số 
 (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array), 
 hàm này sẽ trả về phần tử đầu tiên trong mảng. */

 // Viết hàm tại đây
function getFirstElement(array){
    return array.slice(0, 1)[0];  // lấy mảng chứa phần tử đầu → lấy phần tử đầu tiên
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result); // Expected: "Monkey"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']


/**
Ghi nhớ:
Cách	                    Ưu điểm	Ghi chú
array[0]	                Nhanh, đơn giản	Không làm thay đổi mảng
array.slice(0, 1)[0]	    Dùng kiến thức .slice()	Vẫn không làm thay đổi mảng
 */