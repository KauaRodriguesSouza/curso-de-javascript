//  const num = [15, 21, 30, 17, 18, 44, 12, 50]


// const numerosFiltrados = num.filter( valor => valor >= 10 );
// console.log(numerosFiltrados);

const pessoa = [ 
    {nome: 'luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const pessoasComNomeGrande = pessoa.filter(valor => valor.nome.length >= 5);

const pessoasAcimaDe50 = pessoa.filter(valor => valor.idade > 50);
    
const pessoasQueTerminaComA = pessoa.filter(valor => valor.nome.toLowerCase().endsWith('a'))


console.log(pessoasComNomeGrande)
console.log(pessoasAcimaDe50)
console.log(pessoasQueTerminaComA)