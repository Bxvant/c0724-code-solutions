# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  by using the log method of the console object.
- What is a "model"?
  representation of a web pages content in the form of objects
- Which "document" is being referred to in the phrase Document Object Model?
  the HTML document
- What is the word "object" referring to in the phrase Document Object Model?
  the elements of the HTML document
- What is a DOM Tree?
  the DOM tree is what is used to describe the 'tree' like structure of html elements
- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.querySelector, document.getElementByName
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.getSelectorAll
- Why might you want to assign the return value of a DOM query to a variable?
  by storing them in a variable you can reuse the queried elements without having to perform the DOM query multiple times
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  The browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.
- What does `document.querySelector()` take as its argument and what does it return?
  it takes a css selector as an argument and returns the first element that matches it
- What does `document.querySelectorAll()` take as its argument and what does it return?
  it takes a css selector and returns a NodeList of all elements with that selector

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
