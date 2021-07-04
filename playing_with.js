let arrNum = [];
function digPow(n, p) {
    const newNum = n;
    while (n > 0) {
        arrNum.push(n % 10);
        n = Math.trunc(n / 10);
    }
    let sum = 0;
    arrNum.reverse();
    for (let i = 0; i < arrNum.length; i++) {
        sum = sum + Math.pow(arrNum[i], i + p);
    }
    return (((sum / newNum) % 1) != 0) ? -1 : (sum / newNum);
}


const result = digPow(46288, 3);
console.log(result);