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
const file_utils_1 = require("./src/components/file/file-utils");
const input_utils_1 = require("./src/components/input/input-utils");
const user_interface_1 = __importDefault(require("./src/components/user-interface/user-interface"));
const color_1 = __importDefault(require("./src/utils/color"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    user_interface_1.default.displayHeader();
    const filePath = yield input_utils_1.makeQuestion('Please, provide the file URL or press enter if you want to use a default one: ');
    const { isValid, message } = file_utils_1.isFileValid(filePath);
    const fontColor = isValid ? color_1.default.GREEN : color_1.default.RED;
    console.log(fontColor, message);
    // TODO: Refactor this code
    if (!isValid) {
        return undefined;
    }
    const fileContent = file_utils_1.getFileContent(filePath);
    console.log(fileContent);
    return undefined;
});
main();
//# sourceMappingURL=app.js.map