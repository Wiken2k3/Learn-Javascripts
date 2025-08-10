/**
Tham số:
- Là giá trị truyền vào khi gọi function. Tham số sẽ được sử dụng
để làm gì đó trong 1 function (Tính toán / Xử lý dữ liệu)
 */

function writelog(message){  //Định nghĩa tham số (tham số message)
    console.log(message)
}

writelog('Day la 1 dong log');    //Day la 1 dong log  và khi này gọi tới nó là đối số 


//////////
/**
- Kiểu dữ liệu : Không bị giới hạn kiểu dữ liệu
 */

function writelog(message){  //Định nghĩa tham số (tham số message)
    console.log(message)
}

writelog(123);  // vẫn chạy 123 được
writelog(['Javacript','PHP']);  //['Javacript','PHP']


//có thể typeof ra để nhìn tính chất
function writelog(message){  //Định nghĩa tham số (tham số message)
    console.log(typeof message)
}

writelog(['Javacript','PHP']);  //object (vì nó là array)
writelog('Test'); //String

///////////
/**
- Tính Private (Khi truyền biến vào đâu thì chỉ sử dụng được ở trong ngoặc của function đó)
 */
function writelog(message){  //Định nghĩa tham số (tham số message)
    console.log(message)
}
writelog('Test'); 

console.log(message)  // lỗi (vì ở ngoài ngoặc và không được khai báo)



///////////
/**
Định nghĩa tham số : cách nhau bằng dấu ,
 */
function writelog(message, message2){  //Định nghĩa tham số (tham số message)
    console.log(message)
    console.log(message2)
}
writelog('Test','Test_2');  // Có thể truyền nhiều tham số vào đây (không giới hạn)
writelog('Test');  // in ra message là Test , còn message2 là undefined (vì không được truyền vào)



///////
/**
    Arguments
 */
function writelog(){
    console.log(arguments)  //Arguments có tính chất giống mảng
}
writelog('Log 1', 'Log 2');  //Arguments["Log 1", "Log 2"]  vì truyền bao nhiêu biến thì arguments vẫn nhận được


/**
Vòng for of
 */
function writelog(){
    for(var param of arguments){
        console.log(param)       //chạy thì lần 1 thì lấy phần từ thứ nhất của của arguments (Log 1) gắn vào param.lần 2 thì lấy phần từ thứ hai của của arguments (Log 2) gắn vào param
    }
}
writelog('Log 1', 'Log 2');  // in ra //Arguments["Log 1", "Log 2"]


////// Trường hợp muốn nó in ra các kết quả nối nhau
function writelog(){
    var myString = '';
    for(var param of arguments){
        myString += '${param} - '
    }
    console.log(myString)
}
writelog('Log 1', 'Log 2');  //// Log 1 - Log 2