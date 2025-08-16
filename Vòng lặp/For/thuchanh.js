/**Tạo danh sách số ngẫu nhiên
Cập nhật tháng 4 năm 2022

Để vượt qua thử thách này, bạn cần kết hợp nhiều kiến thức đã học như: làm việc với array, đối tượng Math và loop.

👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.
 */

// Làm bài
function getRandNumbers(min, max, length) {
    var numbers = [];

    for (var i = 0; i < length; i++) {
        var random = Math.random() * (max - min) + min;
        numbers.push(random);
    }

    return numbers;
}
console.log(getRandNumbers(1, 10, 5));
// Ví dụ kết quả: [3.42, 6.88, 1.55, 8.77, 2.31]



/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 */


/**Yêu cầu:

Tạo hàm getRandNumbers(min, max, length)
→ Trả về một mảng có length phần tử
→ Mỗi phần tử là số ngẫu nhiên nằm trong khoảng [min, max) */

/**Mục tiêu của bài:

Bạn cần viết một hàm, tên là getRandNumbers,
Hàm này nhận 3 thông tin:

min: là số nhỏ nhất mà bạn muốn tạo ra

max: là số lớn nhất

length: là bạn muốn tạo ra bao nhiêu số

➡️ Rồi hàm sẽ trả về một mảng chứa đúng số lượng đó, mỗi phần tử là một số ngẫu nhiên nằm trong khoảng từ min đến max

🧠 Nguyên lý hoạt động:

Bạn bắt đầu với một mảng rỗng → để chứa kết quả

Dùng vòng lặp for để lặp lại đúng số lần mà bạn cần tạo (dựa vào length)

Trong mỗi lần lặp:

Bạn dùng công thức:

Math.random() * (max - min) + min


Đây là cách tạo 1 số ngẫu nhiên nằm trong khoảng từ min đến max

Rồi đưa số đó vào mảng kết quả

Sau khi lặp xong, bạn trả lại mảng đó

🧪 Ví dụ dễ hiểu:

Giả sử bạn gọi hàm như vầy:

getRandNumbers(1, 10, 3)


Nghĩa là:

Tạo 3 số

Mỗi số nằm trong khoảng từ 1 đến 10 (không bao gồm 10)

Kết quả trả về có thể là:

[3.42, 6.88, 9.77]


Mỗi lần chạy sẽ khác nhau, vì là ngẫu nhiên.

💡 Tóm gọn bằng miệng:

“Bạn bảo: tôi muốn 3 số ngẫu nhiên từ 1 đến 10.
Mình sẽ lặp 3 lần, mỗi lần tạo 1 số trong khoảng đó, bỏ vào mảng.
Cuối cùng trả mảng cho bạn.” */