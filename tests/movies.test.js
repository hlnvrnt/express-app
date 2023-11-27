const request = require("supertest");
const app = require("../app");

// describe("GET /api/movies", () => {
//     it("should return all movies", async () => {
//         const response = await request(app).get("/api/movies");
//     });
//   });
 

 

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    console.log(response)
  });
});

describe("GET /api/movies/:id", () => {

    it("should return movies id", async () => {
      const responseid = await request(app).get("/api/movies/1");
  
      expect(responseid.headers["content-type"]).toMatch(/json/);
      expect(responseid.status).toEqual(200);
      console.log(responseid)
    } 
    );
  });


