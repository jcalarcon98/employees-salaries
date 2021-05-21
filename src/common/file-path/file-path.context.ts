import FilePathStrategy from './file-path.strategy';
import UserInterface from '../../components/user-interface/user-interface.model';
import { readInputInterface } from '../../components/user-interface/user-interface.utils';
import { isInputRequired } from './file-path.utils';
import { Message } from '../interfaces/message';

class FilePathContext {
  constructor(private filePathStrategy: FilePathStrategy) {}

  async getFilePath() : Promise<string> {
    let fileUrl : string = '';

    if (isInputRequired(this.filePathStrategy)) {
      fileUrl = await UserInterface.makeQuestion(
        readInputInterface,
        (this.filePathStrategy as FilePathStrategy & Message).getInputMessage(),
      );
    }

    readInputInterface.close();
    return this.filePathStrategy.getFile(fileUrl);
  }
}

export default FilePathContext;
