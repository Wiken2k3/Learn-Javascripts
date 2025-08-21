//map()

var courses = [
    {                                       //chạy vào ông thứ nhất và dùng nguyên element này gọi ngược vào function chúng ta truyền vào nên chúng ta sẽ nhận được 1 tham số ở trong ngoặc
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
function courseHandler(course){
    // console.log(course)             //nhận được 7 element tương đương với 7 element của array 
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`
    };
};// function return lại cái gì thì vị trí của element đó ở trong mảng mới nhận lại cái đó  


var newCourses = courses.map(courseHandler);       //khi dùng map phải có một đối số truyền vào (là một function)
//tương tự cho đến hết cả vòng lặp
console.log(newCourses);



//tham số thứ 2:
function courseHandler(course, index){     //khi gọi lại function thì còn được 1 tham số thứ 2 là index gọi là key 
    // console.log(course)             
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
    };
};


var newCourses = courses.map(courseHandler);      
console.log(newCourses);