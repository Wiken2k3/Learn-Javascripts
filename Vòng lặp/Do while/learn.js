/**kiểu lặp đảm bảo chạy ít nhất 1 lần, rồi mới kiểm tra điều kiện. */

var i = 0;
do {
    i++;
    console.log(i);
}while( i < 10 );    //kiểm tra điều kiện từ lần chạy thứ 2 trở đi


//vd cho nạp thẻ
var i = 0;
var isSuccess = false ;

do {
    i++;
    console.log('Nạp thẻ lần'+ i);
    //Thành công
    if (false){
        isSuccess = true;
    }
}while(!isSuccess && i <= 3);