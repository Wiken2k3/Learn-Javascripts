//  Toán Tử Logic
//  && - And
//  || - Or
//  !  - Not 

var a = 1;
var b = 2;
var c = 3;

if (a > 0 && b > 0 && c > 0 ){              //Cả 3 điều kiện phải đúng 
    console.log('DIEU KIEN DUNG');
}


var d = 1;
var e = 2;
var f = 3;

if (d || 0 && e || 0 && f || 0 ){       //Chỉ cần 1 trong tất cả đúng thì là đúng 
    console.log('DIEU KIEN DUNG');
}



if (!(a > 0 )){           //Điều kiện được nhóm ! (not) khi hoàn thành thì sai sẽ thành đúng và ngược lại
    console.log('DIEU KIEN DUNG');
}