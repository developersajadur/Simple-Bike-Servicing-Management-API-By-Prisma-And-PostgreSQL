"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecordRoute = void 0;
const express_1 = require("express");
const serviceRecord_controller_1 = require("./serviceRecord.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const serviceRecord_validation_1 = require("./serviceRecord.validation");
const router = (0, express_1.Router)();
router.post('/services', (0, validateRequest_1.default)(serviceRecord_validation_1.ServiceRecordSchema.createServiceRecordValidation), serviceRecord_controller_1.serviceRecordController.createServiceRecordIntoDb);
router.get('/services', serviceRecord_controller_1.serviceRecordController.getAllServiceRecordsFromDb);
router.get('/services/status', serviceRecord_controller_1.serviceRecordController.getStatusBaseServiceRecordFromDb);
router.get('/services/:id', serviceRecord_controller_1.serviceRecordController.getSingleServiceRecordFromDb);
router.put('/services/:id', (0, validateRequest_1.default)(serviceRecord_validation_1.ServiceRecordSchema.updateServiceRecordValidation), serviceRecord_controller_1.serviceRecordController.updateServiceRecordIntoDb);
exports.serviceRecordRoute = router;
