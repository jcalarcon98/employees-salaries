import readLine from 'readline';
import UserInterface from './user-interface.model';
import Employee from '../employees/employee.model';
import Colors from '../../utils/color';

export const exitMain = (
  color: string,
  message: string,
  readInputInterface: readLine.Interface,
) : undefined => {
  UserInterface.changeFontColor(color);
  console.log(message);
  readInputInterface.close();
  return undefined;
};

export const readInputInterface : readLine.Interface = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const showEmployees = (employees: Employee[]) => {
  UserInterface.changeFontColor(Colors.BLUE);
  employees.forEach(({ name, salary }) => {
    console.log(`The amount to pay ${name} is: ${salary} USD`);
  });
};
