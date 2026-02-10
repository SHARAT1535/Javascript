//primmitive data type are of 7 
// string , int ,float, symbol,Boolean,null undefined
//example 
const name = "noname"
const aadharno = 123456789012
money  = 1000
height =5.6
isBoy= true
let useremail
const id = Symbol("123")
anotherid= Symbol("123")
const bigno= BigInt(10000000000000000000000000000000000)

console.log(id===anotherid)
console.log(bigno)
console.log(typeof bigno)

//Refearence (non primitive data type)
//Array, Object, Function
//array
const here=["ironman","superman",'batman']
console.log(here)

//object
objectexample ={
    age:45,
    name:"sachin",
    address:"pune"  

}

//function
hellofunction = function sayhello(){
    console.log("hello world")
}
hellofunction()

//console.log(typeof sayhello)
console.log(typeof hellofunction)

