import ReadDataStrategy from './read-strategy';
import { makeQuestion, readInputInterface } from '../../components/input/input-utils';

class ReadContext {
  constructor(private readDataStrategy: ReadDataStrategy) {}

  async getFileUrl() : Promise<string> {
    let fileUrl : string = '';
    const isInputRequired : boolean = this.readDataStrategy.isInputRequired();

    if (isInputRequired) {
      fileUrl = await makeQuestion(readInputInterface, this.readDataStrategy.getInputMessage());
    }

    readInputInterface.close();
    return this.readDataStrategy.getFile(fileUrl);
  }
}

export default ReadContext;
