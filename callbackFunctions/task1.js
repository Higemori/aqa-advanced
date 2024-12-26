function handleNum(number, isEven, isOdd) {
    if (number % 2 === 0) {
        return isEven(number);
    } else {
        return isOdd(number);
    }
}

function handleEven(num) {
    console.log(`${num} is even`);
} 

function handleOdd(num) {
    console.log(`${num} is odd`);
}

handleNum (13, handleEven, handleOdd);
handleNum (12, handleEven, handleOdd);