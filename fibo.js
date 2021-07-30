function fibo(key) {

    let arr = [0, 1];
    for (let i = 2; i < key; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);

    }
    return arr;
}

const result = fibo(3);
console.log(result);