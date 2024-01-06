// console.log('olá mundo')

// // setTimeout excuta uma unica vez quando voce pede
// setTimeout(function(){
//     console.log('teste')
// }, 2000)


// // setInterval executa a cada tempo que voce mandar sem parar  
// setInterval(function (){ 

//     console.log('a cada 2 segundos voce vai ver')

// }, 2000) 

    function soma(){
        for (let i = 0; i <= 10; i++){
            return console.log(i) 
        }
    }

let mytime = setInterval(function (){
    soma()
})