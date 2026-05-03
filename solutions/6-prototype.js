// BEGIN
const rates = {
    usd: { eur: 0.7 },
    eur: { usd: 1.2 },
};

function Money(value, currency = 'usd') {
    this._val = value;
    this._curr = currency;
}

Money.prototype.getValue = function() { return this._val; };
Money.prototype.getCurrency = function() { return this._curr; };

Money.prototype.exchangeTo = function(currency) {
    if (this._curr === currency) return new Money(this._val, currency);
    return new Money(this._val * rates[this._curr][currency], currency);
};

Money.prototype.add = function(money) {
    const converted = money.getCurrency() !== this._curr ? money.exchangeTo(this._curr).getValue() : money.getValue();
    return new Money(this._val + converted, this._curr);
};

Money.prototype.format = function() {
    return this._val.toLocaleString('en-US', { style: 'currency', currency: this._curr.toUpperCase() });
};

export default Money;
// END
