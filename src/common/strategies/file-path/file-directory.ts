import UserInterfaceMessage from '../../../components/user-interface/user-interface.messages';
import FilePathStrategy from '../../file-path/file-path.strategy';
import { Message } from '../../interfaces/message';

class DirectoryFile implements FilePathStrategy, Message {
  getInputMessage = () : string => UserInterfaceMessage.GET_FILE_URL;

  getFile = (filePath : string) => filePath;
}

export default DirectoryFile;
