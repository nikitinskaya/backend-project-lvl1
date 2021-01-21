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

  static isPrime(num) {
    if (num <= 1) return false;
    if (num % 2 === 0 && num > 2) return false;

    const s = Math.sqrt(num);
    for (let i = 3; i <= s; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  }
}

export default Utils;
