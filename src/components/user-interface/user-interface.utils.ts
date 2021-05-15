import readLine from 'readline';
import UserInterface from './user-interface';

export const exitMain = (
  color: string,
  message: string,
  readInputInterface: readLine.Interface,
) : undefined => {
  UserInterface.changeFontColor(color);
  console.log(message);
  readInputInterface.close();
  return undefined;
};
