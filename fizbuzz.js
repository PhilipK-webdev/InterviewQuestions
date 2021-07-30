function fizBuzz(num) {
    let arrData = [];

    for (let i = 1; i <= num; i++) {
        // My Solution
        if (i % 3 === 0 && i % 5 === 0) {
            arrData.push("FizzBuzz");
        } else if (i % 3 === 0) {
            arrData.push("Fizz");
        } else if (i % 5 === 0) {
            arrData.push("Buzz");
        } else {
            arrData.push(i.toString());
        }

        // Youtube Solution

        let output = "";
        if (i % 3 == 0) { output += "Fizz" };
        if (i % 5 == 0) { output += "Buzz" };
        if (i % 15 == 0) { output = "FizzBuzz" };
        if (output == "") { output = i };
        console.log(output);
    }


}

fizBuzz(15);




