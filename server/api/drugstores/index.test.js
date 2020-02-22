import request from "supertest";
import express from "express";
import router from ".";

import drugstore from "../../../mock/drugstore";

var app = express();
app.use(router);

describe("Route drugstore", () => {
  it("should return the closest drugstore", async () => {
    const response = await request(app).get("/");
    expect(response.body).toStrictEqual(drugstore);
  });
});
