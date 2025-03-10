const axios = require("axios");
const jsonData = require("./env.json");

describe("Jsonplaceholder API tests", () => {
  test("GET method test", async () => {
    const response = await axios.get(`${jsonData.postUrl}/1`);
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data.id).toBeDefined();
  });

  test("POST method test", async () => {
    const response = await axios.post(jsonData.postUrl,
      {
        userId: 1,
        id: 1,
        title: "new title",
        body: "quia et suscipit\n" +
                    "suscipit recusandae consequuntur expedita et cum\n" +
                    "reprehenderit molestiae ut ut quas totam\n" +
                    "nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        headers: {
          "Content-Type": "application/json",
        }
      });
    console.log(response.data);
    expect(response.status).toBe(201);
    expect(response.data.title).toContain("new title");
  });

  test("PUT method test", async () => {
    const response = await axios.put(`${jsonData.postUrl}/1`,
      {
        userId: 1,
        id: 1,
        title: "new title", 
        body: "new body"
      },
      {
        headers: {
          "Content-Type": "application/json",
        }
      });
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data.title).toContain("new title");
    expect(response.data.body).toContain("new body");
  });

  test("PATCH method test", async () => {
    const response = await axios.patch(`${jsonData.postUrl}/1`,
      {
        title: "new title",
      },
      {
        headers: {
          "Content-Type": "application/json",
        }
      });
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data.title).toContain("new title");
  });

  test("DELETE method test", async () => {
    const response = await axios.delete(`${jsonData.postUrl}/1`);
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data).toBeNull;
  });
});