//arrays 
// const arr = ["abhishek","sharma"];
// const firstname = arr[0];
// const lastname = arr[1];

// const [firstname,lastname] = ["abhishek","sharma"];
// console.log(firstname);
// console.log(lastname);

//objects

// const obj = {
//     name : "abhishek",
//     age : 23
// };

// const {name : first,age} = {
//     name : "abhishek",
//     age : 23
// };
// console.log(first);
// console.log(age);

//class

// class User { //first letter should be capital
//     constructor(name,age){
//         console.log(name + " " + age);
//     }
// }

// const user1 = new User("papu",34);
// console.log(user1.name);

//spread operator 
//it pulls out all the value as separte value and add to the new array
const arr1 = ["hello","world"];
const arr2 = ["heyy" ,"everyone"];

const arr = [...arr1,...arr2];
console.log(arr);

const user = {
    name : "abhishek",
    age : 23
}

const newuser = {
    due:30,
    ...user
};
console.log(newuser)
