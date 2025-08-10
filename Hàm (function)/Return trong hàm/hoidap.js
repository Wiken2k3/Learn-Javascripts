/**Một số điều cần biết về function :
 */

// Khi function đặt trùng tên : Thì function định nghĩa sau sẽ ghi đè function trước
function showMess(){
    console.log('Mes 1');
}

function showMess(){
    console.log('Mes 2');
}

showMess();  // in ra Mes 2 



// Khai báo biến trong hàm 
function showMessages(){
    var fullName = 'Tuan Tran';  //phạm vi sử dụng chỉ trong function

    console.log(fullName);
}
showMessages();

console.log(fullName); //đưa ra đây chạy thì bị lỗi vì chưa được định nghĩa (private)


//Định nghĩa hàm trong hàm 
function bien(){
    function bien2(){
        console.log('Mes2');
    }

    bien2();
}
bien();  //chạy được vì vẫn trong phạm vi function

bien2(); //không chạy được vì đã bị private