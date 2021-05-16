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

  async getFileContent(strategy: FilePathStrategy) : Promise<string[] | undefined> {
    const context : FilePathContext = new FilePathContext(strategy);
    const filePath : string = await context.getFilePath();

    const { isValid, message } = isFileValid(filePath);

    // TODO: Change to userINterfaceController
    if (!isValid) {
      return exitMain(Colors.RED, message, readInputInterface);
    }

    const fileContent : string[] = getFileContent(filePath);

    if (!hasFileContent(fileContent)) {
      return undefined;
    }

    return fileContent;
  }
}

export default FileService;
