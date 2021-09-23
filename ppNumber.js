var isPP = function (n) {
    // return null; // fix me

    let countSquare = 0;
    let sqrt = 0;
    let numToCheck = 0;
    if (n % Math.sqrt(n) === 0) {
        sqrt = Math.sqrt(n);
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            countSquare++;
            numToCheck = n / i;
        }
    }
    console.log(numToCheck)
    if (n <= 10) {
        if (sqrt === 0 && countSquare === 0) {
            return null;
        } else {
            return [numToCheck, countSquare += 1];
        }
    } else if (n > 10) {
        if (numToCheck !== 0 && sqrt !== 0) {
            return [numToCheck, countSquare += 1];
        } else if (sqrt === 0 && countSquare === 0) {
            return null;
        }

    }
}

const result = isPP(8);
console.log(result);