function letter(str) {

    const map = new Map();
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (!map.has(str[i])) {
            result += str[i];
            map.set(str[i], i)
        }
    }
    // for (let i = 0; i < str.length; i++) {
    //     if (!result.includes(str[i])) {
    //         result += str[i];
    //     }
    // }
    console.log(result);

}


const result = letter('AAAABBBCCAAZZEF');