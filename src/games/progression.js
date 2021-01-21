import Utils from '../utils/utils.js';
import runGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (size, step) => {
  const first = Utils.generateRandomNumber(1, 10);
  const result = [first];
  for (let i = 1; i < size; i += 1) {
    result[i] = result[i - 1] + step;
  }
  return result;
};

const generateRound = () => {
  const size = Utils.generateRandomNumber(5, 10);
  const step = Utils.generateRandomNumber(1, 10);
  const progression = getProgression(size, step);
  const missingIdx = Utils.generateRandomNumber(0, size - 1);
  const answer = progression[missingIdx];
  progression[missingIdx] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const gcd = () => runGame(gameDescription, generateRound);

export default gcd;
