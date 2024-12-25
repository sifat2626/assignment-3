"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
// blog.model.ts
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, 'Blog title is required'],
        trim: true,
    },
    content: {
        type: String,
        required: [true, 'Blog content is required'],
    },
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: true, // By default, blogs are published
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});
exports.Blog = (0, mongoose_1.model)('Blog', blogSchema);
