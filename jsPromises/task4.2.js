class fetchClass {
  static async fetchData(url, options) {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error: ", error);
      throw error;
    }
  }

  static async allResponses(...promises) {
    try {
      const response = await Promise.all(promises);
      return console.log("All responses: ", response);
    } catch (error) {
      return console.log("Error in all responses: ", error);
    }
  }

  static async firstResponse(...promises) {
    try {
      const response = await Promise.race(promises);
      return console.log("First finished: ", response);
    } catch (error) {
      return console.log("First rejected: ", error);
    }
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
