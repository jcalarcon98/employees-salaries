import FilePathStrategy from '../../file-path/file-path.strategy';
import { getDefaultFileUrl } from '../../../components/file/file.utils';

class DefaultFile implements FilePathStrategy {
  getFile = () : string => getDefaultFileUrl();
}

export default DefaultFile;
