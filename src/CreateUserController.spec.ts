/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import  app  from "./index";
import request from "supertest";

import uploadConfig from './uploadConfig'
import multer from 'multer'
const upload = multer(uploadConfig)

describe("Create User Controller", () => {
  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/register").send({
      title: "New Title",
        image: "New Image",
        autor:"New autor",
        text: "New Text",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });
  })
 