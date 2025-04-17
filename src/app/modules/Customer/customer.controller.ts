import status from "http-status";
import catchAsync from "../../helpers/catchAsync";
import sendResponse from "../../helpers/sendResponse";
import { customerService } from "./customer.service";

const createCustomerIntoDb = catchAsync(async (req, res) => {
  const customer = await customerService.createCustomerIntoDb(req?.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer Created Successfully",
    data: customer,
  });
});

const getAllCustomersFromDbWithQuery = catchAsync(async (req, res) => {
  const customers = await customerService.getAllCustomersFromDbWithQuery(
    req?.query
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customers Retrieved Successfully",
    data: customers,
  });
})

export const customerController = {
  createCustomerIntoDb,
  getAllCustomersFromDbWithQuery
};
