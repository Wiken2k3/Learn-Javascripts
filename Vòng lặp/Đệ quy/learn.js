//Đệ quy là hàm mà gọi lại chính nó 
/**Phải:
1. Xác định được điểm dừng
2. Logic handle => Tạo ra điểm dừng 
 */

// var array = ['a','b','c','d','a','b','c','d'];

// console.log([...(new Set(array))]);         //đặc tính của Set là chỉ tồn tại 1


// //Xác định điểm dừng
// function deQuy(num){
//     if(num < 0){
//         //Dừng
//         return;     
//     }
//     deQuy();
// }
// deQuy(10);


//ví dụ ứng dụng countdown

function countDown(num) {
    if (num > 0){
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}
countDown(3);



//
function loop(start , end, cb){
    if (start <=
         end){
        cb(start)
        return loop(start +1, end, cb);
    }   

}
var array = ['Javascript','PHP','Ruby'];
loop(0, array.length -1, function(index) {
    console.log('index', index);
});


//
function giaiThua(num){
    var output = 1;
    for (var i = num ; i >0 ; i--){
        output = output * 1;
    }
    return output;
}
giaiThua(6);