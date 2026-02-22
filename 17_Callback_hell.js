//callback hell:= a situation in javascript where callbacks are nested within aother acllbacksto the degress where the code is difficult to read and maintain. it is also known as "pyramid of doom" because of the shape of the code.
//old pattern to handle asynchronous functions 


function task1(callback){
    console.log("task 1 is completed")
    callback();
}
function task2(Callback){
    console.log("task 2 is completed")
    Callback();
}
function task3(Callback){
    console.log("task 3 is completed")
    Callback();
}
function en(){
    console.log("all tasks are completed")
}

task1(function(){
    task2(function(){
        task3(function(){
            en();
        })
    })
})