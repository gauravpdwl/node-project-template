import perCalculator from "./testfunction";
import request from "supertest";
import app from "./app";

describe("App", () => {
  it("calculate percentage", () => {
    const output = perCalculator(100, 20);

    expect(output).toBe(20);
  });

  it("check api resposne", async () => {
    const responose = await request(app).get("/").send();
    expect(responose.statusCode).toBe(200);
  });
});
