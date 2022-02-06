const array = [11,2,3,4,5,3,4,8,10,1,50,2];

const sortedArray = array.sort((a,b)=>{
    return a-b;
})

console.log(sortedArray); //output [1, 2, 2, 3, 3, 4, 4, 5, 8, 10, 11, 50]

var arr = ["Ram", "Raj", "Ravi","Moh","Sita","Biz"];

arr.sort((a,b)=>{
    return a-b;
})

//output ['Ram', 'Raj', 'Ravi', 'Moh', 'Sita', 'Biz']