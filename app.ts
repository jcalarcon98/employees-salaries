import UserInterfaceController from './src/components/user-interface/user-interface.controller';

export const main = () => {
  const userInterfaceController = new UserInterfaceController();

  userInterfaceController.execute();
};

main();
