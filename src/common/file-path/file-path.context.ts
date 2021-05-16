import FilePathStrategy from './file-path.strategy';
import UserInterface from '../../components/user-interface/user-interface.model';
import { readInputInterface } from '../../components/user-interface/user-interface.utils';

class FilePathContext {
  constructor(private filePathStrategy: FilePathStrategy) {}

  async getFilePath() : Promise<string> {
    let fileUrl : string = '';
    const isInputRequired : boolean = this.filePathStrategy.isInputRequired();

    if (isInputRequired) {
      fileUrl = await UserInterface.makeQuestion(
        readInputInterface,
        this.filePathStrategy.getInputMessage(),
      );
    }

    readInputInterface.close();
    return this.filePathStrategy.getFile(fileUrl);
  }
}

export default FilePathContext;
