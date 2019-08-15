//array 2 dimensi perkalian

let num1 = [
    [3, 4],
    [1, 2]
];

let num2 = [
    [7, 5],
    [6, 4]
]

function PerkalianArray(num1, num2){

    let num3 = [];
    let aNumRows = num1.length, aNumCols = num1[0].length, 
        bNumRows = num2.length, bNumCols = num2[0].length;

    // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
        num3[r] = new Array(bNumCols); 
        // initialize the current row
        for (var c = 0; c < bNumCols; ++c) {
            num3[r][c] = 0;             
            // initialize the current cell
            for (var i = 0; i < aNumCols; ++i) {
                num3[r][c] += num1[r][i] * num2[i][c];
            }
        }
      }
    // return num3;
    console.log(num3);
}

PerkalianArray(num1, num2);