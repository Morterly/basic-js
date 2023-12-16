// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    } 
    key = key.toLowerCase();
    message = message.toLowerCase();

    let result = '';
    let j = 0;
    for (let i = 0; i < message.length; i += 1) {
      if (j > key.length - 1) {
        j = 0;
      }
      let pos = message.charCodeAt(i);
      let posAlph = this.alphabet.indexOf(key[j]);
      if (pos >= 97 && pos <= 122) {
        let shift = pos + posAlph > 122 ? pos + posAlph - 26 : pos + posAlph;
        result += String.fromCharCode(shift);
        j += 1;
      } else {
        result += message[i];
      }
    }
    return this.direction ? result.toUpperCase() : result.toUpperCase().split('').reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    } 
    key = key.toLowerCase();
    message = message.toLowerCase();

    let result = '';
    let j = 0;
    for (let i = 0; i < message.length; i += 1) {
      if (j > key.length - 1) {
        j = 0;
      }
      let pos = message.charCodeAt(i);
      let posAlph = this.alphabet.indexOf(key[j]);
      if (pos >= 97 && pos <= 122) {
        let shift = pos - posAlph < 97 ? pos - posAlph + 26 : pos - posAlph;
        result += String.fromCharCode(shift);
        j += 1;
      } else {
        result += message[i];
      }
    }
    return this.direction ? result.toUpperCase() : result.toUpperCase().split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
