const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedList = [...numbersList].sort((a, b) => a - b);

console.log(`Original array: ${numbersList}`);
console.log(`Copied and sorted array: ${copiedList}`);
