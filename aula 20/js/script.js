 function meuEscopo(){
    const form = document.querySelector('.form');

    const resultado = document.querySelector(".resultado")

    const pessoas = [];

    function eventoForm(evento){

        evento.preventDefault();

        const nomef = form.querySelector('.nome').value
        const sobrenomef = form.querySelector('.sobrenome').value
        const pesof = form.querySelector('.peso').value
        const alturaf = form.querySelector('.altura').value

        const adicionarpessoa = {
            nome: nomef,
            sobrenome : sobrenomef,  
            peso : pesof, 
            altura : alturaf
        };
        
        const pessoas = [adicionarpessoa]
        
        console.log(pessoas);

        console.log(resultado)
        
        resultado.innerHTML += (`olá ${nomef} ${sobrenomef}, vejo que seu peso é ${pesof} quilos e sua altura é ${alturaf}cm <br>`)
        
    }   
    
    
    form.addEventListener('submit', eventoForm)
    
}
meuEscopo()
