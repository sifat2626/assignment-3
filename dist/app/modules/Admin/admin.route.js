"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const router = express_1.default.Router();
router.delete('/users/:id', admin_controller_1.AdminControllers.deleteUser);
router.patch('/users/:id/block', admin_controller_1.AdminControllers.blockUser);
exports.AdminRoutes = router;
