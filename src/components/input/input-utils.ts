import readLine from 'readline';

export const readInputInterface : readLine.Interface = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const makeQuestion = (readInput: readLine.Interface, question: string) : Promise<string> => (
  new Promise((resolve) => {
    readInput.question(question, (userInput: string) => {
      resolve(userInput);
    });
  })
);
