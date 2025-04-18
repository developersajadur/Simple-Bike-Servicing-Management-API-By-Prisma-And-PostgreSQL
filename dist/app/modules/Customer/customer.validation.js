"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerValidationSchema = exports.updateCustomerValidation = exports.createCustomerValidation = void 0;
const zod_1 = require("zod");
exports.createCustomerValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Name is required',
        })
            .min(1, 'Name cannot be empty'),
        email: zod_1.z
            .string({
            required_error: 'Email is required',
        })
            .email('Invalid email address'),
        phone: zod_1.z
            .string({
            required_error: 'Phone number is required',
        })
            .min(7, 'Phone number must be at least 7 characters'),
    }),
});
exports.updateCustomerValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Name cannot be empty').optional(),
        email: zod_1.z.string().email('Invalid email address').optional(),
        phone: zod_1.z
            .string()
            .min(7, 'Phone number must be at least 7 characters')
            .optional(),
    }),
});
exports.CustomerValidationSchema = {
    createCustomerValidation: exports.createCustomerValidation,
    updateCustomerValidation: exports.updateCustomerValidation,
};
