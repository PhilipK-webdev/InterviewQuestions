function dashatize(num) {
    //get 'em
    let digit = [];
    let stringResult = "";
    let final = "";
    if (typeof num !== "number") { return NaN };
    if (Number.isNaN(num)) { return NaN };
    if (num === 0) { return 0 };
    if (num < 0) {
        num = num * -1;
    }
    const convert = num.toString();
    while (num > 1) {
        digit.push(Math.floor(num % 10));
        num = num / 10;
    }
    digit.reverse();
    for (let i = 0; i < convert.length; i++) {
        if (digit[i] % 2 !== 0) {
            stringResult += convert[i] + "-";
        } else if (digit[i] % 2 === 0) {
            stringResult += convert[i];
        } else {
            stringResult += + "-" + convert[i];
        }

    }

    if (stringResult[0] === '-') {
        stringResult = stringResult.slice(0, -1) + "";
    }
    if (stringResult[stringResult.length - 1] === '-') {
        stringResult = stringResult.slice(0, -1) + "";
    }

    return stringResult
}

const result = dashatize(274);
console.log(result);