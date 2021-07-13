const str = '<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px"><g id="arrow" fill="#b2b2b2" transform="translate(-2, 0)"><rect width="calc(24 / 2)"height="calc(24/ 8)"x="calc(24 / 2 - 24 / 4 - 24 / 20)" y="calc(24 / 4 - 24 / 20)" rx="calc(24 / 20)" ry="calc(24 / 20)" transform="rotate(45, 12, 12)"/>        <rect width="calc(24 / 2)" height="calc(24/ 8)" x="calc(24 / 2 - 24 / 4 + 24 / 20)" y="calc(24 / 4 - 24 / 20)" rx="calc(24 / 20)" ry="calc(24 / 20)" transform="rotate(-45, 12, 12)"/> <rect width="calc(24 / 8)" height="calc(24/ 2)" x="calc(24 / 2 - 24 / 16 )" y="calc(24 / 3 - 24 / 8)" rx="calc(24 / 20)" ry="calc(24 / 20)"/> </g></svg>'
const arr = str.split('calc');
let arraySplit = [];

for (let i = 0; i < arr.length; i++) {
    arraySplit[i] = arr[i].split(",");
}
console.log(arraySplit[1]);