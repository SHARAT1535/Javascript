a=5
b="wq"

try{
    console.log(a/b);
    if(b==0){
        throw new Error("Divison by xero not allowwd");
    }
    if (isNaN(a) || isNaN(b)){
        throw new Error("both a and b shoulf be number");
}}

catch(error){
    console.log(error)

}
finally{
    console.log("this will always run");
}