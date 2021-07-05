function reverseWords(str) {
    const reverseStr = str.split("").reverse().join("")
    console.log(reverseStr.split(" ").reverse().join(" "));
    const newStr = reverseStr.split(" ").reverse().join(" ");
    return newStr;

}

reverseWords("double  spaces");