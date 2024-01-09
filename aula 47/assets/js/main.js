let segundo = 0

function criarHoraDoSegundo(segundo){
    const data = new Date(segundo * 1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio =  document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let time;
    function iniciarRelogio(){
        time = setInterval(function(){
        segundo++
        relogio.innerText = criarHoraDoSegundo(segundo)



}, 1000)
}
  iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(time)
    iniciarRelogio()
 }, 1000)

 pausar.addEventListener('click', function(event){
    clearInterval(time)
    relogio.classList.add('pausado')
    
})

 zerar.addEventListener('click', function(event){

    clearInterval(time)
    relogio.innerHTML = '00:00:00'
    segundo = 0

})