class WorkSchedule {
  week: any;

  weekend: any;

  constructor() {
    this.week = {
      firstRange: 25,
      secondRange: 15,
      thirdRange: 20,
    };

    this.weekend = {
      firstRange: 30,
      secondRange: 20,
      thirdRange: 25,
    };
  }

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

  getRange(hour: number): string | undefined {
    const range = this.dailyRangeHours.find(
      ({ range: [initValue, endValue] }) => initValue < hour && hour <= endValue,
    );

    return range?.id;
  }

  getWeekPeriod(day: string): string {
    const weekDays = ['MO', 'TU', 'WE', 'TH', 'FR'];
    return weekDays.includes(day) ? 'week' : 'weekend';
  }
}

export default WorkSchedule;
