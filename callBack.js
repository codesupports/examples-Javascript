// Array of object
const data = [
    { name: "Raj", profession: "dev" },
    { name: "Johan", profession: "UX" },
];

function getData() {
    let output = "";
    setTimeout(() => {
        data.forEach((item, index) => {
            output += `<p>${item.name}</p>`;
        })
        document.body.innerHTML = output;
    }, 1000)

}
// getData()
function addData(newData, callback){ // callback 
    setTimeout(()=>{
        data.push(newData);
        callback()
    },4000)
}
addData({name:'test', profession:'test'}, getData)