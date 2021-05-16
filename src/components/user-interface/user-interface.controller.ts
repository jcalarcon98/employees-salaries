import UserInterface from './user-interface.model';
import { makeQuestion, readInputInterface } from '../input/input-utils';
import UserInterfaceMessage from './user-interface.messages';
import UserInterfaceService from './user-interface.service';
import { exitMain } from './user-interface.utils';
import Colors from '../../utils/color';

class UserInterfaceController {
  constructor(
    private userInterfaceService: UserInterfaceService,
  ) {}

  async execute() {
    console.clear();
    UserInterface.displayHeader();
    UserInterface.displayFileOptions();

    const selectedFileOption : string = await makeQuestion(
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
      console.log(currentEmployee.getSalary(), currentEmployee.name);
    });

    return undefined;
  }
}

export default UserInterfaceController;
