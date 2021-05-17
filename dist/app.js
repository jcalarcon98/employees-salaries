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
exports.main = void 0;
const user_interface_controller_1 = __importDefault(require("./src/components/user-interface/user-interface.controller"));
const user_interface_utils_1 = require("./src/components/user-interface/user-interface.utils");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const userInterfaceController = new user_interface_controller_1.default();
    const employees = yield userInterfaceController.execute();
    if (employees) {
        user_interface_utils_1.showEmployees(employees);
    }
    return undefined;
});
exports.main = main;
exports.main();
//# sourceMappingURL=app.js.map