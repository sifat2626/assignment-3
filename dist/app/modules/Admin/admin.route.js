"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("../User/user.constant");
const router = express_1.default.Router();
router.delete('/users/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), admin_controller_1.AdminControllers.deleteUser);
router.patch('/users/:id/block', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), admin_controller_1.AdminControllers.blockUser);
router.delete('/blogs/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), admin_controller_1.AdminControllers.deleteBlogByAdmin);
exports.AdminRoutes = router;
