import UserInterface from './user-interface.model';
import UserInterfaceMessage from './user-interface.messages';
import UserInterfaceService from './user-interface.service';
import { exitMain, readInputInterface } from './user-interface.utils';
import Colors from '../../utils/color';

class UserInterfaceController {
  private userInterfaceService: UserInterfaceService;

  constructor() {
    this.userInterfaceService = new UserInterfaceService();
  }

  async execute() {
    console.clear();
    UserInterface.displayHeader();
    UserInterface.displayFileOptions();

    const selectedFileOption : string = await UserInterface.makeQuestion(
      readInputInterface,
      UserInterfaceMessage.SELECT_OPTION,
    );

    console.log(selectedFileOption);

    const {
      isValid: isValidStrategy,
      content: contentStrategy,
    } = this.userInterfaceService.getStrategy(selectedFileOption);

    if (!isValidStrategy) {
      const isGoodByeMessage = contentStrategy === UserInterfaceMessage.GOOD_BYE;
      const colorMessage = isGoodByeMessage ? Colors.BLUE : Colors.RED;
      return exitMain(colorMessage, contentStrategy, readInputInterface);
    }

    const { isValid, content } = await this.userInterfaceService.getContent(contentStrategy);

    if (!isValid) {
      return exitMain(Colors.RED, content as string, readInputInterface);
    }

    const employees = this.userInterfaceService.getEmployees(content as string[]);

    employees.forEach((currentEmployee) => {
      console.log(currentEmployee.salary, currentEmployee.name);
    });

    return undefined;
  }
}

export default UserInterfaceController;
