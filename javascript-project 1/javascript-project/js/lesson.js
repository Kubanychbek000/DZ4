
var currencies = [
    { code: 'USD', name: 'US Dollar', rate: 1 },
    { code: 'GBP', name: 'British Pound', rate: 0.73 },
    { code: 'EUR', name: 'Euro', rate: 0.85 }
];
function convertCurrency(amount, fromCurrency, toCurrency) {
    var fromRate = currencies.find(currency => currency.code === fromCurrency).rate;
    var toRate = currencies.find(currency => currency.code === toCurrency).rate;

    var convertedAmount = (amount / fromRate) * toRate;
    return convertedAmount;
}
var amount = 100;
var fromCurrency = 'USD';
var toCurrency = 'EUR';
var convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
