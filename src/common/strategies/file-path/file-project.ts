import path from 'path';
import UserInterfaceMessage from '../../../components/user-interface/user-interface.messages';
import FilePathStrategy from '../../file-path/file-path.strategy';
import { Message } from '../../interfaces/message';

class ProjectFile implements FilePathStrategy, Message {
  getInputMessage = () : string => UserInterfaceMessage.GET_FILE_NAME;

  getFile = (filePath : string) : string => path.join(process.cwd(), 'data', `${filePath}.txt`);
}

export default ProjectFile;
