//callback :- callback is a function which is passed as an argument to another function and is executed after some operation has been completed.
function hello(){
    console.log("hello world")
}

function greet(name,callback){//callback is a function which is hello() in this case
    console.log("hello " + name)
    callback()
}

// hello()
greet("Aliaaace",hello)