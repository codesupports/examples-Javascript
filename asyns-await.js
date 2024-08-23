
function getCheese() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const cheese = "Bring cheese first";
            resolve(cheese)
        }, 2000)
    })
}

function getDough(cheese) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const dough = cheese + " Making dough";
            resolve(dough)
        }, 2000)
    })
}

function bakePizza(dough) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const pizza = dough + " Making pizza now";
            resolve(pizza)
        }, 2000)
    })
}


async function makingPizza() {
    try {
        const cheese = await getCheese();
        console.log("(Promis-1):-", cheese);

        const dough = await getDough()
        console.log("(Promis-2):-", dough);

        const bakePiz = await bakePizza(dough)
        console.log("(Promis-3):-", bakePiz);
    } catch (err) {
        console.log("error occer", err)
    }

}

makingPizza()

// getCheese()
// .then(()=>{
//     console.log('get cheese')
//     return getDough(cheese)
// })
// .then(()=>{
//     console.log('get dougn')
//     return bakePizza(dough)
// })
// getCheese();