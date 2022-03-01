const uniqueCount = ["a","b","c","d","d","d","d"];

const count ={};
uniqueCount.forEach((x)=>{
    count[x] = (count[x]+1 || 1) 
})

// output {a: 3, b: 2, c: 2, d: 2, e: 2,}
