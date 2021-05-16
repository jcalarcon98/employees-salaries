import FileService from '../file/file.service';
import FilePathStrategy from '../../common/file-path/file-path.strategy';
import EmployeeService from '../employees/employee.service';
import { FileMessageType } from '../file/types/file-error';

class UserInterfaceService {
  constructor(
    private fileService: FileService,
    private employeeService: EmployeeService,
  ) {}

  getStrategy(selectedOption: string) : FilePathStrategy | undefined {
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
