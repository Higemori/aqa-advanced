function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error(`denominator cannot be 0`);
    }

    if (isNaN(numerator)) {
        throw new Error(`${numerator} is not a number`);
    }

    if (isNaN(denominator)) {
        throw new Error(`${denominator} is not a number`);
    }

    return (numerator/denominator).toFixed(2);
}

try {
    console.log(divide('bob', 3.3));
} catch (e) {
    console.error(e);
}