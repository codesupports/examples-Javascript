const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('resolve')
    },1000)
})

promise1.then((res)=>{    
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

// Promise.all----------------------------------------------------------------------------------------------

Promise.all([promise1, promise2])
  .then(results => {
    console.log(results); // Array of results
  })
  .catch(error => {
    console.error(error); // Catches if any promise fails
  });

// Promise.race----------------------------------------------------------------------------------------------

Promise.race([promise1, promise2])
  .then(result => {
    console.log(result); // First resolved value
  })
  .catch(error => {
    console.error(error); // First rejected reason
  });

// Promise.allSettled----------------------------------------------------------------------------------------------

Promise.allSettled([promise1, promise2])
  .then(results => {
    results.forEach(result => {
      console.log(result.status); // "fulfilled" or "rejected"
    });
  });

// Promise.any----------------------------------------------------------------------------------------------

Promise.any([promise1, promise2])
  .then(result => {
    console.log(result); // First resolved value
  })
  .catch(error => {
    console.error("All promises were rejected.");
  });

// Async/await----------------------------------------------------------------------------------------------
async function myAsyncFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}


