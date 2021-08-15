function mxdiflg(a1, a2) {
    // your code
    let maxA1 = a1[0].length;
    let maxA2 = a2[0].length;

    for (let i = 1; i < a1.length; i++) {

        if (maxA1 < a1[i].length) {
            maxA1 = a1[i].length;
        }

    }
    for (let i = 1; i < a2.length; i++) {

        if (maxA2 < a1[i].length) {
            maxA2 = a1[i].length;
        }

    }
    console.log(maxA1)
    console.log(maxA2)
}

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

const result = mxdiflg(a1, a2);