"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeValidationSchema = void 0;
const zod_1 = require("zod");
const createBikeValidation = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z
            .string({
            required_error: 'Brand is required',
        })
            .min(1, 'Brand cannot be empty'),
        model: zod_1.z
            .string({
            required_error: 'Model is required',
        })
            .min(1, 'Model cannot be empty'),
        year: zod_1.z
            .number({
            required_error: 'Year is required',
        })
            .int('Year must be an integer')
            .min(1900, 'Year must be greater than or equal to 1900')
            .max(new Date().getFullYear(), `Year cannot be in the future`),
        customerId: zod_1.z
            .string({
            required_error: 'Customer ID is required',
        })
            .uuid('Invalid Customer ID'),
    }),
});
const updateBikeValidation = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string().min(1, 'Brand cannot be empty').optional(),
        model: zod_1.z.string().min(1, 'Model cannot be empty').optional(),
        year: zod_1.z
            .number()
            .int('Year must be an integer')
            .min(1900, 'Year must be greater than or equal to 1900')
            .max(new Date().getFullYear(), `Year cannot be in the future`)
            .optional(),
        customerId: zod_1.z.string().uuid('Invalid Customer ID').optional(),
    }),
});
exports.BikeValidationSchema = {
    createBikeValidation,
    updateBikeValidation,
};
