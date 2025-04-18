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
exports.bikeService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../helpers/AppError"));
const prisma_1 = __importDefault(require("../../shared/prisma"));
const PrismaQueryBuilder_1 = require("../../builders/PrismaQueryBuilder");
const createBikeIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistCustomer = yield prisma_1.default.customer.findUnique({
        where: {
            customerId: payload === null || payload === void 0 ? void 0 : payload.customerId,
        },
    });
    if (!isExistCustomer || isExistCustomer.isDeleted) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Customer not found');
    }
    const result = yield prisma_1.default.bike.create({
        data: payload,
    });
    return result;
});
const getAllBikesFromDbWithQuery = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { search = '', sort = 'asc', page = 1, limit = 10 } = query;
    return yield (0, PrismaQueryBuilder_1.PrismaQueryBuilder)({
        model: prisma_1.default.bike,
        searchFields: ['brand', 'model'],
        search,
        sortField: 'createdAt',
        sortOrder: sort,
        page: Number(page),
        limit: Number(limit),
    });
});
const getSingleBikeFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    if (!result || result.isDeleted) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Bike not found');
    }
    return result;
});
const updateBikeIntoDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    if (!isExist) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Bike not found');
    }
    else if (isExist.isDeleted) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Bike is deleted');
    }
    const result = yield prisma_1.default.bike.update({
        where: {
            bikeId: id,
        },
        data: payload,
    });
    return result;
});
const softDeleteBikeFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    if (!isExist || isExist.isDeleted) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Bike not found');
    }
    const result = yield prisma_1.default.bike.update({
        where: {
            bikeId: id,
        },
        data: {
            isDeleted: true,
        },
    });
    return result;
});
exports.bikeService = {
    createBikeIntoDb,
    getAllBikesFromDbWithQuery,
    getSingleBikeFromDb,
    updateBikeIntoDb,
    softDeleteBikeFromDb,
};
