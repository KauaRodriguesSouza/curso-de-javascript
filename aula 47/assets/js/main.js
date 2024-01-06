let numero = 0

let interval = setInterval(function () {
    
    charge()

    let recebe = numero++

    document.querySelector('#btn').addEventListener('click', (event) => {
        recebe++
    })
    

}, 500)

function charge(){
    document.querySelector('#cont').innerHTML = `contagem : ${numero}`
}

document.querySelector('#btn').addEventListener('click', (event) => {
    clearInterval(interval)
})

