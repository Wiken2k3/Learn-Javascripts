/**     Chuyển đổi sang chữ in hoa


Hãy tạo hàm getUpperCaseName có 1 tham số là name, 
hàm này sẽ trả về phiên bản chữ viết hoa của giá trị 
mà nó nhận được từ name. */

function getUpperCaseName(name){
    return name.toUpperCase();
}


// Expected results:
console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"