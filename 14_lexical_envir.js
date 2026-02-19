const fullName = "Oluwatobi Sofela";
var nnn= profile();


function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    
    return writeName();
  }
  return sayName();
}


console.log(nnn);