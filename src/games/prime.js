import Utils from '../utils/utils.js';
import runGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is prime, otherwise answer "no".';

const printIsPrime = (num) => {
  const isPrime = Utils.isPrime(num);
  return isPrime ? 'yes' : 'no';
};

const generateRound = () => {
  const question = Utils.generateRandomNumber(0, 100);
  const answer = printIsPrime(question);
  return [question, answer];
};

const even = () => runGame(gameDescription, generateRound);

export default even;
