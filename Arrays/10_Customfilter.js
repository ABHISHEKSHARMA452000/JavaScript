Array.prototype.MyFilter = function(cb){
    let res = [];

    for(let i=0;i<this.length;i++){
        let v = this[i];
        let rbv = cb(v,i,this);//rbv == return boolean value
        if(rbv){
            res.push(v);
        }
    }
    return res;
}


let arr = [2,5,9,8,15,11,6];

let oarr = arr.MyFilter(function(v,i,oarr){
    //console.log(v+"@"+i+"=["+oarr + "]");
    if(v%2 == 1){
        return true;
    }else{
        return false;
    }
});
console.log(oarr);