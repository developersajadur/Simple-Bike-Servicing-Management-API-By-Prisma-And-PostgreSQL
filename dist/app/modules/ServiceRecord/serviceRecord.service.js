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
exports.serviceRecordService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../helpers/AppError"));
const prisma_1 = __importDefault(require("../../shared/prisma"));
const PrismaQueryBuilder_1 = require("../../builders/PrismaQueryBuilder");
const prisma_2 = require("../../../../generated/prisma");
const date_fns_1 = require("date-fns");
const createServiceRecordIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistBike = yield prisma_1.default.bike.findUnique({
        where: {
            bikeId: payload === null || payload === void 0 ? void 0 : payload.bikeId,
        },
    });
    if (!isExistBike || isExistBike.isDeleted) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Bike not found');
    }
    const result = yield prisma_1.default.serviceRecord.create({
        data: payload,
    });
    return result;
});
const getAllServiceRecordsFromDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { search = '', sort = 'asc', page = 1, limit = 10 } = query;
    return yield (0, PrismaQueryBuilder_1.PrismaQueryBuilder)({
        model: prisma_1.default.serviceRecord,
        searchFields: ['description'],
        search,
        sortField: 'createdAt',
        sortOrder: sort,
        page: Number(page),
        limit: Number(limit),
    });
});
const getSingleServiceRecordFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceRecord = yield prisma_1.default.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    if (!serviceRecord || serviceRecord.isDeleted) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Service Record not found');
    }
    return serviceRecord;
});
const updateServiceRecordIntoDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceRecord = yield prisma_1.default.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    if (!serviceRecord || serviceRecord.isDeleted) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Service Record not found');
    }
    const updatedServiceRecord = yield prisma_1.default.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: payload,
    });
    return updatedServiceRecord;
});
const getStatusBaseServiceRecordFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = (0, date_fns_1.subDays)(new Date(), 7);
    const serviceRecord = yield prisma_1.default.serviceRecord.findMany({
        where: {
            isDeleted: false,
            serviceDate: {
                lt: sevenDaysAgo,
            },
            status: {
                in: [prisma_2.ServiceRecordStatus.in_progress, prisma_2.ServiceRecordStatus.pending],
            },
        },
    });
    return serviceRecord;
});
exports.serviceRecordService = {
    createServiceRecordIntoDb,
    getAllServiceRecordsFromDb,
    getSingleServiceRecordFromDb,
    updateServiceRecordIntoDb,
    getStatusBaseServiceRecordFromDb,
};
