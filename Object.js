const mySym = Symbol ("mykey1")
const JsUser ={
    name:"Nayeem",
    [mySym] : "mykey",
    age: 18,
    location:"Barishal",
    email:"ahnayeem40@gmail.com",
    isLoggedIn: false,

}

JsUser.email = "ahnayeem789@gmail.com"
Object.freeze(JsUser)
JsUser.email = "ahnayeem0000@gmail.com"
// console.log(JsUser)

JsUser.Greeting = function() {
    console.log("Hallo Js user");
}
JsUser.GreetingTwo = function() {
    console.log(`Hallo Js user ${this.email}`);
}

console.log(JsUser.Greeting());
console.log(JsUser.GreetingTwo());