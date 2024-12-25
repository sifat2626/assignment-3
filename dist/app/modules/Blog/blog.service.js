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
exports.BlogService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const blog_model_1 = require("./blog.model");
const createBlog = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = new blog_model_1.Blog(payload);
    return yield blog.save();
});
const getAllBlogs = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { search, sortBy, sortOrder, filter } = query;
    const searchQuery = search
        ? {
            $or: [
                { title: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } },
            ],
        }
        : {};
    const filterQuery = filter ? { author: filter } : {};
    const sortQuery = {};
    if (sortBy) {
        sortQuery[sortBy] = sortOrder === 'desc' ? -1 : 1;
    }
    return yield blog_model_1.Blog.find(Object.assign(Object.assign({}, searchQuery), filterQuery)).sort(sortQuery);
});
const getBlogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.Blog.findById(id).populate('author', 'name email');
    if (!blog) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Blog not found!');
    }
    return blog;
});
const updateBlog = (id, updates, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.Blog.findOne({ _id: id, author: userId });
    if (!blog) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Blog not found or unauthorized!');
    }
    Object.assign(blog, updates);
    return yield blog.save();
});
const deleteBlog = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.Blog.findOneAndDelete({ _id: id, author: userId });
    if (!blog) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Blog not found or unauthorized!');
    }
    return true;
});
exports.BlogService = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
};
