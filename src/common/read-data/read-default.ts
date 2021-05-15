import ReadDataStrategy from '../strategies/read-strategy';
import { getDefaultFileUrl } from '../../components/file/file-utils';

class ReadDefaultFile implements ReadDataStrategy {
  isInputRequired(): boolean {
    return false;
  }

  getFile() {
    return getDefaultFileUrl();
  }

  getInputMessage(): string {
    return '';
  }
}

export default ReadDefaultFile;
