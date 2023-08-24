//1.odd even separate
// let arr = [2,4,3,5,6,7,9,1];
// let even = [];
// let odd = [];
// while(arr.length > 0){
//     let val = arr.shift();
//     if(val%2 == 0){
//         even.push(val);
//     }else{
//         odd.push(val);
//     }
// }
// arr = even.concat(odd);
// display(even);
// display(odd);
// display(arr);

// function display(arr){
//     console.log(arr + " = " + arr.length);
// }

//2.print all subarray
// let arr = [10,20,30,40];
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<=arr.length;j++){
//         let sarr = arr.slice(i,j);
//         display(sarr);
//     }
// }

// function display(arr){
//         console.log(arr + " = " + arr.length);
// }
//3.
// let arr = [10,13,57,49,58,93,97,14,28];
// for(let i=arr.length-1;i>=0;i--){
//     let val = arr[i];
//     if(IsPrime(val) == true){
//         arr.splice(i,1);
//     }
// }
// display(arr);

// function IsPrime(val){
//     for( let div=2;div*div<=val;div++){
//         if(val% div == 0){
//             return false;
//         }
        
//     }
//     return true;
// }
// function display(arr){
//     console.log(arr + " = " + arr.length);
// }

//4.map ka question-1
// let arr = [
//     "Abhishek Sharma",
//     "Chandrika Sharma",
//     "Anita Sharma",
//     "Pc Sharma"
// ];
// let ans = arr.map(function(v,i,oarr){
//     let nameParts = v.split(" ");
//     let fname = nameParts[0];
//     let lname = nameParts[1];

//     let fnfc = fname[0];
//     let lnfc = lname[0];
//     let initials = fnfc + "." + lnfc + ".";
//     return initials;
// });

// console.log(ans);

//5. map ka question 2
// let arr = [
//     {
//         gender:'F',
//         age: 24
//     },
//     {
//         gender:'M',
//         age:34
//     },
//     {
//         gender:'F',
//         age:34
//     },
//     {
//         gender:'F',
//         age:28
//     },
//     {
//         gender:'F',
//         age:17
//     },
//     {
//         gender:'M',
//         age:42
//     },
//     {
//         gender:'F',
//         age:30
//     },
//     {
//         gender:'F',
//         age:27
//     }
// ];
// let res1 = arr.map(function(v,i,oarr){
//     if(v.gender == 'F' && v.age >= 20 && v.age <= 30){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(res1);

// //array function
// let res2 = arr.map((v,i,arr) =>{
//     return v.gender == 'F' && v.age >= 20 && v.age <= 30;
// });
// console.log(res2);

// let res3 = arr.map((v,i,arr) => v.gender == 'F' && v.age >= 20 && v.age <= 30);
// console.log(res3);

//6.map filter mixed question
//return ages of females
// let arr = [
//     {name:"A",age:14,gender:"M"},
//     {name:"B",age:34,gender:"M"},
//     {name:"C",age:24,gender:"F"},
//     {name:"D",age:44,gender:"F"},
//     {name:"E",age:44,gender:"M"},
//     {name:"F",age:28,gender:"F"},
//     {name:"G",age:36,gender:"M"},
//     {name:"H",age:47,gender:"F"}
// ];

// let res1 = arr.filter((v,i,oarr) => {
//     if(v.gender == "F"){
//         return true;
//     }else{
//         return false;
//     }
// }).map((v,i,oarr) => {
//     return v.age;
// });
 
// console.log(res1);

// let ladies = arr.filter((v,i,oarr) => v.gender == "F").map((v,i,oarr) => v.age);
// console.log(ladies);

//7.map and filter
//return names of all products in uppercase who has price >= 100

// let products = [
//     { name:"T-Shirt", price: 25},
//     { name:"Headphones", price: 125},
//     { name:"Keyboard", price: 75},
//     { name:"Monitor", price: 200}
// ];

// let res = products.filter(v => v.price >=100).map(v => v.name.toUpperCase());
// console.log(res);

// let res1 =  products.map(function(v,i,oarr){
//     if(v.price >= 100){
//         return v.name.toUpperCase();
//     }else{
//         return v.name.toLowerCase();
//     }
// })
// console.log(res1);

//8. return cubes of values whose square <=1000
// let arr = [5,83,24,67,71,12,24,7];

// let res1 = arr.filter(function(v,i,oarr){
//     if(v*v <=1000){
//         return true;
//     }else{
//         return false;
//     }
// }).map(v => v*v*v);
// //console.log(res)

// let res2 = arr.filter(v => v*v*v <10000).map(v => v*v*v);
// console.log(res2);

// let res3 = arr.map(val => val*val).filter(val => val<= 1000).map(val => val*val*val);
// console.log(res3);

//9. count all primes using reduce
// let arr = [51,23,37,44,73,82,97,45];

// let cp = arr.reduce(function(pfsf,cv,ci,oarr){
//     let flag = true;
//     console.log(pfsf + "-" + cv);
//     for(let div = 2;div*div < cv;div++){
//         if(cv % div == 0){
//             flag = false;
//             break;
//         }
//     }
//     if(flag == true){
//         return pfsf + 1;
//     }else{
//         return pfsf;
//     }
// },0);
// console.log(cp);
//10. flatten 2d array

// let arr2d = [[2,8,10],[45,31,25,64,72,88],[],[25,7]];
// let arr = arr2d.reduce(function(pv,cv,ci,oarr){
//     let narr = pv.concat(cv);
//     return narr;
// })
// console.log(arr);
//[2,8,10] [45,31,25,64,72,88]
//[2,8,10,45,31,25,64,72,88] []
//[2,8,10,45,31,25,64,72,88] [25,7]
//[2,8,10,45,31,25,64,72,88,25,7]

//11. compunt functions

function f(x){
    return x*x;
}
function g(x){
    return x+10;
}
function h(x){
    return 2*x;
}
let farr = [f,g,h];
let x = 10;

let cv = farr.reverse().reduce(function(pv,cv){
    return cv(pv);
},x);

console.log(cv);
//10 ,h function call value mila gi and vo pv ma ja kar save ho jaygi
//h(10),g
//g(h(10)),f
//f(g(h(10))) return from reduce


