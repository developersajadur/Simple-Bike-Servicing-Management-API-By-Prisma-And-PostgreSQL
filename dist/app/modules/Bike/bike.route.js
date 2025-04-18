"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoute = void 0;
const express_1 = require("express");
const bike_controller_1 = require("./bike.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const bike_validation_1 = require("./bike.validation");
const router = (0, express_1.Router)();
router.post('/bikes', (0, validateRequest_1.default)(bike_validation_1.BikeValidationSchema.createBikeValidation), bike_controller_1.bikeController.createBikeIntoDb);
router.get('/bikes', bike_controller_1.bikeController.getAllBikesFromDbWithQuery);
router.get('/bikes/:id', bike_controller_1.bikeController.getSingleBikeFromDb);
router.put('/bikes/:id', (0, validateRequest_1.default)(bike_validation_1.BikeValidationSchema.updateBikeValidation), bike_controller_1.bikeController.updateBikeIntoDb);
router.delete('/bikes/:id', bike_controller_1.bikeController.softDeleteBikeFromDb);
exports.bikeRoute = router;
