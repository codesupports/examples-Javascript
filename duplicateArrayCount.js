const uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];

const count ={};
uniqueCount.forEach((x)=>{
    count[x] = (count[x] || 0) 
})

// output {a: 3, b: 2, c: 2, d: 2, e: 2,}
