function solution(string) {

    const regex = /[A-Z]/g;
    const found = string.match(regex);
    if (found === null) {
        return string;
    } else {
        const result = string.replace(/([A-Z]+)/g, " $1");
        const finalResult = result.charAt(0) + result.slice(1);
        return finalResult;
    }


}

const result = solution("camelCasingTest");
console.log(result);