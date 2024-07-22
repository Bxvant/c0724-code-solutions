# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  So that we can see what our code is outputting
- What is the purpose of events and event handling?
  they allow for more user interaction and a more dynamic web page
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener
- What is a callback function?
  a function that is passed into another function as an argument
- What object is passed into an event listener callback when the event fires?
  the callback function
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  the event.target is what causes the event to fire, if you wanted to check and didnt know how, you could log the event to the console and look at its properties. MDN has more information about event.target
- What is the difference between these two snippets of code?
  One of them is passing the actual function and the other is passing only the variable.

  ```js
  element.addEventListener('click', handleClick);
  ```

  ```js
  element.addEventListener('click', handleClick());
  ```

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
