import Employee from './employee';
import { WorkedDays } from './types/workedDays';

enum Delimiter {
  EQUAL = '=',
  COMMA = ',',
  DASH = '-',
}

export const getHourNumber = (hour: string) : number => Number(hour.split(':')[0]);

export const getEmployeeWorkedDays = (workedDaysData: string) : WorkedDays[] => {
  const employeeWorkedDaysData : string[] = workedDaysData.split(Delimiter.COMMA);
  const workedDays : WorkedDays[] = [];

  employeeWorkedDaysData.forEach((workeyDayData) => {
    const currentDay: string = workeyDayData.substr(0, 2);
    const pairHours: string = workeyDayData.substr(2);
    const [entryHour, departureHour] = pairHours.split(Delimiter.DASH);

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

export const getEmployee = (employeeInformation: string) : Employee => {
  const [employeeName, workedDays] = employeeInformation.split(Delimiter.EQUAL);
  const employeeWorkedDays : WorkedDays[] = getEmployeeWorkedDays(workedDays);
  const employee = new Employee(employeeName, employeeWorkedDays);
  return employee;
};

export const getEmployees = (fileContent: string[]) : Employee[] => {
  const employees: Employee [] = [];

  fileContent.forEach((currentLine) => {
    const currentEmployee = getEmployee(currentLine);
    employees.push(currentEmployee);
  });

  return employees;
};
