let number = [5, 7, 1, 3, 7, 7, 2, 2, 2];

//count avarage
function Avarage(){
    let sum = 0;
    for( let i = 0; i < number.length; i++ ){
        sum += parseInt( number[i]);
    }
    let avg = sum/number.length;
    console.log(avg);
}

function Median(){

    // sort [1,1,2,2,3,3,3,5,7]
    let median = 0, numsLen = number.length;
    aa = number.sort(function(a, b){return a-b});
    console.log("setelah di Sort " +aa);
 
    if ( numsLen % 2 === 0 )
        {
            // average of two middle numbers
            median = (aa[numsLen / 2 - 1] + aa[numsLen / 2]) / 2;
            console.log("Nilai Tengah");
            console.log(median);

        } else { // is odd
            // middle number only
            median = aa[(numsLen - 1) / 2];
            console.log("Nilai Tengah");
            console.log(median);
        }

}

function Mode() {

    let modes = [], count = [], i, maxIndex = 0;

    //Sort number sorting 1,2,2,2,3,5,7,7,7
    aa = number.sort(function(a, b){return a-b});
    console.log("sorting " +aa);
    console.log("banyak angka " +number.length);

    //menjalankan per index
    for (i = 0; i < number.length; i ++ ) {
        //show by index
        num = aa[i];
        console.log("show per index = "+num);

        //membuka array baru dan mengisinya       
        count[num] = (count[num] || 0) + 1;
        console.log(count);

        //menentukan index terbanyak
        if (count[num] > maxIndex) {
            maxIndex = count[num];
            console.log("index terbanyak ada " +maxIndex +" huruf");
        }
    }

    console.log("total terbanyak " + maxIndex);
 
    for (prop in count)
        if (count.hasOwnProperty(prop)) {
            if (count[prop] === maxIndex) {
                modes.push(Number(prop));
                console.log(modes);
            }
        }
}

// Avarage();
// Median();
Mode();