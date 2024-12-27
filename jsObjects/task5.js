const users = [
    {name: 'John', email: 'john@mail.com', age: '25'},
    {name: 'Jane', email: 'jone@mail.com', age: '18'},
    {name: 'Lucy', email: 'lucy@mail.com', age: '27'}
];

let data = [];

for (let user of users) {
    console.log(user);
    const {name, email, age} = user;
    console.log(name, email, age);
}