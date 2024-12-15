function receivesAFunction(player){
    return player();
}

receivesAFunction(() => {
    return "Cristiano Ronaldo"
});

function returnsANamedFunction(){
    return function sum(num1,num2){
        console.log(num1 + num2)
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("This is an anonymous function")
    }
}