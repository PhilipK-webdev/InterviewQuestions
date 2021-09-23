function minValue(values) {
    const minArray = values.filter((elem, index, self) => {
        return index === self.indexOf(elem);
    });
    minArray.sort((a, b) => a - b);
    let minSumString = minArray.map(String);
    let str = "";
    for (let i = 0; i < minSumString.length; i++) {
        str += minSumString[i];
    }

    return parseInt(str);


}

const result = minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]);
console.log(result);