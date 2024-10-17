// Deep Explain about the Arrow function

// 1. Syntax

// normal function
// function example() {
//   console.log("Please subscribe Technical Raj Channel");
// }

//Arrow function
// const example = () => {
//   console.log("Please subscribe Technical Raj Channel");
// };
// const sum = (a, b) => a+b;

// 2. 'argument' keyword

// const addNumber =()=>{
//     console.log(arguments)
// }
// addNumber(10,20,29)

// 3. Hoisting
// greet()

// const greet = ()=> {
//     console.log('Hi ')
// }

// 4. This keyword

const obj ={
    name :"Technical Raj",
    myfunction : function(){
        console.log(this)
    }
}

obj.myfunction()
