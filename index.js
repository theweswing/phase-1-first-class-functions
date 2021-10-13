function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    const namedFunction = input => input
    return namedFunction
}

function returnsAnAnonymousFunction(){
    return (function(){})
}