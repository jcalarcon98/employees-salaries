import { WorkedDay } from './types/workedDays';
import { getDailyPay } from './employee.utils';

class Employee {
  name: string;

  private workedDays: WorkedDay[];

  constructor(name: string, workedDays: WorkedDay[]) {
    this.name = name;
    this.workedDays = workedDays;
  }

  get salary() {
    let salary = 0;
    this.workedDays.forEach((workedDay) => {
      const dayPayment = getDailyPay(workedDay);
      salary += dayPayment;
    });

    return salary;
  }
}

export default Employee;
