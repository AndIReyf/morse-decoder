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

    const space = ' '
    const regex = /.{1,10}/g
    const code = expr.match(regex)
    const decodeWords = []

    for (let i = 0; i < code.length; i++) {
        code[i] = code[i]
            .replace(/10/g, ".")
            .replace(/11/g, "-")
            .replace(/\*{10}/g, space)
            .replace(/0/g, "")
        if (code[i] !== space) {
            code[i] = MORSE_TABLE[code[i]]
        }
        decodeWords.push(code[i])
    }
    return decodeWords.join('')
}

module.exports = {
    decode
}