// Credit card info
// Each major credit card network has its own the Major Industry Identifier (MII):

// American Express cards always begin with the number 3, more specifically 34 or 37.
// Visa cards begin with the number 4.
// Mastercards start with the number 5.
// Discover Cards begin with the number 6.

const amerExpr = /^3[47][0-9]{13}$/;
const visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
const mastercard = /^5[1-5][0-9]{14}$/;
const discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;

function getCardInfo(cardNumber) {
    const cardNumberStr = cardNumber.toString();

    if (amerExpr.test(cardNumberStr)) {
        return "American Express card";
    } else if (visa.test(cardNumberStr)) {
        return "Visa card";
    } else if (mastercard.test(cardNumberStr)) {
        return "Mastercard";
    } else if (discover.test(cardNumberStr)) {
        return "Discover Card";
    } else {
        return "Invalid number of credit card";
    }
}

console.log(getCardInfo(348132133478987)); // American Express card
console.log(getCardInfo(4781321334789876)); // Visa card
console.log(getCardInfo(5181321334789876)); // Mastercard
console.log(getCardInfo(6011321334789876)); // Discover Card
console.log(getCardInfo(1)); // Invalid number of credit card
