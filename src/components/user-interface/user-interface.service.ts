import FileService from '../file/file.service';
import FilePathStrategy from '../../common/file-path/file-path.strategy';
import EmployeeService from '../employees/employee.service';
import { FileMessageType } from '../file/types/file-error';

class UserInterfaceService {
  private fileService: FileService;

  private employeeService: EmployeeService;

  constructor() {
    this.fileService = new FileService();
    this.employeeService = new EmployeeService();
  }

  getStrategy(selectedOption: string) : FileMessageType {
    return this.fileService.getFileStrategy(selectedOption);
  }

  async getContent(strategy: FilePathStrategy) : Promise<FileMessageType> {
    return this.fileService.getFileContent(strategy);
  }

  getEmployees(fileContent: string[]) {
    return this.employeeService.getEmployees(fileContent);
  }
}

export default UserInterfaceService;
