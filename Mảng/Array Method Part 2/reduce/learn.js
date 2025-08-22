//Reduce


var courses = [
    {                                  
        id: 1,
        name: 'HTML',
        coin: 250
    },
    {
        id: 2,
        name: 'CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 4,
        name: 'Figma',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name: 'Figma',
        coin: 200
    }
];
//Biến lưu trữ
var totalCoin = 0;

//Lặp qua các phần tử
 for (var course of courses){
    //thực hiện biến lưu trữ
    totalCoin += course.coin;
}

console.log(totalCoin);


//Áp dụng reduce 
//1.Dễ hiểu
//2.Ngắn gọn hơn
//3.Hiệu năng



