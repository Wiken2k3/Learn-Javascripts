/**Tính tổng giá trị đơn hàng

Ở bài này, chúng ta sẽ viết chương trình để tính tổng giá trị của 1 đơn hàng.

Cho trước mảng orders là danh sách chứa các khóa học, các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.

Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng. */



var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal(odersList){
    var total = 0;
    for (var i = 0; i < odersList.length ; i++){
        total += odersList[i].price;
    }
    return total;
}


console.log(getTotal(orders));
// Expected results:
getTotal(orders) // Output: 8700000
