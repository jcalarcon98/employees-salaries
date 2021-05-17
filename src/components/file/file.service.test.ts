import FileService from './file.service';
import FileDirectory from '../../common/strategies/file-path/file-directory';
import UserInterfaceMessage from '../user-interface/user-interface.messages';
import FilePathContext from '../../common/file-path/file-path.context';
import { getDefaultFileUrl } from './file.utils';

describe('FileService', () => {
  let fileService: FileService;

  beforeEach(() => {
    fileService = new FileService();
  });

  describe('Cases inside getFileStrategy() function', () => {
    test('Should return false when selected option is 0', () => {
      const selectedOption : string = '0';

      const { isValid, content } = fileService.getFileStrategy(selectedOption);

      expect(isValid).toBeFalsy();
      expect(content).toBe(UserInterfaceMessage.GOOD_BYE);
    });

    test('Should return a strategy when selected option is valid and different than zero', () => {
      const selectedOption : string = '1';

      const { isValid, content } = fileService.getFileStrategy(selectedOption);

      expect(isValid).toBeTruthy();
      expect(content).toBeInstanceOf(FileDirectory);
    });

    test('Should return undefined when selected option is invalid', () => {
      const selectedOption : string = 'nooomatteer';

      const { isValid, content } = fileService.getFileStrategy(selectedOption);

      expect(isValid).toBeFalsy();
      expect(content).toBe(UserInterfaceMessage.INVALID_OPTION);
    });
  });

  describe('Cases inside getFileContent() function', () => {
    test('Should return false if file is Invalid ', async () => {
      const strategy = new FileDirectory();

      FilePathContext.prototype.getFilePath = jest.fn().mockImplementationOnce(() => 'nomatterpath');

      const { isValid } = await fileService.getFileContent(strategy);

      expect(isValid).toBeFalsy();
    });

    test('Should return true if file is completely valid', async () => {
      const strategy = new FileDirectory();

      const mockImplementation = jest.fn().mockImplementationOnce(() => getDefaultFileUrl());

      FilePathContext.prototype.getFilePath = mockImplementation;

      const { isValid } = await fileService.getFileContent(strategy);

      expect(isValid).toBeTruthy();
    });
  });
});
