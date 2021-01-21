import readlineSync from 'readline-sync';
import Utils from '../utils/utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const rounds = 3;

const isEven = (num) => num % 2 === 0;

const printIsEven = (num) => isEven(num) ? 'yes' : 'no';

const generateRound = () => {
  const question = Utils.generateRandomNumber(0, 100);
  const answer = printIsEven(question);
  return [question, answer];
};

const even = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(gameDescription);
  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default even;
