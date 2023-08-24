Array.prototype.myMap = function(callback){
    let oarr = this;//this ma main array ka address hai jispa map chala rahai hai
    let res = [];
    for(let i=0;i<oarr.length;i++){//this ma addess hai of the main array jispa loop chala hai
        let val = this[i];//jab mymap use kara ga toh ek callback function type kara ga hum jo mymap ka callback ko mil jaya ga jo parameter ma hai
        let rv = callback(val,i,this);//then jab jab es line par aaya toh toh ya jo callback function pass kiya vo chalaga and value return push ho jaya gi in res array ma
        res.push(rv);
    }
    return res;
}

let arr = [2,5,9,8,15,11,6];

let sarr = arr.myMap(function(v,i,oarr){
    //console.log(v+"@"+i+"=["+oarr + "]");
    return v*v;
});

console.log(sarr);