/** Tạo mảng trong Javacripts - Array */
/**1. Tạo mảng */
var languages = [
    'Javascript',
    'HTML',
    'CSS',
    null,
    undefined,
    function(){
    },
    {},
    123
];

console.log(languages)  // (3)'Javascript','HTML','CSS'
//array mục đánh tự động bắt đầu từ 0
//có thể đưa bất cứ kiểu dữ liệu nào vào cũng được



/**cách 2 để tạo */ //không được khuyến cáo sử dụng
var languages = new Array(
    'Javascript',
    'HTML',
    'CSS',
    null,
    undefined,
    function(){
    },
    {},
    123
);
console.log(languages)



console.log(typeof languages)   //kiểm tra kiểu dữ liệu (thêm type of)
console.log(Array.isArray(languages))    //kiểm tra biến có phải Array hay không (truyền biến vào trong ngoặc) => true là đúng

/** 2. Truy xuất Mảng */
// -Độ dài mảng
var languages = [
    'Javascript',
    'HTML',
    'CSS',
];

console.log(languages.length) //3 (kiểm tra độ dài mảng bằng length )

// -Lấy phần tử theo index
var languages = [
    'Javascript',
    'HTML',
    'CSS',
];

console.log(languages[0]) //Javascript (lấy phần tử 0 => Javacript)
console.log(languages[1]) //Javascript (lấy phần tử 1 => HTML)
console.log(languages[2]) //Javascript (lấy phần tử 2 => CSS)
