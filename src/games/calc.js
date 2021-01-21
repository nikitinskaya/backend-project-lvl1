import Utils from '../utils/utils.js';
import runGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const calculate = (n1, n2, operator) => {
  switch (operator) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      return null;
  }
};

const selectOperator = (operators) => {
  const index = Utils.generateRandomNumber(0, operators.length - 1);
  return operators[index];
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const num1 = Utils.generateRandomNumber(0, 100);
  const num2 = Utils.generateRandomNumber(0, 100);
  const operator = selectOperator(operators);
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator);
  return [question, answer];
};

const calc = () => runGame(gameDescription, generateRound);

export default calc;
