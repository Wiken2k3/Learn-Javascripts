var myInfo = {
    name: 'Tuan Tran',   //đây là cặp key và value và ngăn cách bằng dấu phẩy
    age: 22,
    address: 'Ho Chi Minh'
}
myInfo.email = 'tuan@gmail.com'

console.log(myInfo)     //in ra 3 cặp key value vừa tạo =>name: 'Tuan Tran' age: 22 address: 'Ho Chi Minh'


//thêm key ở ngoài
var myInfo = {
    name: 'Tuan Tran',   //đây là cặp key và value và ngăn cách bằng dấu phẩy
    age: 22,
    address: 'Ho Chi Minh'
}
myInfo.email = 'tuan@gmail.com' 
//hoặc
myInfo['my-email']= 'tuan@gmail.com'    //với các tên ký tự bị lỗi 

console.log(myInfo)     //in ra 4 cặp key value vừa tạo =>name: 'Tuan Tran' age: 22 address: 'Ho Chi Minh' email : 'tuan@gmail.com'


//lấy từng object (cách 1)
console.log(myInfo.name);   //Tuan Tran 
console.log(myInfo.age);   //22

//cách 2:
console.log(myInfo['address']); //Ho Chi Minh
console.log(myInfo['my-email']); //undefined (trường hợp không có)



//VD:
var myInfo = {
    name: 'Tuan Tran',   
    age: 22,
    address: 'Ho Chi Minh'
}
var myKey = 'address';

console.log(myInfo[myKey]);        //chuyền trong ngoặc vuông thì sẽ lấy được address ở myKey =>Ho Chi Minh



//Thêm được key mới bằng một biến

var emailKey = 'email';

var myInfo = {
    name: 'Tuan Tran',   
    age: 22,
    address: 'Ho Chi Minh',
    [emailKey]: 'tuan@gmail.com'      //thêm key mới bằng một biến bằng ngoặc vuông 
};

console.log(myInfo);



//Cách xoá các đối tượng key value
var emailKey = 'email';

var myInfo = {
    name: 'Tuan Tran',   
    age: 22,
    address: 'Ho Chi Minh',
    [emailKey]: 'tuan@gmail.com'      //thêm key mới bằng một biến bằng ngoặc vuông 
};

delete myInfo.address

console.log(myInfo);    //name :Tuan Tran age :22 email : Tuan@gmail.com



//Thêm 1 biến bằng function

var emailKey = 'email';

var myInfo = {
    name: 'Tuan Tran',   
    age: 22,
    address: 'Ho Chi Minh',
    [emailKey]: 'tuan@gmail.com',      //thêm key mới bằng một biến bằng ngoặc vuông 
    getName: function(){
        return this.name;       //this trong trường hợp này là biến myInfo
    }
};

console.log(myInfo); 

//và để lấy ra được function thì
console.log(myInfo.getName);    //f(){ return this.name}
console.log(typeof myInfo.getName);    //function





//Cách gọi key khi nó là 1 function
//Function --> Phương thức methods
//Others -->    Thuộc tính /property
