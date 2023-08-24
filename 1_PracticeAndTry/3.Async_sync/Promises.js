//Promises ma 3 hi state hoti hai resolve ,reject ,pending
//resolve ka matlab ki async code chala hai sahi sa and request complete hui hai sahi sa 
//aus case ma  then chal ta hai 
//reject state means ki kisi reason sa request process nhi hui toh request complete nhi hui 
//sahi sa aus case ma catch vala part chalta hai

// let a = new Promise(function(res,rej){
//     if(false){//true;
//         return res();
//     }else{
//         return rej();
//     }
// })

// a.then(function(){
//     console.log("resolved !");
// }).catch(function(){
//     console.log("rejected !");
// });

// let b = new Promise((resolve, reject) => {
//     let val = 4;
//     //Math.floor(Math.random()*10);//gives number from 0 to 9, 10 excluded and 9 included
//     if(val < 5){
//         return resolve();
//     }else{
//         return reject();
//     }   
// })
// b.then(function(){
//     console.log("Below 5");
// }).catch(function(){
//     console.log("above 5");
// });

//promise chaining
let p1 = new Promise((resolve, reject) => {
    return resolve("sabse phle ghar jao");
})

let p2 = p1.then(function(data){
    console.log(data);
    return new Promise((resolve, reject) => {
        return resolve("gate kholo");
    })
})

p2.then(function(data){
    console.log(data);
})
