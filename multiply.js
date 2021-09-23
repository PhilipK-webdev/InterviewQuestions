function multiply(a, b) {

    const bigNumOne = BigInt(parseFloat(a, 10));
    const bigNumTwo = BigInt(parseFloat(b, 10
    ));
    console.log(bigNumOne)
    console.log(bigNumTwo)

    const result = bigNumOne * bigNumTwo;
    return result.toString();

}

console.log(multiply("1020303004875647366210", "2774537626200857473632627613"));