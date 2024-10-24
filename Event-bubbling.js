 <div id="parent">
        Parent
        <div id="childDiv">
            Child <br /><br />
            <button id="child">Sub Child</button>
        </div>
    </div>


const parent = document.getElementById('parent');
const childDiv = document.getElementById('childDiv');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
    console.log('Parent clicked!');
});

childDiv.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Child clicked!');
});

child.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Sub Child clicked!');
});
