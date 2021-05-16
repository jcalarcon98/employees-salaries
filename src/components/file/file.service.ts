import { FileMessageType } from './types/file-error';
import FilePathStrategy from '../../common/file-path/file-path.strategy';
import Colors from '../../utils/color';
import { exitMain } from '../user-interface/user-interface.utils';
import UserInterfaceMessage from '../user-interface/user-interface.messages';
import { readInputInterface } from '../input/input-utils';
import { getStrategyByOption } from '../../common/file-path/file-path.utils';
import FilePathContext from '../../common/file-path/file-path.context';
import { isFileValid, getFileContent, hasFileContent } from './file-utils';

class FileService {
  getFileStrategy(selectedOption: string) : FilePathStrategy | undefined {
    if (selectedOption === '0') {
      return exitMain(Colors.BLUE, UserInterfaceMessage.GOOD_BYE, readInputInterface);
    }

    const selectedStrategy : FilePathStrategy | undefined = getStrategyByOption(selectedOption);
    return selectedStrategy;
  }

  async getFileContent(strategy: FilePathStrategy) : Promise<FileMessageType> {
    const context : FilePathContext = new FilePathContext(strategy);
    const filePath : string = await context.getFilePath();

    const { isValid, content: message } = isFileValid(filePath);

    if (!isValid) {
      return {
        isValid: false,
        content: message,
      };
    }

    const fileContent : string[] = getFileContent(filePath);

    if (!hasFileContent(fileContent)) {
      return {
        isValid: false,
        content: UserInterfaceMessage.EMPTY_FILE,
      };
    }

    return {
      isValid: true,
      content: fileContent,
    };
  }
}

export default FileService;
