const request = require("supertest");
const app = require("../index");

const bookId = "659ea024cde79d94d9e8ce9e";
const book = {
  title: "The Dark Truth 2",
  authors: ["Dr. Andrew", "Dr. Mathew"],
  isbn: "1234567899",
  genre: "horror",
  publicationYear: "2005",
  price: 1200,
  quantity: 4,
  description: "this is desc 2",
};
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTllOGJhNjNhYTQ4ZjZlZDg5Mjc3OWIiLCJpYXQiOjE3MDQ4OTQ1OTAsImV4cCI6MTcwNDk4MDk5MH0.QF3mvsGwPe8N5gYXwNxLNNk2OstmNWu8ccj8o-Uk7so";

describe("Auth Routes", () => {
  it("should get all books", async () => {
    const response = await request(app).get("/api/books");
    expect(response.statusCode).toBe(200);
  });

  it("should get book by id", async () => {
    const response = await request(app).get(`/api/books/${bookId}`);
    expect(response.statusCode).toBe(200);
  });

  it("should add a book", async () => {
    const response = await request(app)
      .post(`/api/books/`)
      .set("Authorization", `Bearer ${token}`)
      .send(book);
    expect(response.statusCode).toBe(201);
  });

  it("should update a book", async () => {
    const response = await request(app)
      .post(`/api/books/${bookId}`)
      .set("Authorization", `Bearer ${token}`)
      .send(book);
    expect(response.statusCode).toBe(200);
  });

  it("should delete a book", async () => {
    const response = await request(app)
      .post(`/api/books/${bookId}`)
      .set("Authorization", `Bearer ${token}`)
      .send(book);
    expect(response.statusCode).toBe(200);
  });
});
