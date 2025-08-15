/**Hoàn thành code còn thiếu #2
Cập nhật tháng 4 năm 2022

Cho trước một đoạn mã bị thiếu phần switch case, 
hãy bổ sung để hoàn thiện đoạn mã.

Chỉ bổ sung phần còn thiếu, không thay đổi code có sẵn nhé các bạn. */

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
            result = "No fruits";
    }

    return result;
}