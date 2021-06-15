function solution(S, C) {

    const splitted = S.split("\n");

    // create data from ids
    const data = {};
    const ids = splitted[0].split(",");
    ids.forEach(col => data[col] = []);

    // create the rest of the table
    const rows = [];

    for (let i = 1; i < splitted.length; i++) {
        rows.push(splitted[i].split(","))
    }


    const allDataKeys = Object.keys(data);
    const key = allDataKeys[0];

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].length; j++) {
            const key = allDataKeys[j];
            data[key].push(rows[i][j])
        }
    }

    const valueArray = data[C];
    const numArray = valueArray.map(num => +num);
    return Math.max(...numArray);
}

const sol = solution("id,name,age,act.,room,dep.\n1,Jack,68,T,13,8\n17,Betty,28,F,15,7", "age");