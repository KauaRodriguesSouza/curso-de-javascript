function cursiva(num){
    console.log(num)
    if(num >= 10) return;
    num++
    cursiva(num)
}

cursiva(0)