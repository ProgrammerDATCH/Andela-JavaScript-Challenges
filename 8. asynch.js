//version 1

// const setStudentAgeApi1 = (student, age) => {
//     console.log("1. Starting ..")
//     setTimeout(() => {
//         console.log("2. setting age for the student")
//         student.age = age;
//     }, 500);
//     console.log("3. Done ..")
// }

// let student = { name: "denis" }
// setStudentAgeApi1(student, 23)
// console.log(student)


//version 2 with promise
const setStudentAgeApi = (student, age) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if(age < 0)
                reject ("Bad Age")
         else
                  resolve(student)
        },
            500);
 
 
    });
 }

let student = { name: "denis" }
console.log("Loading student DATA...")
setStudentAgeApi(student, -23).then(res=>{
    console.log(res)
}).catch(err => console.log(err))