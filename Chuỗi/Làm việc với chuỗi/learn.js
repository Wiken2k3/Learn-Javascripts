/** Làm việc với chuỗi (Javascript string methods) */
/**
1. Length
2. Find index
3. Cut String
4. Replay
5. Covert to upper case
6. Covert to lower case
7. Trim
8. Split
9. Get a character by index
 */

var myString = 'Toi dang hoc Javascript va dang dang rat tap trung';

//1. Length
console.log(myString.length)


//2. Find index
console.log(myString.indexOf('dang'))       
/**in ra 4 (Đánh vị trí từ 0,bắt đầu 0-1-2-3-4) (nếu có thì sẽ trả ra kết quả vị trí) 
còn không trả ra -1 : không tìm thấy , khác -1 là tìm thấy */

/** index of chỉ trả ra chuỗi đầu tiên (tức là 4) trong chuỗi lớn */

//=> Nhập 1 chữ số vị trí mà bắt đầu tìm 
console.log(myString.indexOf('dang',8))   //in ra 31 , miễn sao là sau vị trí kí tự đã tìm

// TH Tìm vị trí cuối cùng 
console.log(myString.lastIndexOfIndexOf('dang'))   //in ra 36 (tìm ra vị trí biến cuối ) và nếu không có thì trả ra -1

//Tương tự với index of (nhưng không tìm được theo kiểu sau vị trí nào vì search không hỗ trợ phương thức số 2)
console.log(myString.search('dang'))   //search tìm theo biểu thức chính quy


//3. Cut String
var myString = 'Toi dang hoc Javascript';

console.log(myString.slice(4,8))   //in ra dang (cắt vị trí  thứ từ tham số cắt trong biến)

console.log(myString.slice(4))   //in ra dang hoc Javascript (cắt từ tham số đến hết)

console.log(myString.slice(-10,0))   //in ra Javacript (cắt từ phải sang trái ,0 là vị trí kết thúc của biến ,đếm ngược lại sẽ là âm)


//4. Replay
var myString = 'Toi dang hoc Javascript Javascript';

console.log(myString.replace('Javacript','HTML'))   //in ra Toi dang hoc HMTL Javascript (thay thế chuỗi trong biến , chuỗi đầu tiên)

//=> Sử dụng biểu thức chính quy để đổi tất cả nếu muốn
console.log(myString.indexOf(/Javascript/g ,'HTML'))   //in ra Toi dang hoc Javascript Javascript (thay toàn bộ bằng( /Javascript/g ))


/**5. Covert to upper case
6. Covert to lower case */
var myString = 'Toi dang hoc Javascript';

console.log(myString.toUpperCase())  // TOI DANG HOC JAVASCRIPT (Chuyển thành toàn bộ in hoa)

console.log(myString.toLowerCase())   // toi dang hoc javacript (Chuyển thành toàn bộ viết thường)


// 7. Trim
var myString = 'Toi  dang hoc Javascript  '; 

console.log(myString.trim())    //Toi dang hoc Javascript (loại bỏ các chuỗi dư thừa của biến)


//8. Split
var languages = 'Javacript , HTML , CSS';

console.log(languages,split(','))   // "Javacript" , "HTML" , "CSS"  (tìm ra điểm chung của chuỗi để cắt: dấu phẩy)

console.log(languages,split(''))   
// "J","A","V","A","S","C","R","I","P","T",....  (tìm ra điểm chung của chuỗi để cắt: chuỗi rỗng => cắt từng chữ cái)


//9. Get a character by index   : Từ 1 chữ cái cho trước in ra được chữ cái tương ứng
const myString2 = 'Tuan Tran';

console.log(myString2.charAt(0))    //in ra T
console.log(myString2.charAt(1))    //in ra U
console.log(myString2.charAt(2))    //in ra A

console.log(myString2.charAt(9))    //in ra rỗng (không có)

//Cách 2 lấy ký tự theo vị trí 
console.log(myString[2])            //in ra  A 

console.log(myString[9])            //in ra  undefined (kiểu undefined)


