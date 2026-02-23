//1.tradition function decl
function greet(name){
    return "hello"+name;
}
console.log(greet(" world"));

//2. function expression 
const greet1 = function (name){
    return "hello1"+name;

} 
console.log(greet1(" worldddd1"));


//3.arrow function 

const greet2 = (name)=>{
    return"hello2"+name;
}
console.log(greet2(" bharath"));

//shorter arrow function 
const greet3= name =>"hellow3"+name;
console.log(greet3(" rajesh"));

function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8
function square(num) {
  return num * num;
}
console.log(square(4)); // 16


//anonymous function
setTimeout(function() {
    console.log("This message is displayed after 2 seconds");
}, 2000);


//quickly invoked function expression (IIFE)
(function() {
    console.log("I run immediately!");
})();