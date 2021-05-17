import { WorkedDay } from './types/workedDays';
import Delimiters from './enums/delimiters.enum';
import WorkSchedule from '../../common/schedule/work-schedule.model';

export const getHourNumber = (hour: string) : number => Number(hour.split(':')[0]);

export const getDailyPay = (workedDay: WorkedDay) : number => {
  const schedule = new WorkSchedule();
  const { day, hours } = workedDay;
  const weekPeriod: string = schedule.getWeekPeriod(day);
  const { entryTime, departureTime } = hours;
  const limitHour = departureTime === 0 ? 24 : departureTime;
  let amountPay = 0;

  for (let hour = entryTime + 1; hour <= limitHour; hour += 1) {
    const rangeHour: any = schedule.getRange(hour);
    const value = (schedule as any)[weekPeriod][rangeHour];
    amountPay += value;
  }

  return amountPay;
};

export const getWorkedDays = (employeeDaysWorkedInfo : string[]) : WorkedDay[] => {
  const workedDays : WorkedDay[] = [];

  employeeDaysWorkedInfo.forEach((dayWorkedInfo) => {
    const currentDay: string = dayWorkedInfo.substr(0, 2);
    const pairHours: string = dayWorkedInfo.substr(2);
    const [entryHour, departureHour] = pairHours.split(Delimiters.HOURS);

    const employeeWorkedDay : WorkedDay = {
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
