//Không áp dụng với object (FOR OF)

var languages = [
    'Javascript',
    'HTML',
    'Java'
];
for (var value of languages) { //lấy được từng phần tử của mảng
    console.log(value);
}


//cách lấy giá trị của object
for (var value of Object.keys(languages)) { //lấy được từng phần tử của Object
    console.log(languages[value]);
}


//hoặc
console.log(Object.values(languages));