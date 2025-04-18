"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecordController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../helpers/catchAsync"));
const sendResponse_1 = __importDefault(require("../../helpers/sendResponse"));
const serviceRecord_service_1 = require("./serviceRecord.service");
const createServiceRecordIntoDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceRecord = yield serviceRecord_service_1.serviceRecordService.createServiceRecordIntoDb(req === null || req === void 0 ? void 0 : req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Service Record Created Successfully',
        data: serviceRecord,
    });
}));
const getAllServiceRecordsFromDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceRecords = yield serviceRecord_service_1.serviceRecordService.getAllServiceRecordsFromDb(req === null || req === void 0 ? void 0 : req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Service Records Retrieved Successfully',
        data: serviceRecords,
    });
}));
const getSingleServiceRecordFromDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const serviceRecord = yield serviceRecord_service_1.serviceRecordService.getSingleServiceRecordFromDb((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Service Record Retrieved Successfully',
        data: serviceRecord,
    });
}));
const updateServiceRecordIntoDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const serviceRecord = yield serviceRecord_service_1.serviceRecordService.updateServiceRecordIntoDb((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id, req === null || req === void 0 ? void 0 : req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Service Record Updated Successfully',
        data: serviceRecord,
    });
}));
const getStatusBaseServiceRecordFromDb = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceRecord = yield serviceRecord_service_1.serviceRecordService.getStatusBaseServiceRecordFromDb();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Overdue or pending services fetched successfully',
        data: serviceRecord,
    });
}));
exports.serviceRecordController = {
    createServiceRecordIntoDb,
    getAllServiceRecordsFromDb,
    getSingleServiceRecordFromDb,
    updateServiceRecordIntoDb,
    getStatusBaseServiceRecordFromDb,
};
