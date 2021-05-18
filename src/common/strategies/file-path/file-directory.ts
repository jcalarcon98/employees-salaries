import UserInterfaceMessage from '../../../components/user-interface/user-interface.messages';
import FilePathStrategy from '../../file-path/file-path.strategy';

class DirectoryFile implements FilePathStrategy {
  isInputRequired = () : boolean => true;

  getInputMessage = () : string => UserInterfaceMessage.GET_FILE_URL;

  getFile = (filePath : string) => filePath;
}

export default DirectoryFile;
