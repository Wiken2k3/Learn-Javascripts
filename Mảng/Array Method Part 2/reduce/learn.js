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
//4. Đẹp mắt hơn


//vd1:
var i = 0;
function coinHandler(accumulator, currentValue ,currentIndex, originArray){    //trả về tham số accumulator (biến lưu trữ) , giá trị hiện tại (currentValue) , chỉ mục hiện tại (currentIndex) và mảng gốc (chính là courses của reduce ở dưới)
    i++;
    console.log(i);
}


var totalCoin = courses.reduce(coinHandler, 0);       
//nhận 2 đối số truyền vào ,thứ nhất function (bắt buộc), đối số thứ 2 là giá trị khởi tạo (để khởi tạo biến lưu trữ của hàm reduce )



//vd1:
var i = 0;
function coinHandler(accumulator, currentValue ,currentIndex, originArray){    //trả về tham số accumulator (biến lưu trữ) , giá trị hiện tại (currentValue) , chỉ mục hiện tại (currentIndex) và mảng gốc (chính là courses của reduce ở dưới)
    i++;
    console.log(i);
}


var totalCoin = courses.reduce(coinHandler, 0);       
//nhận 2 đối số truyền vào ,thứ nhất function (bắt buộc), đối số thứ 2 là giá trị khởi tạo (để khởi tạo biến lưu trữ của hàm reduce )

//vd2:
var i = 0;
function coinHandler(accumulator, currentValue ,currentIndex, originArray){    //trả về tham số accumulator (biến lưu trữ) , giá trị hiện tại (currentValue) , chỉ mục hiện tại (currentIndex) và mảng gốc (chính là courses của reduce ở dưới)
    i++;
    console.table({
        'Lượt chạy': i,
        'Biến tích trữ':accumulator
    });
}


var totalCoin = courses.reduce(coinHandler, 0);       
//nhận 2 đối số truyền vào ,thứ nhất function (bắt buộc), đối số thứ 2 là giá trị khởi tạo (để khởi tạo biến lưu trữ của hàm reduce )

