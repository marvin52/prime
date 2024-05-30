const args = process.argv.slice(2);
const n = parseInt(args[0]);





/**
- Série de Leibniz para π:

| Esta é uma série infinita alternada
| que converge para π. Quanto mais termos
| da série forem adicionados,
| mais precisão será alcançada.

- Série de Gregory-Leibniz para π:

| Esta é outra série infinita alternada
| que converge para π. Assim como a série
| de Leibniz, quanto mais termos forem somados,
| mais precisa será a aproximação.

- Método de Monte Carlo:

| Este método usa a aleatoriedade para estimar π.
| Consiste em lançar pontos aleatórios em um quadrado
| e contar quantos desses pontos estão dentro de um
| círculo inscrito no quadrado. A razão entre o número
| de pontos dentro do círculo e o número total de pontos
| lançados pode ser usada para estimar π.

- Fórmula de Arquimedes:

| Esta fórmula usa a ideia de inscrever e circunscrever
| polígonos regulares a um círculo. Quanto mais lados
| esses polígonos têm, mais próximos seus perímetros
| estão do perímetro do círculo. Ao usar polígonos com
| um grande número de lados, você pode obter
| uma boa aproximação para π.
 
 */

function calcularPiLeibniz(quantidadeTermos) {
    let pi = 0;
    for (let i = 0; i < quantidadeTermos; i++) {
        pi += (4 / (1 + 2 * i)) * (i % 2 === 0 ? 1 : -1);
    }
    return pi;
}

function calcularPiGregoryLeibniz(quantidadeTermos) {
    let pi = 0;
    for (let i = 0; i < quantidadeTermos; i++) {
        pi += 4 / (2 * i + 1) * (i % 2 === 0 ? 1 : -1);
    }
    return pi;
}

function calcularPiMonteCarlo(quantidadePontos) {
    let dentroCirculo = 0;
    for (let i = 0; i < quantidadePontos; i++) {
        const x = Math.random();
        const y = Math.random();
        if (x * x + y * y <= 1) {
            dentroCirculo++;
        }
    }
    return 4 * (dentroCirculo / quantidadePontos);
}

function calcularPiArquimedes(quantidadeLados) {
    let lado = 1;
    let nLados = 6; // Hexágono inicial
    for (let i = 0; i < quantidadeLados; i++) {
        const apotema = Math.sqrt(1 - (lado * lado) / 4); // Apótema do polígono
        const perimetroPoligono = nLados * lado; // Perímetro do polígono
        const perimetroCircunscrito = nLados * lado; // Perímetro do polígono circunscrito
        lado = Math.sqrt(2 - 2 * Math.sqrt(1 - apotema * apotema)); // Novo lado do polígono
        nLados *= 2; // Dobrar o número de lados para o próximo polígono
    }
    return perimetroCircunscrito / 2;
}


function F(A) {
    let result = A + ((((A - 1) * A * (A - 1)) + (A - 1)) * Math.pow(((A - 1) * ((A - 1) + A)), - (A - 1)) + (((Math.pow(((A - 1) * ((A - 1) + A)), - (A - 1))) / ((A - 1) * (A - 1) * A)) * (A - 1)));
    return result;
}
function _F(A) {
    return A + (((A - 1) * A * (A - 1) + A - 1) * Math.pow((A - 1) * (2 * A - 1), - (A - 1)) + (Math.pow((A - 1) * (2 * A - 1), - (A - 1)) / ((A - 1) * (A - 1) * A)) * (A - 1));
}


/**
 * 
 * 
 * 
 * 
 * 
 * 
 */

function F_original(A) {
    return A + (((A - 1) * A * (A - 1) + A - 1) * Math.pow((A - 1) * (2 * A - 1), - (A - 1)) + (Math.pow((A - 1) * (2 * A - 1), - (A - 1)) / ((A - 1) * (A - 1) * A)) * (A - 1));
}

function F_e(A) {
    const parteA = A - 1;
    const parteB = ((parteA * A * parteA) + parteA);
    const parteC = Math.pow((parteA * (2 * A - 1)), -(parteA));
    const parteD = ((Math.pow((parteA * (2 * A - 1)), -(parteA)) / (parteA * parteA * A)) * parteA);
    
    // Ajuste da constante e
    return A * Math.exp(parteB * parteC + parteD);
}

function F_phi(A) {
    const parteA = A - 1;
    const parteB = ((parteA * A * parteA) + parteA);
    const parteC = Math.pow((parteA * (2 * A - 1)), -(parteA));
    const parteD = ((Math.pow((parteA * (2 * A - 1)), -(parteA)) / (parteA * parteA * A)) * parteA);
    
    // Ajuste para aproximar a razão áurea
    return 1 + (parteB * parteC + parteD) / A;
}

// Função para testar todas as fórmulas
function testarFormulas(valor) {
    console.log(`Valor de A: ${valor}`);
    console.log(`F_original(${valor}) = ${F_original(valor)}`);
    console.log(`F_e(${valor}) = ${F_e(valor)}`);
    console.log(`F_phi(${valor}) = ${F_phi(valor)}`);
    console.log('--------------------------');
}

// Valores para testar as fórmulas
const valores = [3];

valores.forEach(testarFormulas);
