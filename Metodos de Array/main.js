//Metodos de Array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(const i of array){
    document.body.innerHTML += `${i}`;
}

array.forEach(item => {
    document.body.innerHTML += `<p>${item}`;
})

const novoarray = array.map(item => {
    return item * 2;
    //sempre retorna o msm tamanho de array
    //tambem aceita condições (if else)
})
document.body.innerText  = JSON.stringify(novoarray);

const filtrado = array
    .filter(item => item % 2 === 0)
    .map(item => item * 2);
document.body.innerText = JSON.stringify(filtrado); 

const todosnumeros = array.every(item => typeof item === 'number');
document.body.innerText = JSON.stringify(todosnumeros);

const temnumero = array.some(item => typeof item === 'number');
document.body.innerText = JSON.stringify(temnumero);

const find = array.find(item => item % 2 === 0);
document.body.innerText = JSON.stringify(find);
//retorna o primeiro item que satisfaça a condição

const findIndex = array.findIndex(item => item % 2 === 0);
document.body.innerText = JSON.stringify(findIndex);
//retorna o indice do primeiro item que satisfaça a condição

const soma = array.reduce((acc, item) => {
    return acc + item;
}, 0)

document.body.innerText = JSON.stringify(soma);
//retorna o valor acumulado

//Template Literals
const nome = 'Lucas';
const msg = `Bem vindo ${nome}`;

document.body.innerText = msg;

//Promises
fetch('https://api.github.com/users/diego3g')
    .then(response => {
        response.json().then(body => {
            console.log(body);//executa se der certo
        })
    })
    .catch(err => {
        console.log(err); //executa se der erro
    })
    .finally(() => {
        console.log('Sempre executa');//executa sempre
    })

const soma2numeros = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

soma2numeros(1,3)
    .then(soma => {
        document.body.innerText = soma;
    })
    .catch(err => {
        console.log(err);
    })

async function BuscadadosGIT(){
    const response = await fetch('https://api.github.com/users/diego3g');
    const body = await response.json();
    console.log(body);
}

BuscadadosGIT();

//importação de funções
import { soma } from './lib.js';
console.log(soma(1,2));

import * as math from './lib.js'; //importa tudo dentro do arquivo
console.log(math.soma(1,2));

