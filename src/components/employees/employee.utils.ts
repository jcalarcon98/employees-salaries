import { DaysWorked } from './types/workedDays';
import Delimiters from './enums/delimiters.enum';
import { EmployeeWorkedInformation } from './types/employee-worked-information';

export const getHourNumber = (hour: string) : number => Number(hour.split(':')[0]);

export const getDayPaymentAmount = (employeeWorkInformation : EmployeeWorkedInformation) => {
  const {
    schedule,
    weekPeriod,
    entryTime,
    departureTime,
  } = employeeWorkInformation;

  let dayAmmountPayment = 0;
  const limitHour = departureTime === 0 ? 24 : departureTime;

  for (let hour = entryTime + 1; hour <= limitHour; hour += 1) {
    const currentHour = hour;
    const rangeHour: any = schedule.getRange(currentHour);
    const value = (schedule as any)[weekPeriod][rangeHour];
    dayAmmountPayment += value;
  }

  return dayAmmountPayment;
};

export const getWorkedDays = (employeeDaysWorkedInfo : string[]) : DaysWorked[] => {
  const workedDays : DaysWorked[] = [];

  employeeDaysWorkedInfo.forEach((dayWorkedInfo) => {
    const currentDay: string = dayWorkedInfo.substr(0, 2);
    const pairHours: string = dayWorkedInfo.substr(2);
    const [entryHour, departureHour] = pairHours.split(Delimiters.HOURS);

    const employeeWorkedDay : DaysWorked = {
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
