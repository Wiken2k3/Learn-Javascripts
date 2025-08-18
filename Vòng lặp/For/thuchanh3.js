/**Tính tổng giá trị đơn hàng

Ở bài này, chúng ta sẽ viết chương trình để tính tổng giá trị của 1 đơn hàng.

Cho trước mảng orders là danh sách chứa các khóa học, các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.

Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng. */



var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
];

function getTotal(orders) {
    var total = 0;

    for (var i = 0; i < orders.length; i++) {
        total += orders[i].price; // Cộng từng giá trị price vào biến total
    }

    return total;
}

console.log(getTotal(orders)); // Output: 8700000


/**Dòng 1–12:

Tạo ra một mảng có tên là orders.

Mảng này chứa 3 phần tử, mỗi phần tử là một object đại diện cho một đơn hàng (khóa học).

Mỗi object có:

name: tên khóa học.

price: giá tiền của khóa học. */



/**function getTotal(orders) {
🔹 Dòng 14:

Tạo hàm có tên là getTotal, nhận vào một tham số orders (chính là mảng trên).

Hàm này sẽ dùng để tính tổng giá trị của tất cả đơn hàng trong mảng.
    var total = 0;
🔹 Dòng 15:

Khai báo biến total và gán giá trị ban đầu là 0.

Biến này sẽ dùng để cộng dồn giá tiền của từng đơn hàng.
    for (var i = 0; i < orders.length; i++) {
🔹 Dòng 17:

Sử dụng vòng lặp for để duyệt qua từng phần tử trong mảng orders.

i là chỉ số (index) bắt đầu từ 0.

orders.length là độ dài của mảng, tức là 3.

Vòng lặp sẽ chạy với i = 0, 1, 2.
        total += orders[i].price;
🔹 Dòng 18:

Trong mỗi vòng lặp, lấy giá trị price của phần tử thứ i trong mảng orders.

orders[i].price chính là giá tiền của đơn hàng tại vị trí i.

Sau đó cộng vào biến total để tính tổng.
    }
🔹 Dòng 19:

Kết thúc vòng lặp for.
    return total;
🔹 Dòng 21:

Sau khi vòng lặp kết thúc, trả về tổng giá trị đã tính được.
console.log(getTotal(orders)); // Output: 8700000
🔹 Dòng 24:

Gọi hàm getTotal và truyền vào mảng orders.

Kết quả trả về (tổng giá trị đơn hàng) sẽ được in ra console.

Kết quả sẽ là 8700000.

✅ Tổng kết:
Vị trí trong mã	Vai trò
orders	Mảng chứa danh sách đơn hàng
getTotal()	Hàm để tính tổng giá trị
for	Duyệt từng đơn hàng
total	Biến cộng dồn giá tiền
orders[i].price	Lấy giá của từng đơn hàng */