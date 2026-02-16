//object = a collection of related properites and /or methods
// object can represet real world entities(people,products,places,etc)
// 

const person ={
    firstname :"sachin",
    lastname:"singh",
    age:45,
    isemployed:true,
    sayHello:function(){
        console.log("hello i am sachine")
    },
    agei:function(){
        console.log(this.age)
    }
}

// console.log(person.firstname)
// console.log(person.lastname)
// console.log(person.age)
// console.log(person.isemployed)
// // different way of accessing object
// console.log(person["firstname"])
// console.log(person["lastname"])
// console.log(person["age"])
// console.log(person["isemployed"])

const person2={
    firstname:"syddep",
    lastname:"hiri",
    age:50,
    isemployed:false,
    sayHello:function(){
        console.log("hello i am syddep")
    },
    sayHello2:()=>console.log("hello i am syddep from arrow funciton"),
    eat:()=>console.log("i am not eating from arrow funciton"),
}
console.log("************************************")
// console.log(person2.firstname)
// console.log(person2.lastname)
// console.log("is person employed",person2.isemployed)
// person.sayHello()
// person2.sayHello()
// person2.sayHello2()
//printing using this function
console.log("age of person is ",person.agei())
person2.eat()
