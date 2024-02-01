console.log('Test start');
setTimeout(() => {
    console.log('Timeout');
}, 0);
Promise.resolve('Resolved it').then(res =>{
    console.log(res);
})
console.log('test ended');