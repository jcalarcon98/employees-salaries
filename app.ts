import { isFileValid, getFileContent } from './src/components/file/file-utils';
import { makeQuestion } from './src/components/input/input-utils';
import UserInterface from './src/components/user-interface/user-interface';
import Colors from './src/utils/color';

const main = async () => {
  console.clear();

  UserInterface.displayHeader();

  const filePath: string = await makeQuestion(
    'Please, provide the file URL or press enter if you want to use a default one: ',
  );

  const { isValid, message } = isFileValid(filePath);
  const fontColor = isValid ? Colors.GREEN : Colors.RED;
  console.log(fontColor, message);

  // TODO: Refactor this code
  if (!isValid) {
    return undefined;
  }

  const fileContent = getFileContent(filePath);
  console.log(fileContent);

  return undefined;
};

main();
