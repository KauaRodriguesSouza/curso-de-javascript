const form = document.querySelector("#formulario")

form.addEventListener('submit', function(event){ 

    event.preventDefault();

    const inputPeso = event.target.querySelector("#peso");
    const inputAltura = event.target.querySelector("#altura");
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso && !altura) {

        enviarResultadoParaDiv ('peso e altura estão invalidos', false);
        return;
    }

    if (!peso) {

        enviarResultadoParaDiv ('peso invalido', false);
        return;
    }

    if (!altura) {

        enviarResultadoParaDiv ('altura invalida', false);
        return;
    }

    const Imc = getimc(peso, altura);
    const nivelimc = getNivelImc(Imc)

    const msg = `seu imc é ${Imc} (${nivelimc})`

    enviarResultadoParaDiv(msg, true)

});

function getimc (peso, altura){
    const imc = peso / altura ** 2;
    return imc
}

function getNivelImc(Imc){
    const nivel = []; 

    nivel[0] = 'abaixo do peso'
    nivel[1] = 'peso normal'
    nivel[2] = 'sobrepeso'
    nivel[3] = 'obsidade grau 1'
    nivel[4] = 'obsidade grau 2'
    nivel[5] = 'obsidade grau 3'

    if (Imc >= 39.9){
         return nivel[5]
    };
    if (Imc >= 34.9){
        return nivel[4]
    };
    if (Imc >= 29.9){
        return nivel[3]
    };
    if (Imc >= 24.9){
        return nivel[2]
    };
    if (Imc >= 18.5){
        return nivel[1]
    };
    if (Imc < 18.5) {
        return nivel[0]
    };

}

function criarParagrafos(){
        // aqui para baixo vai criar um p para adicionar o resultado na div

    // vai adicionar um paragrafo(<p>) no html
    const p = document.createElement('p');

    return p;
}

function enviarResultadoParaDiv (msg, isvalid){

    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';


    const p = criarParagrafos();

    if(isvalid) {
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
