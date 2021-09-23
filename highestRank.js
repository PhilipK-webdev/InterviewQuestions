function highestRank(arr) {
    //Your Code logic should written here
    let obj = {};
    let arrObj = [];
    let countHighestRank = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            countHighestRank++;
        } else {
            arrObj.push(obj = {
                number: arr[i],
                count: countHighestRank
            });
            countHighestRank = 0;
        }

    }

    const arrResultCount = arrObj.reduce(function (prev, current) {
        return (prev.count > current.count) ? prev : current
    })

    return arrResultCount.number;
}

const result = highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]);
console.log(result);