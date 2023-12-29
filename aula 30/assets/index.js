const tempo = document.querySelector("#caixa")

const data = new Date()

function numeroEsquerda(nmr){
   return nmr >= 10 ? nmr : `0${nmr}`

}

 

const dsmn = data.getDay();
const dia = numeroEsquerda(data.getDate()); 
const mes = numeroEsquerda(data.getMonth()); 
const ano = numeroEsquerda(data.getFullYear()); 
const hora = numeroEsquerda(data.getHours()); 
const min = numeroEsquerda(data.getMinutes()); 


let diaDaSemana;
switch (dsmn){
    case 0: 
    diaDaSemana = 'domingo'
    break

    case 1: 
    diaDaSemana = 'segunda-feira'
    break
    case 2: 
    diaDaSemana = 'terça-feira'
    break

    case 3: 
    diaDaSemana = 'quarta-feira'
    break

    case 4: 
    diaDaSemana = 'quinta-feira'
    break

    case 5: 
    diaDaSemana = 'sexta-feira'
    break

    case 6: 
    diaDaSemana = 'sabado'
    break

}

let diaDoMes;
switch (mes){

    case 0: 
    diaDoMes = 'janeiro'
    break

    case 1: 
    diaDoMes = 'fevereiro'
    break

    case 2: 
    diaDoMes = 'março'
    break

    case 3: 
    diaDoMes = 'abril'
    break

    case 4: 
    diaDoMes = 'maio'
    break

    case 5: 
    diaDoMes = 'junho'
    break

    case 6: 
    diaDoMes = 'julho'
    break

    case 7: 
    diaDoMes = 'agosto'
    break

    case 8: 
    diaDoMes = 'setembro'
    break

    case 9: 
    diaDoMes = 'outubro'
    break

    case 10: 
    diaDoMes = 'novembro'
    break

    case 11: 
    diaDoMes = 'dezembro'
    break


}


tempo.innerHTML = `${diaDaSemana}, ${dia} de ${diaDoMes} de ${ano}, ${hora}:${min}`


