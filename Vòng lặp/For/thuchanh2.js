/**Tính tổng các phần tử là số của mảng
Cho trước mảng numbers, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.
*/

function getTotal(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }
    return sum;
}


// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17

/**🧠 Giải thích chi tiết từng dòng:
Dòng	Giải thích
function getTotal(arr) {	                Định nghĩa một hàm tên là getTotal với tham số đầu vào là một mảng arr.
var sum = 0;	                            Tạo một biến sum để lưu tổng — bắt đầu từ 0.
for (var i = 0; i < arr.length; i++) {	    Bắt đầu một vòng lặp for, đi qua từng phần tử của mảng. i là chỉ số bắt đầu từ 0 đến hết độ dài mảng.
if (typeof arr[i] === 'number') {	        Kiểm tra nếu phần tử hiện tại là kiểu number thì mới cộng.
sum += arr[i];	                                Nếu đúng là số, thì cộng phần tử đó vào biến sum.
}	                                            Kết thúc câu lệnh if.
}	                                        Kết thúc vòng lặp for.
return sum;	                                    Trả về kết quả tổng cuối cùng. */



/**📌 Vì sao phải kiểm tra typeof arr[i] === 'number'?

Giả sử mảng chứa phần tử không phải số, ví dụ:

getTotal([1, '2', true, 3]);  // chỉ cộng 1 và 3


Nếu không có kiểm tra typeof, bạn có thể bị lỗi hoặc cộng sai kiểu dữ liệu. */