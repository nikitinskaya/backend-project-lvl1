class Utils {
  static generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  static isEven(num) {
    return num % 2 === 0;
  }

  static getGcd(n1, n2) {
    if (!n2) {
      return n1;
    }
    return this.getGcd(n2, n1 % n2);
  }
}

export default Utils;
