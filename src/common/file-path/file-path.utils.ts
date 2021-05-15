import FilePathStrategy from './file-path.strategy';
import FileDirectory from '../strategies/file-path/file-directory';
import FileProject from '../strategies/file-path/file-project';
import DefaultFile from '../strategies/file-path/default-file';

export const getStrategyByOption = (selectedOption : string) : FilePathStrategy | undefined => {
  const userOption = parseInt(selectedOption, 10);

  const defaultStrategies = [
    {
      option: 1,
      strategy: new FileDirectory(),
    },
    {
      option: 2,
      strategy: new FileProject(),
    },
    {
      option: 3,
      strategy: new DefaultFile(),
    },
  ];

  const selectedStrategyOption = defaultStrategies.find(({ option }) => option === userOption);

  return selectedStrategyOption?.strategy;
};
