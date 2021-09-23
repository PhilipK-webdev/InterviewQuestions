function solution(str, ending) {

    const string = str.split("");
    const stringEnd = ending.split("");
    let count = 0;
    for (let i = 0; i < string.length; i++) {

        if (string[string.length - 1 - i] === stringEnd[stringEnd.length - 1 - i]) {
            count++;
        }
    }
    if (count === stringEnd.length) {
        return true;
    } else {
        return false;
    }
}

const result = solution("abcde", "cbe");
console.log(result);