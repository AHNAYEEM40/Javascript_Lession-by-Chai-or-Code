//Object de-structure method

const Course ={
    coursename:"js is hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor : instructor} =Course
console.log(instructor)