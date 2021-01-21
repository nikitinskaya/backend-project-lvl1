class Utils {
  static generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

export default Utils;
