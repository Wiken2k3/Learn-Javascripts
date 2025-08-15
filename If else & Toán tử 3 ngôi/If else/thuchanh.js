/**Thử thách khó, dùng If/else
Để vượt qua thử thách này, hãy hoàn thành hàm cho trước để đáp ứng các yêu cầu sau:

Khi a chia hết cho 3 thì return về 1
Khi a chia hết cho 5 thì return về 2
Khi a chia hết cho 15 thì return về 3
 */

function run(a) {
    if (a % 15 === 0) {
        return 3;
    } else if (a % 5 === 0) {
        return 2;
    } else if (a % 3 === 0) {
        return 1;
    }
}


// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3

/**Giải thích ngắn gọn:

a % 15 === 0 phải đứng đầu tiên, vì nếu bạn kiểm tra a % 3 === 0 trước, 
nó sẽ chạy luôn và không kiểm tra điều kiện còn lại.

else if sẽ không chạy nếu điều kiện trên đã đúng và có return rồi */