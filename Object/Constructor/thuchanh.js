/**Hãy tạo object constructor cho nhóm Animal có 3 thuộc tính là name, leg và speed. 
Trong đó, name là để lưu tên động vật, leg là số lượng chân và speed là tốc độ di chuyển của động vật đó.

Sau đó, hãy tạo một đối tượng từ object constructor trên để mô tả 1 con vẹt, 
lưu đối tượng vào biến parrot.

Tên và tốc độ di chuyển của vẹt các bạn có thể tùy ý đặt, 
không đòi hỏi phải chính xác với tên và tốc độ trong thực tế. */


function Animal (name, leg, speed){
    this.name = name;
    this.leg = leg;
    this.speed =  speed;
}

var parrot = new Animal('Scarlet',  2, 20);

console.log(parrot);