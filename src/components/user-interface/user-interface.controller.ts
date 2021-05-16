import UserInterface from './user-interface.model';
import UserInterfaceMessage from './user-interface.messages';
import UserInterfaceService from './user-interface.service';
import { exitMain, readInputInterface } from './user-interface.utils';
import Colors from '../../utils/color';

class UserInterfaceController {
  constructor(
    private userInterfaceService: UserInterfaceService,
  ) {}

  async execute() {
    console.clear();
    UserInterface.displayHeader();
    UserInterface.displayFileOptions();

    const selectedFileOption : string = await UserInterface.makeQuestion(
      readInputInterface,
      UserInterfaceMessage.SELECT_OPTION,
    );

    const strategy = this.userInterfaceService.getStrategy(selectedFileOption);

    if (!strategy) {
      return exitMain(Colors.RED, UserInterfaceMessage.INVALID_OPTION, readInputInterface);
    }

    const { isValid, content } = await this.userInterfaceService.getContent(strategy);

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
