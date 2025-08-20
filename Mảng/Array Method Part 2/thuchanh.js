/** Thực hành làm việc với mảng

Để vượt qua thử thách này, hãy tạo hàm getMostFavoriteSport có 1 tham số 
(F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). 
Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.

Gợi ý: Sử dụng phương thức filter.*/



const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(sports) {
    return sports.filter(function(sport) {
        return sport.like > 5;
    });
}



// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]


/**🎯 Yêu cầu:

Viết hàm getMostFavoriteSport(array) trả về các môn thể thao có like > 5.

📌 Hướng dẫn từng bước (theo cách bạn học trong bài giảng):
✅ Bước 1: Hiểu đề

Mỗi phần tử trong mảng là một đối tượng { name: ..., like: ... }.

Mình cần lọc ra những môn mà like > 5.

=> Dùng filter() là chuẩn bài!

✅ Bước 2: Viết hàm sử dụng filter()
function getMostFavoriteSport(sports) {
    return sports.filter(function(sport) {
        return sport.like > 5;
    });
}

✅ Bước 3: Giải thích dễ hiểu
function getMostFavoriteSport(sports) {
    // Dùng filter để tạo mảng mới chỉ chứa các môn có like > 5
    return sports.filter(function(sport) {
        // Mỗi lần lặp, sport là 1 môn thể thao (ví dụ: { name: 'Bóng rổ', like: 6 })
        // Kiểm tra nếu sport.like > 5 thì giữ lại phần tử đó
        return sport.like > 5;
    });
}

✅ Bước 4: Kiểm tra lại với ví dụ
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
];

console.log(getMostFavoriteSport(sports));
// Kết quả mong đợi: 
// [
//     { name: 'Bóng rổ', like: 6 },
//     { name: 'Bóng đá', like: 10 }
// ]

✅ Tóm lại:

Bạn đang áp dụng đúng kiến thức filter().

Đề bài yêu cầu lọc => dùng filter().

Chỉ cần kiểm tra điều kiện trong callback (sport.like > 5) là đủ. */


