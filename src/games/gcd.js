import Utils from '../utils/utils.js';
import runGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = Utils.generateRandomNumber(0, 100);
  const num2 = Utils.generateRandomNumber(0, 100);
  const question = `${num1} ${num2}`;
  const answer = Utils.getGcd(num1, num2);
  return [question, answer];
};

const gcd = () => runGame(gameDescription, generateRound);

export default gcd;
