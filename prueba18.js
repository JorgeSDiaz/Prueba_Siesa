var changeNumberBase = function (number, baseTo) {
    if (number <= baseTo) {
        return Math.round(number / baseTo).toString() + (number % baseTo).toString();
    }
    return (changeNumberBase(Math.floor(number / baseTo), baseTo)) + (number % baseTo).toString();
};
console.log(changeNumberBase(287, 2));
