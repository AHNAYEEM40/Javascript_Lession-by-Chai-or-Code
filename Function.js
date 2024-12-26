function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("J");
  console.log("K");
  console.log("L");
}
sayMyName();

// function addTwoNumber(numb1, numb2) {
//   console.log(numb1 + numb2);
// }
function addTwoNumber(numb1, numb2) {
    let result = numb1 + numb2;
    // console.log("nayeem")
     
    return result;
}
const result = addTwoNumber(3, 4);
// console.log("Result:" ,result);

// function logInUserMassage (username = "sam"){

function logInUserMassage (username){
    if (!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(logInUserMassage("Nayeem"))
