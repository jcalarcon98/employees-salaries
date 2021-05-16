import WorkSchedule from '../../../common/schedule/work-schedule.model';

export type EmployeeWorkedInformation = {
  schedule: WorkSchedule,
  weekPeriod: string,
  entryTime: number,
  departureTime: number,
};
