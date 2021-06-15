
function solution(A, D) {
    // I assume that the order in D is in monthly order 
    const FEE = 5;

    // calculate the total sum with reduce function
    const res = A.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


    let feeDiscount = 12;

    // need to verify for which months we need to get a discount
    for (let i = 0; i < D.length; i++) {
        // only when A[i] is negative
        if (A[i] < 0) {
            const date = getMonths(D[i]);
            let j = i;
            let sum = 0;
            let sameMonthTransactions = 0;

            // while the months are the same as D[i] for the rest of the array.
            // to check if the sum is more than 100 and there are at least 3 transactions
            while (getMonths(D[j]) === date && j < D.length) {
                sum += A[j];
                j++;
                if (A[j] < 0) {
                    sameMonthTransactions++;
                }
            }

            if (Math.abs(sum) >= 100 && sameMonthTransactions >= 3) {
                feeDiscount--;
            }
        }
    }

    function getMonths(str) {
        return new Date(str).getMonth() + 1;
    }

    // return bank account balance
    return (res - (FEE * feeDiscount));
}





const sol = solution([180, -50, -25, -25], ['2020-01-01', '2020-01-01', '2020-01-01', '2020-01-31'])
console.log('object :>> ', sol);

// console.log('res :>> ', res);