import { makeQuestion, readInputInterface } from './src/components/input/input-utils';
import UserInterface from './src/components/user-interface/user-interface';
import Colors from './src/utils/color';
import FilePathContext from './src/common/file-path/file-path.context';
import { getStrategyByOption } from './src/common/file-path/file-path.utils';
import UserInterfaceMessage from './src/components/user-interface/user-interface.messages';
import { exitMain } from './src/components/user-interface/user-interface.utils';

const main = async () => {
  console.clear();

  UserInterface.displayHeader();

  UserInterface.displayFileOptions();

  const selectedFileOption : string = await makeQuestion(
    readInputInterface,
    UserInterfaceMessage.SELECT_OPTION,
  );

  if (selectedFileOption === '0') {
    return exitMain(Colors.BLUE, UserInterfaceMessage.GOOD_BYE, readInputInterface);
  }

  const selectedStrategy = getStrategyByOption(selectedFileOption);

  if (!selectedStrategy) {
    return exitMain(Colors.RED, UserInterfaceMessage.INVALID_OPTION, readInputInterface);
  }

  const context = new FilePathContext(selectedStrategy);
  const fileUrl = await context.getFilePath();
  console.log(fileUrl);
  return undefined;
};

main();
