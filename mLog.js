const args = process.argv.slice(2);
const n = parseInt(args[0]);


// Função para calcular a solução de x^2 = 169 usando logaritmos
function calcularX(valor) {
    // Calculando o logaritmo natural do valor
    const logValor = Math.log(valor);
    
    // Dividindo o logaritmo por 2
    const metadeLog = logValor / 2;
    
    // Calculando a exponenciação para obter a solução
    const x = Math.exp(metadeLog);
    
    return x;
}

// Definindo o valor da constante
const valor = parseInt(n);

// Calculando as soluções positivas e negativas
const xPositivo = calcularX(valor);
const xNegativo = -calcularX(valor);

console.log(`As soluções da equação x^2 = ${valor} são x = ${xPositivo} e x = ${xNegativo}`);
