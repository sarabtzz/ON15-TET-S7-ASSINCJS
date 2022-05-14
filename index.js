/*
##Exercício da aula
  ###Vamos resolver um código assíncrono usando:
  [] Callbacks;
  [] Promises;
  [] Async/await; <~ foco desta aula, por ser o método mais moderno e usado 
##Nosso Algoritmo
  ###Simulação de requisições de dados em uma empresa de e-commerce:
    1. Informações do básicas de uma usuária; através de uma requisição
    2. A partir da id da usuária obter o endereço cadastrado;
    3. A partir da id da usuária obter o histórico de pedidos;
*/

<<<<<<< HEAD
const pegarUsuaria = (callback) => {
  setTimeout(() => { //usado por se tratar de um processo assincrono, foi buscar no banco de dados
    return callback(null, {
      nome: "Clara dos Anjos",
      email: "clara@ginga.com",
      id: 241522
    })
    }, 1000)
  }

  //function resolver(erro, usuaria){
    //return console.log('usuária: ' + usuaria.nome)

  
 
  const pegarEndereco = (idUsuaria, callback) => {
    setTimeout(() => {
      return callback(null, {
        rua: "Raimundo de Oliveira",
        numero: "801",
        bairro: "Samel Park"
    })
  }, 2500)
}

  const pegarPedidos = (idUsuaria, callback) => {
    setTimeout(() => {
      return callback(null, {
        pedido1: "caneca",
        pedido2: "samba",
        pedido3: "colete"
      })
    }, 3000)
  }

  pegarUsuaria(resolverUsuaria = (error, usuaria) => {
    if(error) {
      return console.error("Retornou erro para usuaria", error);
    }
      pegarEndereco(usuaria.id, resolverEndereco = (error, endereco) => {
        if(error) {
          return console.error("Retornou erro para endereço", error);
        }
          pegarPedidos(usuaria.id, resolverPedidos = (error, pedidos) => {
            if(error) {
              return console.error("Retornou erro para pedidos", error);
            
    }
    console.log(`
    Usuária: ${usuaria.nome}
    E-mail: ${usuaria.email}
    Endereço: ${endereco.rua}, ${endereco.numero}
    Pedidos: ${pedidos.pedido1}, ${pedidos.pedido2}, ${pedidos.pedido3}
    `)
  })

      
    
    }

  //const usuaria = pegarUsuaria()
  //console.log ('usuária:' + usuaria ) //para pegar o retorno dessa função, é preciso criar um parametro

  //utilizar o callback como resolução de processo assincrono
  //callback é uma função e pode receber argumentos, chamada no retorno da função
  //estrutura: callback(err(falha), retorno(certo))
      )})
=======
const pegarUsuaria = () => {
  //Utilização do setTimeout para simular requisição externa
  setTimeout(() => {
    return {
      nome: "Lucilania",
      email: "luci@reprograma.com",
      id: 981273981273
    }
  }, 1000)
}

const pegarEndereco = () => {}

const pegarPedidos = () => {}

const usuaria = pegarUsuaria()
console.log('nome da usuária: ' + usuaria.nome)
>>>>>>> aacb52469776d61b526a1640b3cfc0dabd32aeb2
