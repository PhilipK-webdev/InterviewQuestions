const EUREKAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135, 175, 518, 598, 1306, 1676, 2427, 2646798];

const sumDigPow = (a, b) => {

    const result = EUREKAS.filter((n) => a <= n && n <= b);
    console.log(result);
}
sumDigPow(89, 100);