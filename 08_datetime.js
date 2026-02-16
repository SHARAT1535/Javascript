let mydate = new Date();
 //console.log(mydate);
//  console.log(mydate.getDate());
//  console.log(mydate.toLocaleString());
//     console.log(mydate.toDateString());
 console.log(typeof mydate);

let mycreateddate = new Date(2023, 0, 23);

// let mycreateddate2 = new Date(2025, 0, 23,11,12,6);//create specific date (year,month,day,hr,min,sec)
// console.log(mycreateddate.toLocaleString());
// console.log(mycreateddate);
// console.log(mycreateddate2.toLocaleString);
// console.log(mycreateddate2.toDateString());

// console.log(mycreateddate2.getHours());//11
// console.log(mycreateddate2.getMinutes());//12
// console.log(mycreateddate2.getSeconds());//6
//console.log(Date.prototype.getDate());//function

//let mydate=new Date("2023-02-26")//date in yyyy-mm-dd
// console.log(mydate.toLocaleString());

// let mydate3=new Date("2023-02-26 11:11:11")//date in yyyy-mm-dd hr:min:sec
//console.log(mydate3.toLocaleString());

// let mytimestamp = Date.now();
// console.log(mytimestamp);
// console.log(mycreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date();
console.log(newdate.toLocaleString());
console.log(newdate.getMonth());// starts with index i .e january is 0 to get proper add 1 
console.log(newdate.getDate());

