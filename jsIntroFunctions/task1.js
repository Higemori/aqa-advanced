function findRectangleArea (height, width) {
    return height * width;
}

const rectangleArea = function (height, width) {
    return height * width;
}

const rectangleAreaArrow = (height, width) => {
    return height * width;
}

const rectangleAreaArrowCons = (height, width) => height * width;

console.log('Function declaration: ' + findRectangleArea(5, 6));
console.log('Function expression: ' + rectangleArea(9, 10));
console.log('Arrow function expression: ' + rectangleAreaArrow(13, 12));
console.log('Concise arrow function expression: ' + rectangleAreaArrowCons(7, 4));