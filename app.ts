import UserInterfaceController from './src/components/user-interface/user-interface.controller';
import { showEmployees } from './src/components/user-interface/user-interface.utils';

export const main = async () => {
  const userInterfaceController = new UserInterfaceController();

  const employees = await userInterfaceController.execute();

  if (employees) {
    showEmployees(employees);
  }

  return undefined;
};

main();
