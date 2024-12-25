"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const blog_controller_1 = require("./blog.controller");
const blog_validation_1 = require("./blog.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const checkDeletedOrBlocked_1 = __importDefault(require("../../middlewares/checkDeletedOrBlocked"));
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(), (0, checkDeletedOrBlocked_1.default)(), (0, validateRequest_1.default)(blog_validation_1.BlogValidation.createBlogSchema), blog_controller_1.BlogControllers.createBlog);
router.get('/', blog_controller_1.BlogControllers.getBlogs);
router.get('/:id', (0, validateRequest_1.default)(blog_validation_1.BlogValidation.getBlogByIdSchema), blog_controller_1.BlogControllers.getBlogById);
router.patch('/:id', (0, auth_1.default)(), (0, checkDeletedOrBlocked_1.default)(), (0, validateRequest_1.default)(blog_validation_1.BlogValidation.updateBlogSchema), blog_controller_1.BlogControllers.updateBlog);
router.delete('/:id', (0, auth_1.default)(), (0, checkDeletedOrBlocked_1.default)(), (0, validateRequest_1.default)(blog_validation_1.BlogValidation.deleteBlogSchema), blog_controller_1.BlogControllers.deleteBlog);
exports.BlogRoutes = router;
