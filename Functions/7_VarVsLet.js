//var
//ressign 
//function scope,redeclare kar sakta hai,
//you can access a var variable before declaration there all are bad form of a variable
// console.log(a);
// var a;
// a = 10;
// var a;
// function fn(){
//     //var is a function scope
//     console.log("Before declaration 8",a);//Before declaration undefined
//     var a;
//     console.log("After declaration 10",a);//After declaration undefined
//     a = 20;
//     if(true){
//         var a = 30;
//         console.log("35",a);
//     }
//     console.log("After initialization 12",a);
//}
// fn();


//let 
//before declaration let and const ko use nhi kar sakta
//because ya temporal dead zone ma hota hai tab tak
//let block scope ma valid hota hai means { do curly brackett ka andar } accessible only
//we can't redeclare let also which make it more safer then var





var a;
function fn(){
    console.log("Before declaration 8",a);//undefined
    var a;//if ya let a ; hota yaha toh error milta 
    console.log("After declaration 10",a);//undefined
    a = 20;
    if(true){
        let a = 30;
        console.log("35",a);//30
    }
    console.log("After initialization 12",a);//20
}
fn();











