import ReadFromDirectory from '../common/read-data/read-directory';
import ReadFromProject from '../common/read-data/read-project-folder';
import ReadDefaultFile from '../common/read-data/read-default';

export const getStrategy = (strategyId: string) : any => {
  const strategieIdentifier = parseInt(strategyId, 10);

  const defaultStrategies = [
    {
      id: 1,
      strategy: new ReadFromDirectory(),
    },
    {
      id: 2,
      strategy: new ReadFromProject(),
    },
    {
      id: 3,
      strategy: new ReadDefaultFile(),
    },
  ];

  const selectedStrategy = defaultStrategies.find(({ id }) => id === strategieIdentifier);

  return selectedStrategy;
};
