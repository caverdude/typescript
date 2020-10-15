function calculateTax(amount, discount = 0, ...extraFees) {
    if (amount != null) {
        return (amount * 1.2) - discount
            + extraFees.reduce((total, val) => total + val, 0);
    }
    else {
        return undefined;
    }
}
let taxValue = calculateTax(null, 0);
console.log(`Tax value: ${taxValue}`);
