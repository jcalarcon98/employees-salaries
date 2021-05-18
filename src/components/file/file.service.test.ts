import FileService from './file.service';
import DirectoryFile from '../../common/strategies/file-path/file-directory';
import UserInterfaceMessage from '../user-interface/user-interface.messages';
import FilePathContext from '../../common/file-path/file-path.context';
import { getDefaultFileUrl } from './file.utils';
import ProjectFile from '../../common/strategies/file-path/file-project';
import FilePathStrategy from '../../common/file-path/file-path.strategy';

describe('FileService', () => {
  let fileService: FileService;

  describe('Cases inside getFileStrategy() function', () => {
    beforeEach(() => {
      fileService = new FileService();
    });

    test('Should return false when selected option is 0', () => {
      const selectedOption : string = '0';

      const { isValid, content } = fileService.getFileStrategy(selectedOption);

      expect(isValid).toBeFalsy();
      expect(content).toBe(UserInterfaceMessage.GOOD_BYE);
    });

    test('Should return a FileDirectory strategy when selected option is one', () => {
      const selectedOption : string = '1';

      const { isValid, content } = fileService.getFileStrategy(selectedOption);

      expect(isValid).toBeTruthy();
      expect(content).toBeInstanceOf(DirectoryFile);
      expect(content.getInputMessage()).toBe(UserInterfaceMessage.GET_FILE_URL);
      expect(content.isInputRequired()).toBeTruthy();
    });

    test('Should return a FileProject strategy when selected option is two', () => {
      const selectedOption : string = '2';

      const { isValid, content } = fileService.getFileStrategy(selectedOption);

      expect(isValid).toBeTruthy();
      expect(content).toBeInstanceOf(ProjectFile);
      expect(content.getInputMessage()).toBe(UserInterfaceMessage.GET_FILE_NAME);
      expect(content.isInputRequired()).toBeTruthy();
    });

    test('Should return false when selected option is invalid', () => {
      const selectedOption : string = 'nooomatteer';

      const { isValid, content } = fileService.getFileStrategy(selectedOption);

      expect(isValid).toBeFalsy();
      expect(content).toBe(UserInterfaceMessage.INVALID_OPTION);
    });
  });

  describe('Cases inside getFileContent() function', () => {
    let strategy : FilePathStrategy;

    beforeEach(() => {
      fileService = new FileService();
      strategy = new DirectoryFile();
    });

    test('Should return false if file is Invalid ', async () => {
      FilePathContext.prototype.getFilePath = jest.fn().mockImplementationOnce(() => 'nomatterpath');

      const { isValid } = await fileService.getFileContent(strategy);

      expect(isValid).toBeFalsy();
    });

    test('Should return true if file is completely valid', async () => {
      const mockImplementation = jest.fn().mockImplementationOnce(() => getDefaultFileUrl());

      FilePathContext.prototype.getFilePath = mockImplementation;

      const { isValid } = await fileService.getFileContent(strategy);

      expect(isValid).toBeTruthy();
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });
  });
});
