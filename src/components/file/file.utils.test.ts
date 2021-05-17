import path from 'path';
import { getDefaultFileUrl, isValidExtension, isFileValid } from './file.utils';
import FileMessage from './file-messages';

describe('FileUtils', () => {
  test('Should verify if file extension is valid', () => {
    const filePath = getDefaultFileUrl();

    const isFileExtensionValid = isValidExtension(filePath);

    expect(isFileExtensionValid).toBeTruthy();
  });

  describe('Cases inside isFileValid function', () => {
    test('Should return false if does not exists', () => {
      const filePath = 'no_matter';

      const { isValid, content } = isFileValid(filePath);

      expect(isValid).toBeFalsy();
      expect(content).toBe(FileMessage.WRONG_PATH);
    });

    test('Should return false if file extension is invalid', () => {
      const filePath = path.join(process.cwd(), 'app.ts');

      const { isValid, content } = isFileValid(filePath);

      expect(isValid).toBeFalsy();
      expect(content).toBe(FileMessage.WRONG_EXTENSION);
    });

    test('Should return false if file is empty', () => {
      const filePath = path.join(process.cwd(), 'data/empty.txt');

      const { isValid, content } = isFileValid(filePath);

      expect(isValid).toBeFalsy();
      expect(content).toBe(FileMessage.EMPTY_FILE);
    });

    test('Should return true if file is valid', () => {
      const filePath = getDefaultFileUrl();

      const { isValid, content } = isFileValid(filePath);

      expect(isValid).toBeTruthy();
      expect(content).toHaveLength(6);
    });
  });
});
