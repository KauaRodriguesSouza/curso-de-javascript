// function criaCalculadora(){
//     return{
        
//         display: document.querySelector('.display'),

//         inicia(){

//             this.cliqueBotoes();

//         },

//         realizaConta(){

//             let soma = this.display.value
            
//             try {
//                 soma = eval(soma);

//                 if (!soma){
//                     alert('conta invalida');
//                     return;
//                 }

//                 this.display.value = String(soma)
//             } catch (e) {
//                 alert('conta invalida');
//                 return this.display.value = '';
//             }
//         },

//         clear(){
//             this.display.value = '';
//         },

//         apagarUltimo(){
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         cliqueBotoes() {
//             document.addEventListener('click', e =>{
//                 const el = e.target;

//                 if(el.classList.contains('btn-num')){
//                 this.btnParaDisplay(el.innerText);

//                 }

//                 if(el.classList.contains('btn-clear')){

//                     this.clear();
//                 }

//                 if(el.classList.contains('btn-del')){

//                     this.apagarUltimo();
    
//                 }

//                 if(el.classList.contains('btn-eq')){

//                     this.realizaConta();
    
//                 }
//             });
//         },

//         btnParaDisplay(valor){ 
//             this.display.value += valor;
//         }

//     };
// }

// const calculadora2 = criaCalculadora()
// calculadora2.inicia()


function Calculadora() {

    this.inicia = function(){
        this.cliqueBotoes()
    }
    
    this.display = document.querySelector('.display')
    
    this.clear = function(){

        this.display.value = ''

    }

    this.apagarUltimo = function(){
 
        this.display.value = this.display.value.slice(0, -1);
    

    }

    
    this.realizaConta = function (){
    try {

        const soma = this.display.value
        const somafeita = eval(soma)
        this.display.value = somafeita

    } catch (error) {

        this.display.value = ''
        alert('sua conta nao pode ser efetuada')
        
    }
        


    }

    this.cliqueBotoes = function() {
            document.addEventListener('click', e =>{
            const el = e.target;
   
           if(el.classList.contains('btn-num')){
           this.btnParaDisplay(el.innerText);
   
           }
   
           if(el.classList.contains('btn-clear')){
   
               this.clear();
           }
   
           if(el.classList.contains('btn-del')){
   
               this.apagarUltimo();
   
           }
   
           if(el.classList.contains('btn-eq')){
   
               this.realizaConta();
   
           }
       });
   }

    this.btnParaDisplay = function (valor){

        this.display.value += valor;

    }

}

const calculadora = new Calculadora()
calculadora.inicia()

