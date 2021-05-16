import Employee from './employee.model';
import { WorkedDays } from './types/workedDays';
import { getWorkedDays } from './employee.utils';
import Delimiters from './enums/delimiters.enum';

class EmployeeService {
  getEmployeeDaysWorked(daysWorkedData: string) {
    const daysWorkedInformation : string[] = daysWorkedData.split(Delimiters.WORKED_DAYS);
    const employeeWorkedDays = getWorkedDays(daysWorkedInformation);
    return employeeWorkedDays;
  }

  private getEmployee(employeeInformation: string) : Employee {
    const [employeeName, workedDays] = employeeInformation.split(Delimiters.EMPLOYEE_HOURS);
    const employeeDaysWorked : WorkedDays[] = this.getEmployeeDaysWorked(workedDays);
    const employee = new Employee(employeeName, employeeDaysWorked);
    return employee;
  }

  getEmployees(fileContent: string[]) : Employee[] {
    const employees: Employee [] = [];
    fileContent.forEach((currentLine) => {
      const currentEmployee = this.getEmployee(currentLine);
      employees.push(currentEmployee);
    });
    return employees;
  }
}

export default EmployeeService;
