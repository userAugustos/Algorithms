/*
* Promises allow JS to be multithreaded
* */

/**
 * Sync function
 * @param a
 * @param b
 */

function sumNumbers(a, b) {
    let result = a + b;

    if(result % 2 === 0){
        successCallback();
    }else {
        errorCallback();
    }
}

function successCallback() {
    console.log("Sucesso é um número par");
}

function errorCallback() {
    console.log("Eita, é número inpar")
}

sumNumbers(2, 2)

/**
 * As a Promise
 * @type {Promise<unknown>}
 */

let promise = new Promise((resolve, reject) => {
    let result = 3 + 2;

    if(result % 2 === 0) {
        resolve('par');
    }else {
        reject('inpar');
    }
})

/**
 * so u can undertans that, with a promise we can have a resolve and a reject as states of your callbacks, then, resolveds are in the "then" and reject in "catch"
 * as i think about promises, the thing stands as this simple pattern
  */
promise.then((result) => {
    console.log("Sucesso é um número " + result)
}).catch((err) => {
    console.log("Eita, é um número " + err)
})

/**
 * Sync function
 * another example...
 */

const isCompany = false;

function accessToCompanyDash(callback, errorCallback) {
    if(!isCompany) {
        return errorCallback({
            allowed: false,
            name: undefined,
        })
    }
    return callback({
        allowed: true,
        name: "Google"
    })
}
// so this is a simple sync function, but if you run now, u will se that this func loggs come before the promise above
accessToCompanyDash((result) => console.log("Acesso Liberado", result), (err) => console.log("Eita, negado", err))


