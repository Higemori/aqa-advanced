async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

const todoData = await fetchData('https://jsonplaceholder.typicode.com/todos/1');
const userData = await fetchData('https://jsonplaceholder.typicode.com/users/1');

const allResponses = Promise.all([todoData, userData]);
const firstResponce = Promise.race([todoData, userData]);

allResponses
    .then(response => console.log('All responses: ', response))
    .catch(error => console.log('Error in all responses: ', error));

firstResponce
    .then(response => console.log('First finished: ', response))
    .catch(error => console.log('First rejected: ', error));