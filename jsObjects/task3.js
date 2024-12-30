const car1 = {
    brand: '',
    model: '',
    year: ''
}

const car2 = {
    brand: '',
    model: '',
    owner: ''
}

const car3 = {...car1, ...car2};

console.log(car3);