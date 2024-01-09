

// setTimeout excuta uma unica vez quando voce pede
// setTimeout(function(){
//     console.log('teste')
// }, 2000)


// setInterval executa a cada tempo que voce mandar sem parar  

function mostraHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-BR',{
        hour12: false

    })

}

const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 6000)
