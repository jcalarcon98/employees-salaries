import Employee from './employee';
import { WorkedDays } from './types/workedDays';
import { getHourNumber } from './employee.utils';

class EmployeeService {
  private delimiter = {
    EQUAL: '=',
    COMMA: ',',
    DASH: '-',
  };

  private getEmployeeWorkedDays = (workedDaysData: string) : WorkedDays[] => {
    const employeeWorkedDaysData : string[] = workedDaysData.split(this.delimiter.COMMA);
    const workedDays : WorkedDays[] = [];

    employeeWorkedDaysData.forEach((workeyDayData) => {
      const currentDay: string = workeyDayData.substr(0, 2);
      const pairHours: string = workeyDayData.substr(2);
      const [entryHour, departureHour] = pairHours.split(this.delimiter.DASH);

      const employeeWorkedDay : WorkedDays = {
        day: currentDay,
        hours: {
          entryTime: getHourNumber(entryHour),
          departureTime: getHourNumber(departureHour),
        },
      };
      workedDays.push(employeeWorkedDay);
    });
    return workedDays;
  };

  private getEmployee = (employeeInformation: string) : Employee => {
    const [employeeName, workedDays] = employeeInformation.split(this.delimiter.EQUAL);
    const employeeWorkedDays : WorkedDays[] = this.getEmployeeWorkedDays(workedDays);
    const employee = new Employee(employeeName, employeeWorkedDays);
    return employee;
  };

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
