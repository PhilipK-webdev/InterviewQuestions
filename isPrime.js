function isPrime(num) {
    let count = 0;

    if (num === 1 || num === 2 || num === 3) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    console.log("the number is even")
    for (let i = 0; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            count++;

        }
    }
    if (count === 1) {
        return true;
    } else {
        return false;
    }
}
const result = isPrime(5);
console.log(result);