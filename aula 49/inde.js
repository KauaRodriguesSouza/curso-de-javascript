function falaOi(){
    console.log('oi 1')
}
falaOi()

const falaOi2 = function(){
    console.log('oi 2')
}
falaOi2()

const falaOi3 = () => console.log('oi 3')
falaOi3()

const falaOiMaisSeuNome = nome => 'oi ' + nome
console.log(falaOiMaisSeuNome('kaua'))
