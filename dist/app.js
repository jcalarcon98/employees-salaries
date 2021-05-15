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
const read_context_1 = __importDefault(require("./src/common/strategies/read-context"));
const color_1 = __importDefault(require("./src/utils/color"));
const file_strategy_utils_1 = require("./src/utils/file-strategy-utils");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    user_interface_1.default.displayHeader();
    user_interface_1.default.displayFileOptions();
    const selectedFileOption = yield input_utils_1.makeQuestion(input_utils_1.readInputInterface, 'Please, Enter your option: ');
    if (selectedFileOption === '0') {
        input_utils_1.readInputInterface.close();
        return undefined;
    }
    const selectedStrategy = file_strategy_utils_1.getStrategy(selectedFileOption);
    if (!selectedStrategy) {
        console.log(color_1.default.RED, 'Please provide a valid option');
        return undefined;
    }
    const context = new read_context_1.default(selectedStrategy.strategy);
    const fileUrl = yield context.getFileUrl();
    console.log(fileUrl);
    return undefined;
});
main();
//# sourceMappingURL=app.js.map