/** Các loại hàm */
// Declaration function testName
function showMess(){
    console.log('Declaration function');
}

// Expression function testName
var showMess2 = function testName (){
    console.log('Expression function');
}

//
setTimeout(function testName(){

});
//
var myObject = {
    myFunction : function testName(){

    }
}


//hoisting (có thể gọi trước khi khai báo) :Declaration function
// không hoisting :Expression functions


