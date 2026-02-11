const myarr = [1,2,3,4,5]

// console.log(myarr);
// console.log(myarr[0]);
// console.log(myarr[4]);
// console.log(myarr.length);
// myarr.push(6);
// console.log(myarr);
// myarr.pop();
// console.log(myarr);
// myarr.unshift(0);
// console.log(myarr);
// myarr.shift();

//slice amd spice
// console.log(myarr);
console.log(" original normla",myarr);
const myn1 = myarr.slice(1,3);
console.log("Sliced",myn1);

const myn2 = myarr.splice(1,3);
console.log("splices",myn2);
console.log("spliced array ",myarr);//original array gets changed


