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
const user_interface_1 = __importDefault(require("./user-interface"));
const read_input_1 = require("./read-input");
const file_1 = require("./file");
const defaultFileUrl = file_1.getDefaultFileUrl();
const showMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    const userInterface = new user_interface_1.default();
    userInterface.displayHeader();
    const filePath = yield read_input_1.makeQuestion('Please, provide the file URL or press enter if you want to use a default one: ');
    const fileUrl = filePath !== '' ? filePath : defaultFileUrl;
    if (!file_1.existFile(fileUrl)) {
        console.error('Please, verify the URL you have just provided');
        return;
    }
    if (!file_1.isValidExtension(fileUrl)) {
        console.error('Please, do not forget that the file extension should be .txt');
        return;
    }
    const fileContent = file_1.getFileContent(fileUrl);
    console.log(fileContent);
});
exports.default = showMenu;
//# sourceMappingURL=common.js.map