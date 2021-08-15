function twoSum(numbers, target) {
    let flag = false;
    for (let i = 0, j = numbers.length - 1, k = 0; i < numbers.length; i++) {
        if (numbers[k] + numbers[j] === target) {
            flag = true;
            console.log(k, j)
            return ([k, j]);
        }
        if (numbers[k] + numbers[j] > target) {
            j--;
        }
        if (numbers[k] + numbers[j] < target) {
            k++;
        }
    }
    if (!flag) {
        return target;
    }

}

const result = twoSum([652, 61, 235, 271, 803, 275, 44, 699, 393, 169], 105);
console.log(result);
