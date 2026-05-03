// BEGIN
const magic = (...args) => {

    const inner = (sum) => (...nextArgs) => {
        const new_sum = sum + nextArgs.reduce((a, b) => a + b, 0);
        const func = inner(new_sum);
        func.valueOf = () => new_sum;
        return func;
    };

    const sum = args.reduce((a, b) => a + b, 0);
    const func = inner(sum);
    func.valueOf = () => sum;
    return func;
};

export default magic;
// END
