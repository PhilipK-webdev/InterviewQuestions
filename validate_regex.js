function validatePIN(pin) {
    const hasNumber = /^\d+$/;
    if (pin.length < 4 || pin.length === 5 || pin.length > 6) {
        return false;
    }

    if (pin.length === 4 || pin.length === 6) {

        return hasNumber.test(pin) ? true : false;
    }
}

const result = validatePIN("!378");
console.log(result);
