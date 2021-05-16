"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const user_interface_controller_1 = __importDefault(require("./src/components/user-interface/user-interface.controller"));
const user_interface_service_1 = __importDefault(require("./src/components/user-interface/user-interface.service"));
const file_service_1 = __importDefault(require("./src/components/file/file.service"));
const employee_service_1 = __importDefault(require("./src/components/employees/employee.service"));
const main = () => {
    const fileService = new file_service_1.default();
    const employeeService = new employee_service_1.default();
    const userInterfaceService = new user_interface_service_1.default(fileService, employeeService);
    const userInterfaceController = new user_interface_controller_1.default(userInterfaceService);
    userInterfaceController.execute();
};
exports.main = main;
exports.main();
//# sourceMappingURL=app.js.map