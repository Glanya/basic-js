const { NotImplementedError } = require('../extensions/index.js');

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
	constructor(isDirect = true) {
		this.isDirect = isDirect;
	}

	encrypt(mes, key) { 
		if (mes === undefined || key === undefined) throw new Error ("Incorrect arguments!");

		mes = mes.toUpperCase();
		key = key.toUpperCase();

        let res = '';
        let spaces = 0;
        let x = 0;
        for (let i = 0; i <= mes.length - 1; i++) {
          if (mes.charCodeAt(i) > 90 || mes.charCodeAt(i) < 65) {
            res += mes[i];
            continue;
          }
          spaces = 65 + (mes.charCodeAt(i) + key.charCodeAt(x)) % 26;
          x == key.length - 1 ? x = 0 : x++;
          res += String.fromCharCode(spaces);
        }

        if (this.isDirect == false) {
           res = res.split('').reverse().join(''); 
        } 
        return res;
	}

    decrypt(mes, key) {
		if (mes === undefined || key === undefined) throw new Error ("Incorrect arguments!");

		mes = mes.toUpperCase();
		key = key.toUpperCase();

        let res = '';
        let spaces = 0;
        let x = 0;
        for (let i = 0; i <= mes.length - 1; i++) {
          if (mes.charCodeAt(i) > 90 || mes.charCodeAt(i) < 65) {
            res += mes[i];
            continue;
          }
          spaces = 65 + (mes.charCodeAt(i) + 26 - key.charCodeAt(x)) % 26;
          x == key.length - 1 ? x = 0 : x++;
          res += String.fromCharCode(spaces);
        }
        if (this.isDirect == false) {
           res = res.split('').reverse().join(''); 
        } 
        return res;
    }
}


module.exports = {
  VigenereCipheringMachine
};
