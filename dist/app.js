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
const input_utils_1 = require("./src/components/input/input-utils");
const user_interface_1 = __importDefault(require("./src/components/user-interface/user-interface"));
const color_1 = __importDefault(require("./src/utils/color"));
const file_path_context_1 = __importDefault(require("./src/common/file-path/file-path.context"));
const file_path_utils_1 = require("./src/common/file-path/file-path.utils");
const user_interface_messages_1 = __importDefault(require("./src/components/user-interface/user-interface.messages"));
const user_interface_utils_1 = require("./src/components/user-interface/user-interface.utils");
const file_utils_1 = require("./src/components/file/file-utils");
const employee_service_1 = require("./src/components/employees/employee.service");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    user_interface_1.default.displayHeader();
    user_interface_1.default.displayFileOptions();
    const selectedFileOption = yield input_utils_1.makeQuestion(input_utils_1.readInputInterface, user_interface_messages_1.default.SELECT_OPTION);
    if (selectedFileOption === '0') {
        return user_interface_utils_1.exitMain(color_1.default.BLUE, user_interface_messages_1.default.GOOD_BYE, input_utils_1.readInputInterface);
    }
    const selectedStrategy = file_path_utils_1.getStrategyByOption(selectedFileOption);
    if (!selectedStrategy) {
        return user_interface_utils_1.exitMain(color_1.default.RED, user_interface_messages_1.default.INVALID_OPTION, input_utils_1.readInputInterface);
    }
    const context = new file_path_context_1.default(selectedStrategy);
    const filePath = yield context.getFilePath();
    const { isValid, message } = file_utils_1.isFileValid(filePath);
    if (!isValid) {
        return user_interface_utils_1.exitMain(color_1.default.RED, message, input_utils_1.readInputInterface);
    }
    const fileContent = file_utils_1.getFileContent(filePath);
    if (!file_utils_1.hasFileContent(fileContent)) {
        return user_interface_utils_1.exitMain(color_1.default.RED, user_interface_messages_1.default.EMPTY_FILE, input_utils_1.readInputInterface);
    }
    const employees = employee_service_1.getEmployees(fileContent);
    employees.forEach((currentEmployee) => console.log(currentEmployee.getSalary(), currentEmployee.name));
    return undefined;
});
main();
//# sourceMappingURL=app.js.map