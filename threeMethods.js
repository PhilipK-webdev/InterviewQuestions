// write a function that gets as an input 7 or 4 and in case it gets 4 return 7 and in case it gets 7 return 4. solve in 3 different methods

function testOne(num) {

    if (num === 7) { return 4 };
    return 7;
}

function testTwo(num) {

    if (Number(num.toString()) === 7) { return 4 };
    return 7;
}

function testThree(num) {

    if (num % 7 === 0) { return 4 };
    return 7;
}
// console.log(testOne(7))
// console.log(testTwo(4))
// console.log(testThree(7));
