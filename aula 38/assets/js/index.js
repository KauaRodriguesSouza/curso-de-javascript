const paragrafos = document.querySelector('.paragrafo');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;


for (let p of ps){

    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'

    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'

    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'

    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'

};