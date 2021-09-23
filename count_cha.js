function count(string) {
    if (string == null) {
        return {};
    }
    string = string.split("");
    let objChar = {};
    string.forEach(char => {
        let count = 0;
        for (let i = 0; i < string.length; i++) {
            if (char == string[i]) {
                count += 1;
            }
            objChar[char] = count;

        }


    });

    return objChar;
}

const result = count("aabaca");
console.log(result);
