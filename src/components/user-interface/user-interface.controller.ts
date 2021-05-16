import UserInterface from './user-interface.model';
import { makeQuestion, readInputInterface } from '../input/input-utils';
import UserInterfaceMessage from './user-interface.messages';
import UserInterfaceService from './user-interface.service';
import FilePathStrategy from '../../common/file-path/file-path.strategy';
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

    // eslint-disable-next-line max-len
    const strategy : FilePathStrategy | undefined = this.userInterfaceService.getStrategy(selectedFileOption);

    if (!strategy) {
      return exitMain(Colors.RED, UserInterfaceMessage.INVALID_OPTION, readInputInterface);
    }

    const fileContent = await this.userInterfaceService.getContent(strategy);

    if (!fileContent) {
      return exitMain(Colors.RED, UserInterfaceMessage.EMPTY_FILE, readInputInterface);
    }

    const employees = this.userInterfaceService.getEmployees(fileContent);

    employees.forEach((currentEmployee) => {
      console.log(currentEmployee.getSalary(), currentEmployee.name);
    });

    return undefined;
  }
}

export default UserInterfaceController;
