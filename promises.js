const pegarUsuaria = (Promise) => {
    return new Promise((resolve, reject) => {}
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
  
    
   
    const pegarEndereco = (idUsuaria) => {
        return new Promise((resolve, reject) => {
      setTimeout(() => {
        return Promise(null, {
          rua: "Raimundo de Oliveira",
          numero: "801",
          bairro: "Samel Park"
      })
    }, 2500)
  }
  
    const pegarPedidos = (idUsuaria) => {
      setTimeout(() => {
        return Promise(null, {
          pedido1: "caneca",
          pedido2: "samba",
          pedido3: "colete"
        })
      }, 3000)
    }

    const usuariaPromise = pegarUsuaria()

    usuariaPromise
    .then((usuaria) => {
        return pegarEndereco(usuaria.id)
        .then((endereco) => {
            return{
                nome: usuaria.nome,
                email: usuaria.email,
            },

      endereco: { 
          rua= endereco.rua,
          numero = endereco.numero,
          bairro = endereco.bairro,

        },
        })

    
            }
        return pegarPedidos(usuaria.id)
    })

    })
    .catch(

    
    )

    console.log(usuariaPromise)



  
   /* pegarUsuaria(resolverUsuaria = (error, usuaria) => {
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
  */
        
      

}