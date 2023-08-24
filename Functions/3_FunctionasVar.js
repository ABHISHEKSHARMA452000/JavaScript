//fn definition
function fn(param){    
    //console.log("I am function" + param);// dega object ==I am function[object Object] and array ma I am function10,20,30
    // console.log("I am function", param,param);
    console.log("I am function", param);
    param();
}

//String 
//fn("hello");
//boolean
//fn(true);
//object
//fn({name:"bob"});
//array
//fn([10,20,30]);

//function can also be treated as variable in js
function chotafun(){
    console.log("I am a chota function");
}
//function can be passed as a argument in function
fn(chotafun);
//fn(chotafun());



