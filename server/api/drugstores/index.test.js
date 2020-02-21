import request from "supertest";
import express from "express";
import router from "./";

import drugstores from "../../../mock/drugstores";

var app = express();
app.use(router);

describe("Route drugstores", () => {
  it("should return all drugstores", async () => {
    const response = await request(app).get("/");
    expect(response.body).toStrictEqual(drugstores);
  });
});
