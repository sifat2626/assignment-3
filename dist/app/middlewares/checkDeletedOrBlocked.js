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
const AppError_1 = __importDefault(require("../errors/AppError"));
const user_model_1 = require("../modules/User/user.model");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const auth = () => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield user_model_1.User.findById(req.user._id);
        if (!user) {
            return new AppError_1.default(404, 'This user is not found !');
        }
        if (user.isDeleted || user.isBlocked) {
            return res.status(403).json({
                success: false,
                message: 'Unauthorized access',
                data: null,
            });
        }
        next();
    }));
};
exports.default = auth;
