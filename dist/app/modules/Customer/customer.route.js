"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoute = void 0;
const express_1 = require("express");
const customer_controller_1 = require("./customer.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const customer_validation_1 = require("./customer.validation");
const router = (0, express_1.Router)();
router.post('/customers', (0, validateRequest_1.default)(customer_validation_1.CustomerValidationSchema.createCustomerValidation), customer_controller_1.customerController.createCustomerIntoDb);
router.get('/customers', customer_controller_1.customerController.getAllCustomersFromDbWithQuery);
router.get('/customers/:id', customer_controller_1.customerController.getSingleCustomerFromDb);
router.put('/customers/:id', (0, validateRequest_1.default)(customer_validation_1.CustomerValidationSchema.updateCustomerValidation), customer_controller_1.customerController.updateCustomerIntoDb);
router.delete('/customers/:id', customer_controller_1.customerController.softDeleteCustomerFromDb);
exports.customerRoute = router;
