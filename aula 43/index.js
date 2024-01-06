function divisivel (num){

    if (num !== Number(num)) return `por favor retire as '' do seu numero ou coloque um numero`

    if (num < 0 || num > 100) return 'seu numero tem que ser entre 0 e 100'

    if(num % 3 === 0 && num % 5 === 0  ) return 'fizzbuzz'

    if(num % 3 === 0) return 'fizz'

    if (num % 5 === 0) return 'Buzz'

    return 'seu numero nao é divisivel por 3 e nem por 5'
}

    for (let i = 0; i <= 50 ; i++){

        console.log(i, divisivel (i))
    }
