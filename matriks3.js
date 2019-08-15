let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//console.log(nums[0]);
//transpose
console.log(nums[0].map((col, i) => nums.map(row => row[i])));



