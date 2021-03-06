import readlineSync from 'readline-sync';
import greet from './cli.js';

const runGame = (gameDescription, generateRound, rounds = 3) => {
  const name = greet();
  console.log(gameDescription);

  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();
    const correctAnswer = answer.toString().toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
