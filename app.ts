import { makeQuestion, readInputInterface } from './src/components/input/input-utils';
import UserInterface from './src/components/user-interface/user-interface';
import Colors from './src/utils/color';
import FilePathContext from './src/common/file-path/file-path.context';
import { getStrategyByOption } from './src/common/file-path/file-path.utils';
import UserInterfaceMessage from './src/components/user-interface/user-interface.messages';
import { exitMain } from './src/components/user-interface/user-interface.utils';
import { isFileValid, getFileContent, hasFileContent } from './src/components/file/file-utils';
import { getEmployees } from './src/components/employees/employee.service';
import Employee from './src/components/employees/employee';

const main = async () => {
  console.clear();

  UserInterface.displayHeader();

  UserInterface.displayFileOptions();

  const selectedFileOption : string = await makeQuestion(
    readInputInterface,
    UserInterfaceMessage.SELECT_OPTION,
  );

  if (selectedFileOption === '0') {
    return exitMain(Colors.BLUE, UserInterfaceMessage.GOOD_BYE, readInputInterface);
  }

  const selectedStrategy = getStrategyByOption(selectedFileOption);

  if (!selectedStrategy) {
    return exitMain(Colors.RED, UserInterfaceMessage.INVALID_OPTION, readInputInterface);
  }

  const context : FilePathContext = new FilePathContext(selectedStrategy);
  const filePath : string = await context.getFilePath();

  const { isValid, message } = isFileValid(filePath);

  if (!isValid) {
    return exitMain(Colors.RED, message, readInputInterface);
  }

  const fileContent : string[] = getFileContent(filePath);

  if (!hasFileContent(fileContent)) {
    return exitMain(Colors.RED, UserInterfaceMessage.EMPTY_FILE, readInputInterface);
  }

  const employees : Employee[] = getEmployees(fileContent);

  employees.forEach((currentEmployee) => console.log(currentEmployee.getSalary(), currentEmployee.name));

  return undefined;
};

main();
