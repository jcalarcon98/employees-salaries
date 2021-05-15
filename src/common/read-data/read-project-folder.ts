import path from 'path';
import UserInterfaceMessage from '../../components/user-interface/user-interface-messages';
import ReadDataStrategy from '../strategies/read-strategy';

class ReadFromProject implements ReadDataStrategy {
  isInputRequired = (): boolean => true;

  getInputMessage(): string {
    return UserInterfaceMessage.GET_FILE_NAME;
  }

  getFile(filePath: string) {
    return path.join(process.cwd(), 'data', `${filePath}.txt`);
  }
}

export default ReadFromProject;
