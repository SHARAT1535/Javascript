const arr1=[1,2,3,4,5]

const arr2=[89,75,28,98,46]

//console.log(arr1.push(arr2))
console.log(arr1); //[ 1, 2, 3, 4, 5, [ 89, 75, 28, 98, 46 ] ] 
// to get proper output use concate or spread

let mergarr= arr1.concat(arr2)
console.log(mergarr);

//another way to merge which is used most
let mergarr2=[...arr1,...arr2]
console.log(mergarr2);

const arr3 = [1,23,45,[2,53,5],[3,5,4,[4,5,6]]]
console.log(arr3.flat(Infinity)); //infinity is depth here 

//array conversion

const arr4= Array.from("sudeep")
console.log(arr4);

s1=100
s2=200
s3=300
s4=400
s5=500
const arr5= Array.of(s1,s2,s3,s4,s5)
console.log(arr5);




