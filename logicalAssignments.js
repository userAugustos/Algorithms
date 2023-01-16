const user = {name: "Cory", email: ''};

// intresting to see here, that '' will be considered "falsy"

/* Logical AND
    So with AND we check if the value is truthy than assigns
*/
user.name &&= "Felipe" // Name is truth than JS will replace the name
console.debug(user.name)

user.email &&= "f@gmail.com" // email is empty so JS will pass by this assign
console.debug(user.email)

/* Logical OR
    So with OR we can make this different, we will basically be saying "If it is NOT trythy than uses it"
eg:
*/

const updateUserInfos = {
    name: undefined,
    email: "f@gmail.com"
}

user.name ||= updateUserInfos.name // So here, user.name already exists, so we will not update with data in updateUserInfos
console.debug(user.name)

user.email ||= updateUserInfos.email // and here, we will update user information with new email
console.debug(user.email)


// u can think about OR in some IF situations, like
const someFetchData = {
    x: undefined,
    y: "Y"
}

const myObjectForSomething = {
    myX: someFetchData.x || "Ops, i don't have a X", // so he will aways catch the first operation, if is true, but if its falsy, will go with the second parameter
    myY: someFetchData.y || "Ops, i don't have a Y"
}
