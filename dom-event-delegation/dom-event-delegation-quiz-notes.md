# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  the element that triggers the event
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  becuase of event bubbling
- What DOM element property tells you what type of element it is?
  the tagName property
- What does the `element.closest()` method take as its argument and what does it return?
  it takes a css selector and returns the closest ancestor element or itself, if there are no selectors it returns null
- How can you remove an element from the DOM?
  by using the .remove method
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  by using event delegation, this attatches an event listener to a parent element that gets passed down to its children.

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
