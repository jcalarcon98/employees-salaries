import UserInterfaceController from './src/components/user-interface/user-interface.controller';
import UserInterfaceService from './src/components/user-interface/user-interface.service';
import FileService from './src/components/file/file.service';
import EmployeeService from './src/components/employees/employee.service';

export const main = () => {
  const fileService = new FileService();
  const employeeService = new EmployeeService();
  const userInterfaceService = new UserInterfaceService(fileService, employeeService);
  const userInterfaceController = new UserInterfaceController(userInterfaceService);

  userInterfaceController.execute();
};

main();
