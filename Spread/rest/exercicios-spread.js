// Usando spread com Array~

const numeros1 = [1,2,3];
const numeros2 = [4,5,6];

const combinado = [...numeros1,...numeros2]
console.log(combinado)

/*
Exercício 1 
temos 2 arrays que simboliza um semestre, onde cada um armazena um array de 6 elementos
representando o valor de venda mensal da empresa, preciso que una ambos arrays 
e tire uma média, para eu saber por quanto gira a média de lucro mensal da empresa.
*/

const semestre01 = [31000, 20000, 12000, 6000, 9000, 4500]
const semestre02 = [8000 , 12000, 8900, 15000, 10000, 8100]

const agrupar = [...semestre01,...semestre02];
console.log(agrupar)

const [jan,fev,mar,ma,abril,jun,julho,agosto,out, setem, novem, dezemb] = agrupar

const somaTotal = jan + fev + mar + ma + abril + jun + julho + agosto + out + setem + novem + dezemb
console.log(somaTotal)

const mediaMensal = somaTotal / 12 
console.log("a média mensal de lucro da empresa gira em torno de R$" + mediaMensal.toFixed(2))