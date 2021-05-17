"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const user_interface_controller_1 = __importDefault(require("./src/components/user-interface/user-interface.controller"));
const main = () => {
    const userInterfaceController = new user_interface_controller_1.default();
    userInterfaceController.execute();
};
exports.main = main;
exports.main();
//# sourceMappingURL=app.js.map