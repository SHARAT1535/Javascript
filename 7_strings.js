const name ="user1name"
const repocount =8

console.log(name+" has "+repocount+" repositories")

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);


const gameName = new String('       highscore    ')

console.log(gameName);
console.log(gameName[2]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));
 const substring = gameName.substring(0,4)
 console.log(substring);
 
 //negTIV Number reveraw =ong input string 
const revsubstring = gameName.slice(-8,4)
console.log(revsubstring)

//split string 
console.log(gameName.split('score'))

const url =  "https://google.com"
console.log(url)
console.log(url.replace('https://','http://'))//http://google.com)
console.log(gameName.trim())
console.log(gameName.includes('scsore'))

