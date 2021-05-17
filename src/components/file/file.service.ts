import { FileMessageType } from './types/file-error';
import FilePathStrategy from '../../common/file-path/file-path.strategy';
import UserInterfaceMessage from '../user-interface/user-interface.messages';
import { getStrategyByOption } from '../../common/file-path/file-path.utils';
import FilePathContext from '../../common/file-path/file-path.context';
import { isFileValid } from './file.utils';

class FileService {
  getFileStrategy(selectedOption: string) : FileMessageType {
    if (selectedOption === '0') {
      return {
        isValid: false,
        content: UserInterfaceMessage.GOOD_BYE,
      };
    }

    const selectedStrategy : FilePathStrategy | undefined = getStrategyByOption(selectedOption);

    if (!selectedStrategy) {
      return {
        isValid: false,
        content: UserInterfaceMessage.INVALID_OPTION,
      };
    }

    return {
      isValid: true,
      content: selectedStrategy,
    };
  }

  async getFileContent(strategy: FilePathStrategy) : Promise<FileMessageType> {
    const context : FilePathContext = new FilePathContext(strategy);
    const filePath : string = await context.getFilePath();

    const { isValid, content } = isFileValid(filePath);

    if (!isValid) {
      return {
        isValid: false,
        content,
      };
    }

    return {
      isValid: true,
      content,
    };
  }
}

export default FileService;
