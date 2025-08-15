//Toán tử 3 ngôi - Ternary operator


//code bình thường
var course = {
    name : 'Javascript',
    coin : 250
}
if (course.coin > 0 ){
    console.log(`${course.coin} Coins`);
}else {
    console.log('Miễn phí ');
} 

//khi sử dụng toán tử 3 ngôi    
// (điều_kiện ? giá_trị_nếu_đúng : giá_trị_nếu_sai;)
var course = {
    name : 'Javascript',
    coin : 250
}

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí ';    // vế đầu là điều kiện, vế 2 là kết quả in ra kết qủa in ra , vế cuối là còn lại
console.log(result);




//vd 

var a = 1;
var b = 2;
 
var c = a > 0 ? a : b;
console.log(c); //1