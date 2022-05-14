/*
2. Resolva usando async/await: 
Você quer saber quanto vai pagar em reais por um produto comprado nos EUA e para isso precisa consultar numa "API"
de cotação para descobrir o valor do Dólar no momento da compra (você deve usar o valor do dólar comercial) e calcular
o valor em Real, em seguida precisa consultar outra "API" que retorna o valor de dois juros que serão cobrados sob o 
preço em Real e retornar o valor final 

dados:
`const precoEmDolar = 1270  //preço em dólar`
valor de retorno no console: `O preço final do seu produto é R$7474,08`
dica: valor em real + (valor em real * juros1) + (valor em real * juros2) = valor final
*/

//esse não resolvi e nem tive muito tempo de tentar devido a faculdade, estava tentando resolver comparando algumas coisas com o primeiro exercício

function buscarPrecoDolar() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          comercial: "5.03",
          turismo: "5.17",
        });
      }, 1000);
    });
  }
  
  function buscarJurosImportacao() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          juros1: 0.06,
          juros2: 0.11,
          message:
          "os dois juros são aplicados no valor total do produto em real",
        });
      }, 1000);
    });
  }
  
  async function calcularValorEmReal(precoEmDolar) {
    try {

    const item = await buscarPrecoDolar();
    const = await buscarJurosImportacao();
    const = await 
    catch (error) {}
  }

  }

  resolverPromises()
async function realizarCompras(produto) {
    try {

        const item = await buscarPreco(produto);
        const valorParcela = await calcularParcela(item.preco);
        const qtdDeParcelas = await item.preco / valorParcela;
        
    return console.log ('Seu ${item.nome} custa R$${item.preco.toFixed(2).replace(".", ",")}');
    //coloquei a linha abaixo pra tentar deixar menos extenso
    console.table ('Você pagará em (${quantidadeParcelas}x de R$${valorParcela.toFixed(2).replace(".", ",")}.`)');

    
    }

     catch(error) {
        console.error('Capturamos um erro: ', error)
    }

    }
    fazerCompra("lace");