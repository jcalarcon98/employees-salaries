import { makeQuestion, readInputInterface } from '../../components/input/input-utils';
import FilePathStrategy from './file-path.strategy';

class FilePathContext {
  constructor(private filePathStrategy: FilePathStrategy) {}

  async getFilePath() : Promise<string> {
    let fileUrl : string = '';
    const isInputRequired : boolean = this.filePathStrategy.isInputRequired();

    if (isInputRequired) {
      fileUrl = await makeQuestion(readInputInterface, this.filePathStrategy.getInputMessage());
    }

    readInputInterface.close();
    return this.filePathStrategy.getFile(fileUrl);
  }
}

export default FilePathContext;
