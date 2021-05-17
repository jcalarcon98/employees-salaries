import EmployeeService from './employee.service';
import { fileContent, salaries } from '../../../data/test/employee/employees-information.json';
import Employee from './employee.model';

describe('EmployeeService', () => {
  const employeeService : EmployeeService = new EmployeeService();

  test('Should return all employees given a file', () => {
    const employees : Employee[] = employeeService.getEmployees(fileContent);

    employees.forEach((employee, index) => {
      expect(employee.salary).toBe(salaries[index]);
    });
    expect(employees[0].name).toBe('YADIRA');
  });
});
