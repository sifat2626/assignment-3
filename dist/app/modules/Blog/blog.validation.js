"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogValidation = void 0;
const zod_1 = require("zod");
const createBlogSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({ required_error: 'Title is required.' })
            .min(1, 'Title cannot be empty'),
        content: zod_1.z
            .string({ required_error: 'Content is required.' })
            .min(1, 'Content cannot be empty'),
    }),
});
const getBlogByIdSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'Blog ID is required.' }),
    }),
});
const updateBlogSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'Blog ID is required.' }),
    }),
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
    }),
});
const deleteBlogSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'Blog ID is required.' }),
    }),
});
exports.BlogValidation = {
    createBlogSchema,
    getBlogByIdSchema,
    updateBlogSchema,
    deleteBlogSchema,
};
