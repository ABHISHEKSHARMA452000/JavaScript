//hoisting == memory allocation -> in js function
//js ma code 2 part ma chal ta hai 
//1st memory allocation of all the function har function ko memory mil gayi then code starting sa execute hota hai
//2nd ma ja kar then code execute hota hai all 
//js ma koi matlab nhi ki function upar ya niche likha hai kaha par hai, jaha call hoga va sa chal jaya ga
iamReal();
function iamReal(){
    console.log("I am real");
}
//no effect from giving parameter
function iamReal(cfdfwfwfw){
    console.log("He isnt I am real one");
}
function iamReal(cfdfwfwfw){
    let a = 67;
    console.log(a);
    console.log("He isnt I am  3333  real one");
}
function iamReal(cfdfwfwfw){
    console.log("He isnt I am  3333  real one");
}

iamReal();




