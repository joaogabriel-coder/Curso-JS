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