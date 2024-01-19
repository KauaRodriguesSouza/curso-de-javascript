function criaPessoa(nome, sobrenome, p, a){
    return {
        nome, 
        sobrenome,

        get nomecompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomecompleto(valor){

            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')

        }, 

        fala(assunto = 'ainda não está falando'){
            return `${nome} está ${assunto}`
        }, 

        peso: p, 
        altura: a,

        get imc() {
            const indice = this.peso  / ( this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('kaua', 'rodrigues', 1.7, 54)
p1.nomecompleto = 'kaua rodrigues de souza'
console.log(p1.nomecompleto)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())