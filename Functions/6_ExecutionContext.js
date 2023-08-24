//var and execution context
//GEC 
// console.log("Before declaration 2",a);//Before declaration undefined
// var a;
// console.log("After declaration 4",a);//After declaration undefined
// a = 10;
// console.log("After initialization 6",a);//After initialization 10

// function fn(){
//     console.log("Before declaration",a);//Before declaration undefined
//     var a;
//     console.log("After declaration",a);//After declaration undefined
//     a = 20;
//     console.log("After initialization",a);//After initialization 10
// }
// fn();


//question
//var ka scope function ma hota hai java jasa nhi ki if ma var a hai toh if tak scope hai a ka nhi
//a toh var hai isliya function ma scope hai pura so ab all round a =30 ho jaya ga
function fn(){
    //var is a function scope
    console.log("Before declaration 8",a);//Before declaration undefined
    var a;
    console.log("After declaration 10",a);//After declaration undefined
    a = 20;
    if(true){
        var a = 30;
        console.log("35",a);
    }
    console.log("After initialization 12",a);
}
fn();


