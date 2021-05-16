import { WorkedDays } from './types/workedDays';
import Delimiters from './enums/delimiters.enum';
import { Hours } from './types/hours';
import WorkSchedule from '../../common/schedule/work-schedule.model';

export const getHourNumber = (hour: string) : number => Number(hour.split(':')[0]);

export const getDailyPay = (day: string, hours: Hours) => {
  const schedule = new WorkSchedule();
  const weekPeriod: string = schedule.getWeekPeriod(day);
  const { entryTime, departureTime } = hours;
  let amountPay = 0;
  const limitHour = departureTime === 0 ? 24 : departureTime;

  for (let hour = entryTime + 1; hour <= limitHour; hour += 1) {
    const currentHour = hour;
    const rangeHour: any = schedule.getRange(currentHour);
    const value = (schedule as any)[weekPeriod][rangeHour];
    amountPay += value;
  }

  return amountPay;
};

export const getWorkedDays = (employeeDaysWorkedInfo : string[]) : WorkedDays[] => {
  const workedDays : WorkedDays[] = [];

  employeeDaysWorkedInfo.forEach((dayWorkedInfo) => {
    const currentDay: string = dayWorkedInfo.substr(0, 2);
    const pairHours: string = dayWorkedInfo.substr(2);
    const [entryHour, departureHour] = pairHours.split(Delimiters.HOURS);

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
