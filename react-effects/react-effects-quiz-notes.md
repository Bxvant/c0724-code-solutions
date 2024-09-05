# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  when it is called for the first time
- What is a React Effect?
  the React Effect is a React hook that lets you synchronize a component with an external system.
- When should you use an Effect and when should you not use an Effect?
  you can use Effect if you need to connect to an external system, and refrain from using Effect for simple state updates where useState would be better.
- When do Effects run?
  Effects run on the first render or when a variable in the dependency array is changed
- What function is used to declare an Effect?
  the useEffect() function
- What are Effect dependencies and how do you declare them?
  Effect Dependencies is an array of all the reactive values, to declare them you simply insert them into the dependency array
- Why would you want to clean up from an Effect?
  Cleanup ensures that any side effects set up by the effect are properly managed
- How do you clean up from an Effect?
  by using a cleanup function
- When does the cleanup function run?
  it runs twice, when the component unmounts and before the effect re-runs

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
