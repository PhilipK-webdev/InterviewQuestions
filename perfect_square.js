function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise

    let newSq = 0;
    const number = Math.sqrt(sq);
    if (number % 1 != 0) {
        return -1;
    } else {

        newSq = number + 1;
        return Math.pow(newSq, 2);
    }

}

const result = findNextSquare(82);
console.log(result);