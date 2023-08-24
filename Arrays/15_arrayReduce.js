//custom reduce
Array.prototype.myreduce = function(callback,iv){
    let oarr = this;
    let pv;
    if(iv == undefined){
        pv = this[0];
        for(let i=1;i<this.length;i++){
            let cv = this[i];
            let nrv = callback(pv,cv,i,oarr);
            pv = nrv;
        }
    }else{
        pv = iv; 
        for(let i=0;i<this.length;i++){
            let nv = callback(pv,this[i],i,this);
            pv = nv;
        } 
    }
    return pv;
}



//it will process all value of the array and return a single value after operation on array
let arr = [10,20,30,40,50];

let sum1 = arr.reduce(function(pv,cv,ci,oarr){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
});
console.log(sum1);
// 10 20 1
// 30 30 2  
// 60 40 3  
// 100 50 4 
// 150 

let sum2 = arr.reduce(function(pv,cv,ci,oarr){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
},1000);
console.log(sum2);

// 1000 10 0
// 1010 20 1
// 1030 30 2
// 1060 40 3
// 1100 50 4
// 1150 

let sum3 = arr.myreduce(function(pv,cv,ci,oarr){
    console.log(pv + " " + cv + " " + ci);
    return pv + cv;
},1000);
console.log(sum3);
