// const tinderUser = new Object(); //singleton object

const tinderUser = {}; // non single ton object

tinderUser.id = "123abc";
tinderUser.name = "Nayeem";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 ={obj1 ,obj2}
// const obj3 =Object.assign({},obj1,obj2)
// const obj3 = {...obj1 , ...obj2} //spread object
// console.log(obj3)


console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))