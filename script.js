// Crie um objeto que receba ao menos três propriedades sobre você.
let pessoa = {
    nome: 'Taíse',
    idade: 32,
    estado: 'RS'
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
pessoa.signo = 'Aquario',

    // Remova uma propriedade desse objeto.
    delete pessoa.idade
//Mostre no console todas as propriedades desse objeto.
console.log(pessoa)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [{
    mome: 'Vanessa',
    idade: 25,
    telefone: 115588666,
    amigos: 'Monica',
}, {
    mome: 'Carla',
    idade: 34,
    telefone: 55664142,
    amigos: 'Tatiane',
}, {
    mome: 'Sofia',
    idade: 15,
    telefone: 26478924,
    amigos: 'Bruna',
}, {
    mome: 'Pamela',
    idade: 29,
    telefone: 36489248,
    amigos: 'Gabriely',
}, {
    mome: 'Tamara',
    idade: 27,
    telefone: 564789215,
    amigos: 'Camila',
}]

cadastro[0].amigos =['Bianca', 'Patricia', 'Jussara', 'Fernanda']

// Mostre no console o nome de um amigo de cada lista.
console.dir(cadastro)