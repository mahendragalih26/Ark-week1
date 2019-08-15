let number = [123, 9, 27];

function Plus(input){
    
    //penjumlahan tahap awal menggunakan reduce
    let add = input.reduce(myFunc);
    console.log(add);

    //penjumlahan setelah dipecah
    Explode(add);
    
}

function myFunc(total, num) {
    return total + num;
}

function Explode(expo){
    let rst = expo.toString().split("");// 1, 5, 9
    let text = 0;
    for (i = 0; i<rst.length;i++){
        text += parseInt(rst[i])
    }
    console.log(text);

    aa = text.toString().split("");
    if(aa.length >= 2){
        Explode(text);
    }
}

Plus(number);
