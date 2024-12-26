const user = {
  username: "sam",
  price:199
};

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price ${anyobject.price}`)

}
handleObject(user)

const myNewArray =[200,400,500,500,]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))