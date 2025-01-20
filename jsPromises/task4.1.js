class fetchClass {
  static fetchData(url, options) {
    return fetch(url, options)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error: ", error);
      });
  }

  static allResponses(...promises) {
    return Promise.all(promises)
      .then((response) => console.log("All responses: ", response))
      .catch((error) => console.log("Error in all responses: ", error));
  }

  static firstResponse(...promises) {
    return Promise.race(promises)
      .then((response) => console.log("First finished: ", response))
      .catch((error) => console.log("First rejected: ", error));
  }
}

const userPromise = fetchClass.fetchData(
  "https://jsonplaceholder.typicode.com/users/1"
);
const todoPromise = fetchClass.fetchData(
  "https://jsonplaceholder.typicode.com/todos/1"
);

fetchClass.allResponses(userPromise, todoPromise);
fetchClass.firstResponse(userPromise, todoPromise);
