import UserInterfaceMessage from '../../components/user-interface/user-interface-messages';
import ReadDataStrategy from '../strategies/read-strategy';

class ReadFromDirectory implements ReadDataStrategy {
  isInputRequired = (): boolean => true;

  getInputMessage(): string {
    return UserInterfaceMessage.GET_FILE_URL;
  }

  getFile(filePath: string) {
    return filePath;
  }
}

export default ReadFromDirectory;
