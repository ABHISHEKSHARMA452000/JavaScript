//1. without return val
//function declaration
// function sayhello(name){//no need to give what type of parameter
//     console.log("Hello ", name); //function definition->body of function -> codes of function
//     //no need to specific which type of return type hai
// }

//a.
// sayhello("abhishek");
// //not call the function just function name print kar dega
// console.log(sayhello); //[Function: sayhello]

//b.
//all function supposed to return a value if js ka kuch nhi hota toh undefined return hota hai
// let rval = sayhello("baba");
// console.log("rval", rval);
// sayhello();

//2.
function sayhello(name){
    console.log("Hello", name)
    return "return from function";
}

let rval = sayhello("baba");
console.log("rval = ", rval);

let x;
console.log(x);
