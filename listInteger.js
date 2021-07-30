function filter_list(l) {
    // Return a new array with the strings filtered out

    if (l.length === 0) {
        return [];
    }
    let arrFinal = [];
    for (let i = 0; i < l.length; i++) {

        if (typeof l[i] === "number") {
            arrFinal.push(l[i]);
        }

    }
    return arrFinal;
}

filter_list([1, 2, 'aasf', '1', '123', 123]);