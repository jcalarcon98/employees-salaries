import FilePathStrategy from './file-path.strategy';
import DirectoryFile from '../strategies/file-path/file-directory';
import ProjectFile from '../strategies/file-path/file-project';
import DefaultFile from '../strategies/file-path/default-file';

export const getStrategyByOption = (selectedOption : string) : FilePathStrategy | undefined => {
  const userOption = parseInt(selectedOption, 10);

  const defaultStrategies = [
    {
      option: 1,
      strategy: new DirectoryFile(),
    },
    {
      option: 2,
      strategy: new ProjectFile(),
    },
    {
      option: 3,
      strategy: new DefaultFile(),
    },
  ];

  const selectedStrategyOption = defaultStrategies.find(({ option }) => option === userOption);

  return selectedStrategyOption?.strategy;
};
