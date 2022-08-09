const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];
    let str = '';
    let result = '';
    for (let i = 0; i <= expr.length - 10; i += 10) {
        arr.push(expr.substring(i, i + 10));
    }
    let resultArr1 = [];
    for (let k = 0; k < arr.length; k++) {
        for (let j = 0; j <= arr[k].length - 1; j++) {
            if (arr[k][j] === '1') {
                resultArr1.push(arr[k].slice(j));
                break;
            }
            if (arr[k][j] === '*') {
                resultArr1.push(' ');
                break;
            }
        }
    }

    let resultArr2 = [];
    for (let z = 0; z < resultArr1.length; z++) {
        str = '';
        for (let x = 0; x < resultArr1[z].length; x += 2) {
            if (resultArr1[z].slice(x, x + 2) === '10') {
                str += '.';
            } else if (resultArr1[z].slice(x, x + 2) === '11') {
                str += '-';
            } else {
                str += ' ';
            }
        }
        resultArr2.push(str);
    }
    let index = 0;
    while (index < resultArr2.length) {
        if (resultArr2[index] !== ' ') {
            result += MORSE_TABLE[resultArr2[index]];
            index++;
        } else {
            result += ' ';
            index++;
        }
    }
    return result;
}

module.exports = {
    decode
}