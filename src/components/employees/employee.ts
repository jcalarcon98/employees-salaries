/* eslint-disable max-classes-per-file */
import { WorkedDays } from './types/workedDays';
import { Hours } from './types/hours';

class Employee {
  name: string;

  private workedDays: WorkedDays[];

  constructor(name: string, workedDays: WorkedDays[]) {
    this.name = name;
    this.workedDays = workedDays;
  }

  getSalary() {
    let salary = 0;

    this.workedDays.forEach(({ day, hours }) => {
      const dayPayment = calculateDayPayment(day, hours);
      salary += dayPayment;
    });

    return salary;
  }
}

export const getWeekPeriod = (day: string) : string => {
  const weekDays = ['MO', 'TU', 'WE', 'TH', 'FR'];
  return weekDays.includes(day) ? 'week' : 'weekend';
};

class WorkSchedule {
  constructor(private week: any, private weekend: any) { }

  dailyRangeHours = [
    {
      id: 'firstRange',
      range: [0, 9],
    },
    {
      id: 'secondRange',
      range: [9, 18],
    },
    {
      id: 'thirdRange',
      range: [18, 24],
    },
  ];

  getRange(hour: number) : string | undefined {
    const range = this.dailyRangeHours.find(
      ({ range: [initValue, endValue] }) => initValue < hour && hour <= endValue,
    );

    return range?.id;
  }
}

const workSchedule = new WorkSchedule(
  {
    firstRange: 25,
    secondRange: 15,
    thirdRange: 20,
  },
  {
    firstRange: 30,
    secondRange: 20,
    thirdRange: 25,
  },
);

export const calculateDayPayment = (day: string, hours: Hours) => {
  let dayAmmountPayment = 0;
  const { entryTime, departureTime } = hours;
  const limit = departureTime === 0 ? 24 : departureTime;

  const weekPeriod : string = getWeekPeriod(day);

  for (let init = entryTime + 1; init <= limit; init += 1) {
    const currentHour = init;
    const rangeHour : any = workSchedule.getRange(currentHour);
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const value = (<any>workSchedule)[weekPeriod][rangeHour];
    dayAmmountPayment += value;
  }

  return dayAmmountPayment;
};

export default Employee;
