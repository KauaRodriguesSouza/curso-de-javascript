function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador
    }
}

let duplicar = criaMultiplicador(2)
let triplicar = criaMultiplicador(3)
let quadriplicar = criaMultiplicador(4)

console.log(triplicar(4))