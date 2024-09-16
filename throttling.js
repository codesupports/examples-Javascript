/* Use Cases
Scroll Events: Throttling is useful for handling scroll events, where you might want to update something only periodically, like lazy loading images or updating a scroll position indicator.

Resize Events: Similarly, when handling window resize events, throttling helps to avoid excessive processing and improves performance.

API Rate Limiting: When making API calls in response to user interactions, throttling ensures you don't exceed rate limits and helps to distribute the load more evenly. 
---------------------------------------------------------------------

Throttling vs. Debouncing:

Throttling: Limits how often a function can be executed over time. Useful when you want to ensure a function runs at a consistent rate regardless of user actions.

Debouncing: Delays the execution of a function until after a specified period of inactivity. Useful when you want to execute a function only after the user has stopped performing an action.
*/
var count = 0;
function clickBtn() {
    console.log('Clicked', count++)
}

function throttle(func, delay) {
    let timeout = null
    console.log('Throttle Clicked', count++)
    return () => {
        if (!timeout) {
            func()
            timeout = setTimeout(() => {
                timeout = null
            }, delay)
        }
    }
}

const throatFun = throttle(clickBtn, 1000)






