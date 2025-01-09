const todo = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .catch(error => {
        console.error('Error: ', error);
    });

const user = fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .catch(error => {
        console.error('Error: ', error);
    });

const allResponses = Promise.all([todo, user]);
const firstResponce = Promise.race([todo, user]);

allResponses
    .then(response => console.log('All responses: ', response))
    .catch(error => console.log('Error in all responses: ', error));

firstResponce
    .then(response => console.log('First finished: ', response))
    .catch(error => console.log('First rejected: ', error));