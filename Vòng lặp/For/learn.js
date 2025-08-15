// For loop

for (var i = 1; i < 1000; i++){
    //code trong đây sẽ được chạy 1000 lần
    console.log(i);
}

//đoạn mã đầu tiên (i = 1) được chạy duy nhất 1 lần  nhưng những lần khác chạy lại của vòng lặp for thì cũng không được chạy lại
// khi lệnh điều kiện của lệnh điều kiện 2 đúng (i < 1000)thì code trong vòng lặp được thực thi
// sau khi thực thi xong thì chuyển sang thực thi vế  3 (i++) và sau đó sẽ chuyển tiếp vòng lặp của vế 2 (i <1000) nếu đúng thì sẽ tiếp tục vòng lặp cho đến khi không thoả mãn nữa thì dừng


/**Giải thích chi tiết từng phần:

Phần trong for	        Ý nghĩa
var i = 1	            Bắt đầu với i = 1, chỉ chạy 1 lần duy nhất lúc đầu
i < 1000	            Là điều kiện lặp — nếu đúng thì chạy tiếp, sai thì dừng
i++	                    Sau mỗi lần lặp xong, i tăng lên 1

🔁 Diễn giải bằng lời:

Bắt đầu i = 1

Kiểm tra i < 1000 → đúng

Thực thi console.log(i)

Tăng i lên 1 (i++)

Lặp lại từ bước 2

Khi i >= 1000, điều kiện sai → vòng lặp dừng lại */