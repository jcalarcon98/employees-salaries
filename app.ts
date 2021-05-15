import { makeQuestion, readInputInterface } from './src/components/input/input-utils';
import UserInterface from './src/components/user-interface/user-interface';
import ReadContext from './src/common/strategies/read-context';
import Colors from './src/utils/color';
import { getStrategy } from './src/utils/file-strategy-utils';

const main = async () => {
  console.clear();

  UserInterface.displayHeader();

  UserInterface.displayFileOptions();

  const selectedFileOption : string = await makeQuestion(readInputInterface, 'Please, Enter your option: ');

  if (selectedFileOption === '0') {
    readInputInterface.close();
    return undefined;
  }

  const selectedStrategy = getStrategy(selectedFileOption);

  if (!selectedStrategy) {
    console.log(Colors.RED, 'Please provide a valid option');
    return undefined;
  }

  const context = new ReadContext(selectedStrategy.strategy);
  const fileUrl = await context.getFileUrl();
  console.log(fileUrl);
  return undefined;
};

main();
