// // criei uma variavel com um numero 
// let num = 12

// try{ 
//     // nesse if eu estou falando que meu numero só pode ser 0 a 10 se nao dá uma erro
//     if(num > 10 || num < 0){
        
//         throw  ('Valor invalido, o valor pode ser de 0 até 10')

//     }

// } catch{
    
//     console.log(`digite um numero menor que 10, seu numero foi ${num}   `)
//     num = 10

// }finally{
//     console.log(`valor do numero: ${num}`)
// }



function retornarData(data){
     if(data && !(data instanceof Date)) {
        throw new Error ('esperando uma instancia de Date')
     }

     if(!data){
        data = new Date()
     }


     return data.toLocaleTimeString('pt-BR', {
        hour : '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
     })
}

try{
    const data = new Date('01-01-1970 12:58:12') 
    const hora = retornarData()
    console.log(hora)
}catch(e){

}
