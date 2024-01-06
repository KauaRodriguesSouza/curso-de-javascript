const pessoas = {
    nome: 'kaua', 
    sobrenome:'rodrigues', 
    idade: 17,
    enderco :{
        rua: 'aristofanes',
        numero: 114
    }
};

const {nome, ...resto} = pessoas;
console.log(resto);