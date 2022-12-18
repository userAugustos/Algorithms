const getLuke = fetch("https://swapi.dev/api/people?name=luke")
const getLeia = fetch("https://swapi.dev/api/people?name=leia")
const getDarth = fetch("https://swapi.dev/api/people?name=darth")

Promise.all([getLuke, getLeia, getDarth]).then(characters => {
    logCharacters(characters)
})

function logCharacters(characters) {
    characters.forEach(character => console.log(character))
}

const promiseError = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Something went wrong')), 500);
});

Promise.all([getDarth, promiseError, getLeia])
    .then(values => {
        // This block will not be executed because one of the promises is rejected
    })
    .catch(error => {
        console.error(error);
    });

// Então se eu quiser que não aconteça um catch mesmo se der erro chamando uma das promises, eu posso usar o allSettled

Promise.allSettled([getLuke, promiseError, getDarth]).then(characters => {
    // então aqui o logCharacters vai receber um array diferente, ele vai receber um array com status da promise: settled ou rejected e o valor
    /*
    * pense no objeto:
    * {
          status: 'fulfilled' | 'rejected',
          value: any
        }
        * então a promise getLuke vai retornar status: 'fulfilled' e a info do personagem
        * mas a promiseError vai retornar status: 'rejected' e o objeto de erro
    * */
    logCharacters(characters)
})

/*
 MUITO IMPORTANTE QUE A PROMISE.ALLSettled NÃO TEM ORDEM DE RETORNO!
 DIFERENTE DO PROMISE.ALL, então no promise.allSettled o que retornar primeiro, vai ficar primeiro no array
 */
