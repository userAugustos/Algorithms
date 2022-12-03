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
 * as I think about promises, the thing stands as this simple pattern
  */
const promise2 = promise.then((result) => {
    console.log("Sucesso é um número " + result)
}).catch((err) => {
    console.log("Eita, é um número " + err)
})

console.debug(promise2)
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

// now as async

const companyPromise = (isCompany) => {
    return new Promise((resolve, reject) => {
        if(!isCompany) {
            reject({
                allowed: false,
                name: undefined,
            })
        }else {
            resolve({
                allowed: true,
                name: "Facebook",
            })
        }
    })
}

// here im passing catch inside .then
companyPromise(isCompany).then((result) => console.log("Acesso Liberado", result), (err) => console.log("Eita Negado", err))


// Let's se a chaining after catch example with promise

const url = "https://jsonplaceholder.typicode.com/users";

// the fetch api is a promise

let users;

fetch(url)
    .then(res => res.json())
    .then(data => users = data)
    .catch((err) => console.log("Error", err))
    .then(() => users = undefined)

// so above if the fetch fails for some reason, uor app doesn't throw exception, just do another thing with the error, then we can keep work in the promise
console.log(users)
