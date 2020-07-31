import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import db from "./mongodb.ts";

const collegesCollection = db.collection("colleges");

const getColleges = async ({ response }: { response: any }) => {
  try {
    const colleges = await collegesCollection.find();
    response.status = 201,
      response.body = {
        success: true,
        data: colleges,
      };
  } catch (err) {
    response.status = 500,
      response.body = {
        success: false,
        data: err.toString(),
      };
  }
};

const createColleges = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  const college = await body.value;
  if (!request.hasBody) {
    response.status = 400,
      response.body = {
        success: false,
        msg: "No Data",
      };
  } else {
    try {
      const id = await collegesCollection.insertOne(college);
      response.status = 201,
        response.body = {
          success: true,
          data: college,
        };
    } catch (err) {
      response.status = 500,
        response.body = {
          success: false,
          msg: err.toString(),
        };
    }
  }
};

export { getColleges, createColleges };
