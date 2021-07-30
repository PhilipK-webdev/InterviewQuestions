function GCF(arr) {

    let numArr1 = [];
    let numArr2 = [];
    let num1 = 0;
    let num2 = 0;
    for (let i = 0; i <= arr[0]; i++) {
        if (arr[0] % i === 0) {
            if (num1 < i) {
                num1 = i;
                numArr1.push(i)
            }
        }
    }
    for (let i = 0; i < arr[1]; i++) {
        if (arr[1] % i === 0) {
            if (num2 < i) {
                num2 = i;
                numArr2.push(i);
            }
        }
    }
    const element = numArr1.filter(num => numArr2.includes(num));
    return Math.max(...element);
}

// keep this function call here 
console.log(GCF([12, 30]));