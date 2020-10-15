function calculateTax(amount, format) {
    const calcAmount = amount * 1.2;
    return format ? `$${(amount * 1.2).toFixed(2)}` : calcAmount;
}
let taxValue = calculateTax(100, false);
switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    default:
        let value = taxValue;
        console.log(`Unexpected type for value: ${value}`);
}
let newResult = calculateTax(200, false);
let myNumber = newResult;
console.log(`Number value: ${myNumber.toFixed(2)}`);
