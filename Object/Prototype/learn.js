//Object Prototype - Những thứ cấu thành lên một đối tượng 

function User(firstName, lastName, avatar) { 
    this.firstName  = firstName;
    this.lastName  = lastName;  
    this.avatar  = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;    
    }
}
User.prototype.className = 'F8';    //thêm thuộc tính ngoài hàm đã tạo
User.prototype.getClassName = function()    {
    return this.className;
}    //thêm thuộc tính ngoài hàm đã tạo


var user2 = new User('Tuan', 'Tran', 'Avatar');
var user = new User('Duc', 'Tran', 'Avatar');

console.log(user.className);  // Tuan Tran
console.log(user2.getClassName());    // Duc Tran

