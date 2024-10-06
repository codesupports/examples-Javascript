// Event-Delegation: Event delegation is a technique in JavaScript and DOM manipulation where a single event listener is added to a parent element instead of adding separate listeners to multiple child elements. 
// Note: a)  single event listener is added to a parent element
         b)  Remove separate listeners to multiple child elements

How Event Delegation Works:

Event Bubbling: When an event occurs on an element, it first triggers the event on that element (the target) and then bubbles up 
  to its parent elements, allowing for the event to be caught by a parent listener.
Single Listener: By attaching a single event listener to a parent element, you can manage events for all its child elements. 
  This is efficient and reduces memory consumption, especially when there are many child elements.

Dynamic Elements: If child elements are added or removed dynamically, you don't need to reattach event listeners; the parent listener can handle events for any current or future children.

// HTML Part
<ul id="parent">
    <li class="child">Item 1</li>
    <li class="child">Item 2</li>
    <li class="child">Item 3</li>
</ul>
<button id="addItem">Add Item</button>


// Attach a single event listener to the parent
document.getElementById('parent').addEventListener('click', function(event) {
    // Check if the clicked element is a child
    if (event.target.matches('.child')) {
        alert(`You clicked on ${event.target.textContent}`);
    }
});

// Function to add new items dynamically
document.getElementById('addItem').addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.classList.add('child');
    newItem.textContent = `Item ${document.querySelectorAll('.child').length + 1}`;
    document.getElementById('parent').appendChild(newItem);
});

============================================================
Advantages of Event Delegation:.
Performance: Reduces the number of event listeners in the DOM, which can improve performance, especially in lists or grids with many elements.
Easier Management: Simplifies event handling, as you only need to manage a single listener instead of multiple.
Dynamic Content: Automatically accommodates dynamically added elements, meaning you don’t need to reattach listeners every time the content changes.
