import FileService from '../file/file.service';
import FilePathStrategy from '../../common/file-path/file-path.strategy';
import EmployeeService from '../employees/employee.service';

class UserInterfaceService {
  constructor(
    private fileService: FileService,
    private employeeService: EmployeeService,
  ) {}

  getStrategy(selectedOption: string) : FilePathStrategy | undefined {
    return this.fileService.getFileStrategy(selectedOption);
  }

  async getContent(strategy: FilePathStrategy) : Promise<string[] | undefined> {
    return this.fileService.getFileContent(strategy);
  }

  getEmployees(fileContent: string[]) {
    return this.employeeService.getEmployees(fileContent);
  }
}

export default UserInterfaceService;
