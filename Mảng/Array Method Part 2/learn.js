/**Array methods:
    forEach()   //duyệt qua phần tử của mảng
    every()     
    some()
    find()
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

// forEach:
courses.forEach(function(course){
    console.log(course);
})

/**{id: 1, name: 'HTML', coin: 250}
{id: 2, name: 'CSS', coin: 0}
{id: 3, name: 'Javascript', coin: 0}
{id: 4, name: 'Figma', coin: 400}
{id: 5, name: 'ReactJS', coin: 500} */




