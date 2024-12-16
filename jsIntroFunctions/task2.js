function isAdult (age) {
    return age >= 18 ? true : false;
}

const age = function (age) {
    return age >=18 ? true : false;
}

const ageArrow = age => {
    return age >=18 ? true :false;
}

const ageArrowCons = age => age >=18 ? true: false;

console.log('Function declaration: ' + isAdult(25));
console.log('Function expression: ' + age(15));
console.log('Arrow function expression: ' + ageArrow(25));
console.log('Concise arrow function expression: ' + ageArrowCons(15));