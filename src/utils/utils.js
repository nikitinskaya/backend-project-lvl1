class Utils {
  static generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  static isEven(num) {
    return num % 2 === 0;
  }
}

export default Utils;
