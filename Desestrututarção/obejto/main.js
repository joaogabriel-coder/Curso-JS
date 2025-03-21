// Nullish Coalescing Operator

const idade = null;

// 0, '', false, undefined, null == falsy values

document.body.innerText = 'Sua idade e: ' + (idade ?? 'Nao informado');


// obejetos 

const usuario = {
    nome: 'Lucas',
    idade: 22,
    cargo: 'Desenvolvedor',
    endereço:{
        rua: 'Rua dos bobos',
        numero: 18,
    },
};

document.body.innerText = ('nome' in usuario);


// retorna um array com as chaves do objeto
document.body.innerText = Object.keys(usuario);

// retorna um array com os valores do objeto
document.body.innerText = Object.values(usuario);


// retorna um array com as chaves e valores do objeto
document.body.innerText = JSON.stringify(Object.values(usuario));
document.body.innerText = JSON.stringify(Object.entries(usuario));

//Desestruturação de objetos
function mostraidade({idade}){
    return usuario.idade;
}


const { endereço, numero , nickname = 'joao'} = usuario;


document.body.innerText = JSON.stringify({ endereço, idade , nickname});

//Rest operator

const { nome, ...resto1} = usuario;
document.body.innerText = JSON.stringify(resto1);

const vetor = [1,2,3,4,5,6,7,8,9,10];
const [primeiro, ,terceiro, ...resto2] = vetor;
document.body.innerText = JSON.stringify({primeiro, terceiro, resto2});
