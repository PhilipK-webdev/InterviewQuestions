function rot13(message) {
    //your code here
    const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13]);
}


const result = rot13("TEST");
console.log(result)
