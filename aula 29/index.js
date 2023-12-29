const data = new Date();
const diaDaSemana = data.getDay();

let diaSemanaTexto;

// if (diaDaSemana === 0){
//     diaSemanaTexto = 'Domingo'
// }else if (diaDaSemana === 1){
//     diaSemanaTexto = 'Segunda'
// }else if (diaDaSemana === 2){
//     diaSemanaTexto = 'Terça'
// }else if (diaDaSemana === 3){
//     diaSemanaTexto = 'Quarta'
// }else if (diaDaSemana === 4){
//     diaSemanaTexto = 'Quinta'
// }else if (diaDaSemana === 5){
//     diaSemanaTexto = 'Sexta'
// }else if (diaDaSemana === 6){
//     diaSemanaTexto = 'Sabado'
// }


switch (diaDaSemana){
    case 0 : 
    diaSemanaTexto = 'Domingo'
    break

    case 1 : 
    diaSemanaTexto = 'Segunda'
    break

    case 2 : 
    diaSemanaTexto = 'Terça'
    break

    case 3 : 
    diaSemanaTexto = 'Quarta'
    break

    case 4 : 
    diaSemanaTexto = 'Quinta'
    break

    case 5 : 
    diaSemanaTexto = 'Sexta'
    break

    case 6 : 
    diaSemanaTexto = 'Sabado'
    break

    default: 
    diaSemanaTexto = 'caramba jumento isso nao é dia da semana'
}

console.log(diaDaSemana, diaSemanaTexto);