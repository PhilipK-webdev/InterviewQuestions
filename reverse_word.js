function reverseWords(str) {
    const reverseStr = str.split("").reverse().join("")
    const newStr = reverseStr.split(" ").reverse().join(" ");
    return newStr;

}

const result = reverseWords("doublespaces");
console.log(result);