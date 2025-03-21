//Short Syntax
const nome = 'Daniel';
const idade = 23;

const usuario ={
    nome,
    idade,
};

document.body.innerText = JASON.stringify(usuario);

//Opitional Chaining

const user = {
    name: 'Daniel',
    age: 23,
    address: {
        street: 'Rua dos bobos',
        number: 176,
        zip: {
           code: '00000-000',
            city: 'São Paulo',
       }
    },
};

const key = 'name';
document.body.innerText = user[key];

document.body.innerText = user.address?.zip?.code ?? 'Nao informado';



