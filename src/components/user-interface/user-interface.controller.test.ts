import UserInterface from './user-interface.model';
import UserInterfaceController from './user-interface.controller';
import UserInterfaceMessage from './user-interface.messages';
import UserInterfaceService from './user-interface.service';

describe('UserInterfaceController', () => {
  let userInterfaceController : UserInterfaceController;

  beforeEach(() => {
    userInterfaceController = new UserInterfaceController();
  });

  const consoleMock = jest.spyOn(console, 'log');

  test('Should return a list of employees if all conditions are valid', async () => {
    const defaultFileOption = '3';
    jest.spyOn(UserInterface, 'makeQuestion').mockImplementation(async () => defaultFileOption);

    const employees = await userInterfaceController.execute();

    expect(employees).toHaveLength(6);
  });

  test('Should return undefined if select option is not allowed', async () => {
    const defaultFileOption = 'nomatter';
    jest.spyOn(UserInterface, 'makeQuestion').mockImplementation(async () => defaultFileOption);

    const selectedStrategy = await userInterfaceController.execute();

    expect(selectedStrategy).toBeUndefined();
    expect(consoleMock).toHaveBeenCalledWith(UserInterfaceMessage.INVALID_OPTION);
  });

  test('Should return undefined if select option is exit', async () => {
    const defaultFileOption = '0';
    jest.spyOn(UserInterface, 'makeQuestion').mockImplementation(async () => defaultFileOption);

    const selectedStrategy = await userInterfaceController.execute();

    expect(selectedStrategy).toBeUndefined();
    expect(consoleMock).toHaveBeenCalledWith(UserInterfaceMessage.GOOD_BYE);
  });

  test('Should return undefined if File is corrupted ', async () => {
    const defaultFileOption = '2';
    jest.spyOn(UserInterface, 'makeQuestion').mockImplementation(async () => defaultFileOption);

    UserInterfaceService.prototype.getContent = jest.fn().mockImplementationOnce(async () => {
      const content = UserInterfaceMessage.INVALID_OPTION;

      return {
        isValid: false,
        content,
      };
    });

    const fileContent = await userInterfaceController.execute();

    expect(fileContent).toBeUndefined();
    expect(consoleMock).toHaveBeenCalledWith(UserInterfaceMessage.INVALID_OPTION);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});
