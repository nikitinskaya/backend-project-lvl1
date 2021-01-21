import Utils from '../utils/utils.js';
import runGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const printIsEven = (num) => Utils.isEven(num) ? 'yes' : 'no';

const generateRound = () => {
  const question = Utils.generateRandomNumber(0, 100);
  const answer = printIsEven(question);
  return [question, answer];
};

const even = () => runGame(gameDescription, generateRound);

export default even;
