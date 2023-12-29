// const tersDias = 60 * 60 * 3 *  1000

// const umDia = 60 * 60 * 24 *  1000
 
// //                     ano   mês    dia    hora    minuto   segundos   milesimo segundo 
// const data = new Date(2006 ,  3  ,  26 ,    0   ,    10   ,   23    ,         999        )

// declarando a data com string
//  const data  = new Date('2006-04-26 00:10:12')

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}


function formataData(data){
    const dia = zeroAEsquerda(data.getDate()); 
    const mes = zeroAEsquerda(data.getMonth() + 1); 
    const ano = zeroAEsquerda(data.getFullYear()); 
    const hora = zeroAEsquerda(data.getHours()); 
    const min = zeroAEsquerda(data.getMinutes()); 
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();

const dataBrasil  = formataData(data);

console.log(dataBrasil);