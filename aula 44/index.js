function soma (x, y){
    if(typeof x !== 'number' || typeof x !== 'number'){
        throw new Error 
    } 
        return x + y
    
}

try{
    console.log(soma(10, 4))
}catch (err){
    console.log('deu errado')
}