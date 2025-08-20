/**Array methods:
    forEach()   //duyệt qua phần tử của mảng
    every()     //Dùng để kiểm tra tất cả phần tử thoả mãn 1 điều kiện nào đó
    some()      //CHỉ cần 1 thoả mãn điều kiện đó rồi sẽ ngừng lại vòng lặp
    find()      //tìm kiếm 
    filter()
    map()
    reduce()
 */

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
    }
];

// forEach: duyệt qua phần tử của mảng
courses.forEach(function(course){
    console.log(course);
})

/**{id: 1, name: 'HTML', coin: 250}
{id: 2, name: 'CSS', coin: 0}
{id: 3, name: 'Javascript', coin: 0}
{id: 4, name: 'Figma', coin: 400}
{id: 5, name: 'ReactJS', coin: 500} */




//  every():   mỗi khi lặp vào từng phần tử của mảng và mỗi lần lặp thì nó sẽ gọi thì sẽ gọi ngược vào hàm đã truyền vào function
var isFree = courses.every(function(course, index){     // và nó truyền vào tham số thứ nhất (course : phần tử mảng chúng ta)
    return course.coin === 0;       //bắt đầu ta so sánh nếu biểu thức điều kiện trả về là đúng thì nó mới kiểm tra phần tử tiếp theo và tương tự ...
})              //nhưng chỉ 1 thằng sai thì sẽ trả về là false

console.log(isFree);  //nếu các điều kiện đúng hết thì sẽ trả về là true



//some()  ngược lại với every
var isFree = courses.some(function(course, index){     
    return course.coin === 0;       
})              

console.log(isFree);



//some()   
var course = courses.find(function(course, index){     
    return course.name === 'HTML';    //nếu hàm nào return là true thì sẽ gán ngược vào vòng lặp đó rồi sẽ kết thúc
})              

console.log(course);
