const Decimal = require('decimal.js');
const args = process.argv.slice(2);
const t = args[0];
const n = new Decimal(args[1]);

const PI = new Decimal(Math.PI); // Usar a constante Pi de precisão arbitrária

function calculateMeasurementWithPi(value, type) {
    if (type === "d") {
        return value.dividedBy(PI);
    } else if (type === "p") {
        return value.times(PI);
    } else {
        throw new Error("Tipo inválido. Use 'd' para diâmetro ou 'p' para perímetro.");
    }
}

try {
    const pd = calculateMeasurementWithPi(n, t);

    console.log(
        `${t === 'd' ? 'Para diâmetro = ' : 'Para perímetro = '}`,
        n.toFixed(),
        `${t === 'd' ? ', o perímetro é = ' : ', o diâmetro é = '}`,
        pd.toFixed()
    );
} catch (error) {
    console.error(error.message);
}
