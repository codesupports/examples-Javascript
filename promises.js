const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('resolve')
    },1000)
})

promise1.then((res)=>{
    console.log(res)
})