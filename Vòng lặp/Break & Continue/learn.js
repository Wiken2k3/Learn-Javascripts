//break (thoát khỏi vòng lặp) và Continue (bỏ qua một vài đoạn) của vòng lặp

for (var i = 0; i < 10; i++ )    {
    console.log(i);

    if (i >= 5 ){   
        break;          //nếu i >= 5 thì từ khoá break sẽ được thực thi
    }   
}


for (var i = 0; i < 10; i++ )    {
    if (i%2 !==0){
        continue;       //TH điều kiện này thoả mãn thì sẽ tiếp tục vòng lặp của điều kiện và bỏ các vòng đang chạy
    }                   //nên những lần là số lẻ của điều kiện bị bỏ qua và chỉ lấy số chẵn
    console.log(i);

}

