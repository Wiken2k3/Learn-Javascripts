var date = 9;

switch(date){       //truyền 1 giá trị cho switch (biến, chuỗi, số ,toán tử, biểu thức điều kiện)
    case 2:
        console.log('Hôm nay là thứ 2');
        break;
    case 3:     //sử dụng toán tử === nếu đúng thì chạy lệnh của nhánh 
        console.log('Hôm nay là thứ 3');
        break;      //đó rồi sau đó break để thoát vì khi switch có case đúng thì nó sẽ lọt vào tất cả case tiếp theo
    case 4:
        console.log('Hôm nay là thứ 4');
        break;
    case 5:
        console.log('Hôm nay là thứ 5');
        break;
    default:    //luôn ở dưới cùng để nếu các nhánh trên không đúng thì sẽ trả về default
        console.log('Không biết');
}


