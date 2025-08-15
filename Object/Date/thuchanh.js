/**Để vượt qua thử thách này, bạn hãy tạo hàm getNextYear, 
hàm này sẽ trả về năm kế tiếp. 
Ví dụ, năm nay là 2022, hàm sẽ trả về 2023 là kiểu số. */

function getNextYear(){         //Tạo hàm getNextYear
    var date = new Date();      
    return date.getFullYear()   +1;     
}

console.log(getNextYear())      //in ra tên hàm, chứ không gọi hàm. Cần thêm () để gọi hàm.