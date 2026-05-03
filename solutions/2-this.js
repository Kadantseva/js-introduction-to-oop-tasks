// BEGIN
const make = (numerator, denominator) => {
  let n = numerator;
  let d = denominator;
  return {
    setNumer(a) { n = a; },
    setDenom(a) { d = a; },
    getNumer() { return n; },
    getDenom() { return d; },
    toString() { return `${n}/${d}`; },
    add(fraction) {
      return make(n * fraction.getDenom() + d * fraction.getNumer(), d * fraction.getDenom());
    },
  };
};

export default make;
// END