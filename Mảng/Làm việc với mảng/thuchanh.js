/**Cho trước hàm joinWithCharacter có 2 tham số là array và charactor,
 hãy hoàn thành phần nội dung hàm sao cho hàm trả về 1 chuỗi
 là kết quả của việc nối từng phần tử của mảng với charactor.*/


 //Sử dụng .join(charactor) là đủ.

function joinWithCharacter(array, charactor) {
    return array.join(charactor);
}

// Ví dụ khi sử dụng
var cars = ['Honda', 'Mazda', 'Mercedes'];
var result = joinWithCharacter(cars, ' - ');

console.log(result); // Expected: "Honda - Mazda - Mercedes"


/** Giải thích:
array.join(charactor) sẽ nối các phần tử lại với nhau, giữa mỗi phần tử là ký tự bạn truyền vào (charactor).

Trong ví dụ:
'Honda', 'Mazda', 'Mercedes' → được nối thành 'Honda - Mazda - Mercedes' */