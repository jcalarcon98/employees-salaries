import { getDailyPay, getHourNumber, getWorkedDays } from './employee.utils';
import dailyPaymentData from '../../../data/test/employee/daily-payment-data.json';
import hoursData from '../../../data/test/employee/hour-number-data.json';
import { WorkedDay } from './types/workedDays';

describe('EmployeeUtils', () => {
  test('Should return hour number', () => {
    hoursData.forEach(({ hour, value }) => {
      const hourNumber: number = getHourNumber(hour);
      expect(hourNumber).toBe(value);
    });
  });

  test('Should return employee daily payment amount', () => {
    dailyPaymentData.forEach(({ workedDay, payment }) => {
      const dailyPaymentAmount: number = getDailyPay(workedDay);
      expect(dailyPaymentAmount).toBe(payment);
    });
  });

  test('Should return employee worked days', () => {
    const workedDaysInfo : string[] = [
      'MO10:00-12:00',
      'TU10:00-12:00',
      'TH01:00-03:00',
      'SA14:00-18:00',
      'U20:00-21:00',
    ];

    const firstDay: WorkedDay = {
      day: 'MO',
      hours: {
        entryTime: 10,
        departureTime: 12,
      },
    };

    const workedDays = getWorkedDays(workedDaysInfo);

    expect(workedDays).toHaveLength(5);
    expect(workedDays[0]).toStrictEqual(firstDay);
  });
});
