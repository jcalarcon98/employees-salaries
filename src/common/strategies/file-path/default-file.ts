import FilePathStrategy from '../../file-path/file-path.strategy';
import { getDefaultFileUrl } from '../../../components/file/file.utils';

class DefaultFile implements FilePathStrategy {
  isInputRequired = () : boolean => false;

  getFile = () : string => getDefaultFileUrl();

  getInputMessage = () : string => '';
}

export default DefaultFile;
