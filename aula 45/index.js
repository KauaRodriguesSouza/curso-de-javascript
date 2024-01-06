let num = 12

try{ 

    if(num > 10){
        throw new Error ('Valor invalido, o valor maximo é 10')
    }

} catch{
    
    console.log(`digite um numero menor que 10, seu numero foi ${num}   `)
    num = 10

}finally{
    console.log(`volor do numero: ${num}`)
}