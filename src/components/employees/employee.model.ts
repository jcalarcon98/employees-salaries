import { DaysWorked } from './types/workedDays';
import { Hours } from './types/hours';
import WorkSchedule from '../../common/schedule/work-schedule.model';
import { EmployeeWorkedInformation } from './types/employee-worked-information';
import { getDayPaymentAmount } from './employee.utils';

class Employee {
  name: string;

  private daysWorked: DaysWorked[];

  constructor(name: string, workedDays: DaysWorked[]) {
    this.name = name;
    this.daysWorked = workedDays;
  }

  get salary() {
    let salary = 0;
    this.daysWorked.forEach(({ day, hours }) => {
      const dayPayment = this.getDailyPay(day, hours);
      salary += dayPayment;
    });

    return salary;
  }

  private getDailyPay(day: string, hours: Hours) {
    const workSchedule = new WorkSchedule();
    const weekPeriod: string = workSchedule.getWeekPeriod(day);

    const workInformation : EmployeeWorkedInformation = {
      schedule: workSchedule,
      weekPeriod,
      ...hours,
    };

    const amountPay = getDayPaymentAmount(workInformation);
    return amountPay;
  }
}

export default Employee;
