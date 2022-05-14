/*Apesar da resolução não estar correta, gostaria de deixar exposto aqui que essa aula foi a que mais consegui compreender e ter autonomia na hora de pensar e escrever o código.
 Nas últimas semanas me senti mt presa as resoluções feitas em sala ou outros espaços e dessa vez me apeguei mais as minhas anotações e compreensão. Enfim, muito obrigada Professora, foram aulas maravilhosas.*/



function buscarPreco (produto) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (produto === "hormonios") {
            return resolve({
          nome: "Hormônios",
          preco: 99.00
        });

      } else if ((produto)=== "unhas gel") {
    
                return resolve({
          nome: "Unhas em Gel",
          preco: 190.00
        });

      } else if ((produto)=== "lace") {
            
                return resolve({
          nome: "Lace",
          preco: 3900.00
        });
            
      } else {
        return reject ("Produto não encontrado");
      }
  }, 2000)
})
    }
  
// função que simula busca num banco que retorna o valor das parcelas:
  
function calcularParcela(preco) {
    return new Promise ((resolve) => {
  let parcelasDesejadas = 10;
  setTimeout(() => {
    return resolve( preco * parcelasDesejadas
   )
 }, 2000);
})

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

    //referencias: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function
    //https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar#:~:text=Utilizando%20o%20async%2Fawait&text=Definindo%20uma%20fun%C3%A7%C3%A3o%20como%20async,que%20a%20Promise%20seja%20resolvida.