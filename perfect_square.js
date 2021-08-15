function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let isPerfect = false;
    let newSq = 0;
    const number = Math.sqrt(sq);
    console.log(number)
    if (number % 1 != 0) {
        console.log("Not Perfect");
        isPerfect = false;
    } else {
        isPerfect = true;
        newSq = number + 1;
    }

    if (!isPerfect) {
        return -1;
    } else {

        return Math.pow(newSq, 2);
    }

}

const result = findNextSquare(100);
console.log(result);