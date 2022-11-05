function receivesAFunction(callback) {
    console.log(callback())
}

function jayFunction() {
    console.log('Im learning')
}

function returnsANamedFunction() {
 return jayFunction
}

function returnsAnAnonymousFunction() {
    return function() {

    }
}
