import { WorkedDays } from './types/workedDays';
import { getDailyPay } from './employee.utils';

class Employee {
  name: string;

  private workedDays: WorkedDays[];

  constructor(name: string, workedDays: WorkedDays[]) {
    this.name = name;
    this.workedDays = workedDays;
  }

  get salary() {
    let salary = 0;
    this.workedDays.forEach(({ day, hours }) => {
      const dayPayment = getDailyPay(day, hours);
      salary += dayPayment;
    });

    return salary;
  }
}

export default Employee;
