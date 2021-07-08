var maxSequence = function (arr) {
    let sum = 0;
    let countNegative = 0;
    let countPositive = 0;
    let max = 0;
    let sumArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            countNegative++;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            countPositive++;
            sum += arr[i];
        }
    }

    if (countNegative === arr.length || arr.length == 0) {
        return 0;
    }
    if (countPositive === arr.length) {
        return sum;
    }

    for (let i = 0; i < arr.length; i++) {
        max += arr[i];
        if (max < 0) {
            max = 0;
        }
        sumArr.push(max);
    }
    return Math.max(...sumArr);

}

const printResult = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(printResult);