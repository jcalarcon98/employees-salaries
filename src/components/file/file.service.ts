import { FileMessageType } from './types/file-error';
import FilePathStrategy from '../../common/file-path/file-path.strategy';
import Colors from '../../utils/color';
import { exitMain, readInputInterface } from '../user-interface/user-interface.utils';
import UserInterfaceMessage from '../user-interface/user-interface.messages';
import { getStrategyByOption } from '../../common/file-path/file-path.utils';
import FilePathContext from '../../common/file-path/file-path.context';
import { isFileValid } from './file-utils';

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
