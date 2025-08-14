// Object Constructor

function User(firstName, lastName, avatar){
    this.firstName  = firstName;
    this.lastName  = lastName;
    this.avatar  = avatar;

    

}
var author = new User('Tuan','Tran','Avatar');
var user = new User('Duc','Tran','Avatar');


console.log(author.constructor);  //để trả về mô tả của cấu trúc      
console.log(user);




//thêm thuộc tính cho từng role riêng
function User(firstName, lastName, avatar){
    this.firstName  = firstName;
    this.lastName  = lastName;
    this.avatar  = avatar;

}
var author = new User('Tuan','Tran','Avatar');
var user = new User('Duc','Tran','Avatar');

author.title = "Xin chào các bạn";
user.commet = "Thật là hay ";

console.log(author);       
console.log(user);



//thêm phương thức biến function getName để nối thành fullname

function User(firstName, lastName, avatar) { 
    this.firstName  = firstName;
    this.lastName  = lastName;  
    this.avatar  = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;    //this khi gọi từ đối tượng nào thì nó sẽ là đối tượng đó
    }
}

var author = new User('Tuan', 'Tran', 'Avatar');
var user = new User('Duc', 'Tran', 'Avatar');

author.title = "Xin chào các bạn";
user.comment = "Thật là hay";

console.log(author.getName());  // Tuan Tran
console.log(user.getName());    // Duc Tran



//Chuyển thành Express function 

var User= function(firstName, lastName, avatar) { 
    this.firstName  = firstName;
    this.lastName  = lastName;  
    this.avatar  = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;    //this khi gọi từ đối tượng nào thì nó sẽ là đối tượng đó
    }
}

var author = new User('Tuan', 'Tran', 'Avatar');
var user = new User('Duc', 'Tran', 'Avatar');

author.title = "Xin chào các bạn";
user.comment = "Thật là hay";

console.log(author);  // Tuan Tran
console.log(user);    // Duc Tran

