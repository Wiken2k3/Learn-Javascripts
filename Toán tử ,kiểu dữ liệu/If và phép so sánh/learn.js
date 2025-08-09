/** Các giá trị covert sang boolean là false :
    0
    ''
    null
    undefined
    NaN
    false
 */


var a = 1;
var b = 2;

var result = a < b;
console.log('result',result)

if (a < b){
    console.log('A < B');
}else{
    console.log('A > B');
}

//vd2
var c = 1;
var d = 2;

var result1 = c < d && c > 0;  //(a < b true) (&& : toán tử logic không trả về hiểu boolean , chỉ trả về kết quả)
console.log(result1)


//vd3:
var e = 1;
var f = 2;

var result2 = 'E' && 'F' && 'G' ; //đọc vế trái kiểm tra giá trị 'E' (khôgn nằm trong 6 giá trị covert trên)khi đó nó sang phải lấy vế bên phải và tương tự khi có nhiều toán tử cũng như vậy và cuối cùng đến kết thúc câu lệnh
console.log(result2);
//in ra G


var result2 = 'null' && 'F' && 'G' ; //Nhưng nếu nó có (nằm trong 6 giá trị covert trên) thì nó sẽ lấy luôn value đó
//in ra null (tương tự với các giá trị khác trong 6 giá trị covert)

//vd4:
var k = 1;
var h = 2;

var result3 = 'U' && 'I' && 'O' && NaN ;

if (result3){       // vì có giá trị NaN nên mặc định sẽ là false ở giá trị result 3
    console.log('DIEU KIEN DUNG');
}else{
    console.log('DIEU KIEN SAI');
}
//in ra DIEU KIEN SAI

var result3 = 'U' && 'I' && 'O' ; //ngược lại trường hợp này thì từ trái sang phải giá trị O là true sẽ gán vào result 3 thì sẽ là true (không thuộc 6 value trên)
// in ra DIEU KIEN DUNG

//vd5:
var e = 1;
var f = 2;

var result2 = 'E' || 'F' || 'G' ; //ngược lại với toán tử && ,khác value false là lấy luôn và gán vào result2
console.log(result2);
//in ra E 


var result2 = 'null' || 'F' || 'G' ; //Nhưng nếu nó có (nằm trong 6 giá trị covert trên) thì nó sẽ lấy vế tiếp theo bên phải : F 
//in ra F (tương tự với các giá trị khác trong 6 giá trị covert)


//vd6:
var k = 1;
var h = 2;

var result3 = 'U' || 'I' || 'O' || NaN ;

if (result3){       // vì là toán tử or || nên nó không quan tâm value false và nặc định lấy mảng đúng U
    console.log('DIEU KIEN DUNG');
}else{
    console.log('DIEU KIEN SAI');
}

//in ra DIEU KIEN DUNG



//vd7:
var k = 1;
var h = 2;

var result3 = null ||false || undefined ;

if (result3){       // vì các điều kiện trong đây là value false nên sẽ là false
    console.log('DIEU KIEN DUNG');
} else{
    console.log('DIEU KIEN SAI');
}

//in ra DIEU KIEN SAI