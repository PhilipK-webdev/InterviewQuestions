function addBinary(a, b) {

    const sumDecimal = a + b;
    const sumBinary = Number(sumDecimal).toString(2);
    return sumBinary;
}

const result = addBinary(5, 9);
console.log(result);