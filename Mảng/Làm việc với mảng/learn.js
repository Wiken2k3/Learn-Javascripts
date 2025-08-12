/** Làm việc với Array 
 * 
 * //Keyword : Javascript array methodss
 *
1. To String
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
*/

/**1. To String */
var languages =[
    'Js',
    'HTML',
    'CSS'
];

console.log(languages.toString())   //chuyển kiểu dữ liệu array của languages (biến)thành kiểu dữ liệu string

console.log(typeof languages.toString())   //cách kiểm tra kiểu => đã chuyển thành kiểu chuỗi vì đã cách nhau bằng dấu phẩy và không có dấu nháy của từng phần tử khác nhau 


/**2. Join */
var languages =[
    'Js',
    'HTML',
    'CSS'
];
console.log(languages.join())   //biến mảng array thành một chuỗi 

console.log(languages.join(''))   //nếu truyền vào chuỗi rỗng thì nó sẽ bỏ dấu phẩy ngăn cách giữa các phần tử (vì nó nghĩ rằng '' đó là dấu ngăn cách của các ký tự trống)
//=> JsHTMLCSS

console.log(languages.join('-'))   //tương tự với dấu gạch ngang -
// => Js-HTML-CSS

/**3. Pop */
var languages =[
    'Js',
    'HTML',
    'CSS'
];

console.log(languages.pop()) //Xoá element phần tử cuối mảng và trả về phần tử đã xoá

console.log(languages) //0:'Js' 1:'HTML'

/// TH Thêm pop (thì sẽ xoá thêm 1 element cho đến khi gọi biến ra)
var languages =[
    'Js',
    'HTML',
    'CSS'
];

console.log(languages.pop()) //Xoá element phần tử cuối mảng và trả về phần tử đã xoá
console.log(languages.pop()) //Xoá element phần tử cuối mảng và trả về phần tử đã xoá

console.log(languages) //0:'Js'


/// TH Thêm pop khi đã hết (thì sẽ trả về undefined)
var languages =[
    'Js',
    'HTML',
    'CSS'
];

console.log(languages.pop()) //Xoá element phần tử cuối mảng và trả về phần tử đã xoá
console.log(languages.pop()) //Xoá element phần tử cuối mảng và trả về phần tử đã xoá
console.log(languages.pop()) //Xoá element phần tử cuối mảng và trả về phần tử đã xoá

console.log(languages) // undefined và trả về mảng rỗng


/**4. Push */
var languages =[
    'Js',
    'HTML',
    'CSS'
];

console.log(languages.push('dart')) //thêm phần tử và mảng 
console.log(languages)  //=> 0:'Js' 1:'HTML' 3:'CSS' 4 :'dart'

//TH2:
var languages =[
    'Js',
    'HTML',
    'CSS'
];

console.log(languages.push('dart','py')) //thêm phần tử và mảng 
console.log(languages)  //=> 0:'Js' 1:'HTML' 3:'CSS' 4 :'dart' 5:'py'

/**5. Shift :Xoá đi phần tử đầu và chạy còn lại  */
var languages =[
    'Js',
    'HTML',
    'CSS'
];

console.log(languages.shift()) //Xoá đi phần tử đầu (Js) và chạy còn lại và mảng mất đi phần tử đầu
console.log(languages)  //["HTML","CSS"]


//tương tự pop nếu xoá hết thì sẽ thành undefined 


/**6. Unshift :Thêmm 1 hoặc nhiều phần tử vào đầu mảng và đều sẽ trả về độ dài mới của mảng  */
var languages =[
    'Js',
    'HTML',
    'CSS'
];

console.log(languages.unshift('dart')) //Thêmm 1 hoặc nhiều phần tử vào đầu mảng
console.log(languages)  //["dart","Js","HTML","CSS"]

//TH thêm nghiều phần tử
console.log(languages.unshift('dart')) //Thêmm 1 hoặc nhiều phần tử vào đầu mảng
console.log(languages.unshift('dart')) //Thêmm 1 hoặc nhiều phần tử vào đầu mảng


console.log(languages)  //["dart","dart","Js","HTML","CSS"]




/**7. Splicing : Xoá ,cắt hoặc chen phần tử khác vào mảng */
var languages =[
    'Js',
    'HTML',
    'CSS'
];
languages.splice(1,1)  //chọn đến phần tử (HTML), sau đó (số) từ con trỏ sẽ xoá bao nhiêu phần tử (HTML) suy ra mất HTML

console.log(languages)  //["Js","CSS"]


//TH2:
var languages =[
    'Js',
    'HTML',
    'CSS'
];
languages.splice(1,2)  //chọn đến phần tử (HTML), sau đó (số) từ con trỏ sẽ xoá bao nhiêu phần tử (HTML,CSS) suy ra mất HTML

console.log(languages)  //["Js"]


//TH3: Không xoá và chèn
var languages =[
    'Js',
    'HTML',
    'CSS'
];
languages.splice(1,0,'dart')  //chọn đến phần tử (HTML), sau đó không xoá (0) , và thêm phần tử (dart) ở vị trí đã chọn

console.log(languages)  //["Js","dart","HTML","CSS"]

//TH4: Vừa xoá và chèn
var languages =[
    'Js',
    'HTML',
    'CSS'
];
languages.splice(1,1,'dart')  //chọn đến phần tử (HTML), sau đó (số) từ con trỏ sẽ xoá bao nhiêu phần tử (HTML) suy ra mất HTML , và thêm phần tử (dart) ở vị trí đã chọn

console.log(languages)  //["Js","dart","CSS"]


languages.splice(1,2,'dart','java')  //tương tự =>["Js","dart","java"]



/**8. Concat :Nối được Array */
var languages =[
    'Js',
    'HTML',
    'CSS'
];

var languages2 =[
    'dart',
    'py',
];


console.log(languages.concat(languages2)) //mảng 2 sẽ được hợp nhất thêm sau mảng 1 ,thêm mảng (languges2)sau mảng gốc (languages) và tương tự ngược lại nếu đảo ngược lại 

//=> ["Js","HTML","CSS","dart","py"] 


/**9. Slicing  */
var languages =[
    'Js',
    'HTML',
    'CSS'
];
console.log(languages.slice(1,2))  //tham số thứ 1 là vị trí bắt đầu  , tham số 2 là vị trí ngừng việc cắt , nếu muốn cắt hết mảng thì bỏ số 2 đi là xong
//=> ["Js","HTML"]


//có thể lấy ngược lại theo số âm để lấy được phần tử cuối mảng
console.log(languages.slice(-2,-1))     //HTML