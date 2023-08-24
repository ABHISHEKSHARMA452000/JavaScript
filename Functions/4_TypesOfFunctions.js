//1. function definiton
// function fn(){
//     console.log("i am a function definition");
// }
//2.function expression
/*
let a = [10,20,30];
let b = a;
console.log(b); => [10,20,30]
*/
// let second = function original(){//address of original directly pass to second 
//     console.log("im a 2nd fn");
// }
//console.log(original());error dega bcoze original apni value loss kar diya hai
//second();
//console.log(second());
//3. IFFEE => immediately run as invoked
// console.log("Before");
// (function hello (){
//     console.log("bye");
// })();
// console.log("After");
//4.anonymous function function without name 
(function (){
    console.log("bye");
})();
let second = function (){//address of original directly pass to second 
    console.log("im a 2nd fn");
}
second();





