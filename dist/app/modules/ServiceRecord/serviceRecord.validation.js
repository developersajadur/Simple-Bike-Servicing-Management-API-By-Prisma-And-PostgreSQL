"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordSchema = exports.updateServiceRecordValidation = exports.createServiceRecordValidation = void 0;
const zod_1 = require("zod");
// Create Service Record Validation
exports.createServiceRecordValidation = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string().uuid('Invalid bikeId format'),
        serviceDate: zod_1.z
            .string()
            .refine((val) => !isNaN(Date.parse(val)), {
            message: 'Invalid serviceDate format',
        })
            .transform((val) => new Date(val)),
        description: zod_1.z.string().min(1, 'Description cannot be empty'),
        status: zod_1.z.enum(['pending', 'in_progress', 'completed'], {
            errorMap: () => ({
                message: "Invalid status value. Allowed values are 'pending', 'in_progress', or 'completed'",
            }),
        }),
    }),
});
// Update Service Record Validation
exports.updateServiceRecordValidation = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string().uuid('Invalid bikeId format').optional(),
        serviceDate: zod_1.z
            .string()
            .refine((val) => !isNaN(Date.parse(val)), {
            message: 'Invalid serviceDate format',
        })
            .transform((val) => new Date(val))
            .optional(),
        description: zod_1.z.string().min(1, 'Description cannot be empty').optional(),
        status: zod_1.z
            .enum(['pending', 'in_progress', 'completed'], {
            errorMap: () => ({
                message: "Invalid status value. Allowed values are 'pending', 'in_progress', or 'completed'",
            }),
        })
            .optional(),
    }),
});
exports.ServiceRecordSchema = {
    createServiceRecordValidation: exports.createServiceRecordValidation,
    updateServiceRecordValidation: exports.updateServiceRecordValidation,
};
