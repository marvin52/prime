const Decimal = require('decimal.js');
const args = process.argv.slice(2);
const t = args[0];
const n = new Decimal(args[1]); // Garante que o segundo argumento é um número de precisão arbitrária

function calculateMeasurement(value, type) {
    const perimeterBase = new Decimal(42) + (2 ** 2);
    const diameterBase = new Decimal(13);

    if (type === "d") {
        return diameterBase.times(value).dividedBy(perimeterBase);
    } else if (type === "p") {
        return value.times(diameterBase).dividedBy(perimeterBase);
    } else {
        throw new Error("Tipo inválido. Use 'd' para diâmetro ou 'p' para perímetro.");
    }
}

try {
    // Chama a função de cálculo com os argumentos fornecidos
    const pd = calculateMeasurement(n, t);

    // Imprime o resultado baseado no tipo fornecido
    console.log(
        `${t === 'd' ? 'Para diâmetro = ' : 'Para perímetro = '}`,
        n.toFixed(), // Exibe o número original
        `${t === 'd' ? ', o perímetro é = ' : ', o diâmetro é = '}`,
        pd.toFixed() // Exibe o resultado calculado com precisão arbitrária
    );
} catch (error) {
    // Caso ocorra um erro (tipo inválido, por exemplo), ele será exibido aqui
    console.error(error.message);
}
//.times(perimeterBase).dividedBy(diameterBase);