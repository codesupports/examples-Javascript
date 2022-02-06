var arr = [1,2,3,2,3,4,1,4];
// First method
[...new Set(arr)];
// output [1, 2, 3, 4]

// Second Method
arr.filter((items, index)=>{
    return arr.indexOf(items) == index;
})

// output [1, 2, 3, 4]