//java script methods

let names=['danny','james','joe','holly'];
let names2=["dan","rock"];
let name3=["daniel","joseph"];



//let stringnames = names.toString();
//let stringnames = names.join(" and ")
//let stringnames = names.concat(names2,name3);
//names.splice(1,1)

//let namecopy = [...names];
//console.log(namecopy);
//console.log(typeof stringnames);

//names.splice(1,2,'bella','bob')// from ,how many item to delete, names to seperated by comma
//console.log(names);

// let slice = names.slice(1,3)// slice from 1 to 3 
// console.log(slice);
// console.log(names);

// let index = names.indexOf('joe')
// console.log(index)


// let index = names.lastIndexOf('joe')
// console.log(index);

let nums = [1,2,3,4,[1,9,[10,5]],7]

let numi = nums.flat(Infinity)
// let flatarr = nums.flat(2)
var count = 0  ;
// console.log(flatarr);
names.forEach((n) =>{
   // console.log(n)
    count++;
});

// console.log(count);

// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// }

// num=[1,2,3,4,5,6,7,8,9]
// console.log("nums",num);
// let doublesd = num.map((n) => n*2)// multiplies each element by 2
// console.log(doublesd);

let posts =[
    {title:"post one",author:"this is post one"},
    {title:"post two",author:"this is post two"},
    {title:"post three",author:"this is post three"},
    {title:"post four",author:"this is post four"}
];

let dansposts = posts.filter((p)=>p.author==="this is post one")
// console.log(dansposts);

