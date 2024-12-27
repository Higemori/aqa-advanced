const firstArray = [1, 3, 5, 7, 9];
const secondArray = [2, 4, 6, 8, 10];

const resultedArray = firstArray.concat(secondArray).sort((a, b) => a - b);

console.log(resultedArray);