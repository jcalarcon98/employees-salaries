import readLine from 'readline';

const readInput = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const makeQuestion = (question: string) : Promise<string> => (
  new Promise((resolve) => {
    readInput.question(question, (userInput: string) => {
      resolve(userInput);
      readInput.close();
    });
  })
);

export default readInput;
