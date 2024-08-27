# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  hooks are functions
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  must start with use and a capital letter, must be top level, and hooks can only be called by components or other hooks
- What is the purpose of state in React?
  holds data and lets you re render
- Why can't we just maintain state in a local variable?
  because they dont save data, on re render all changes to local variables are lost
- What two actions happen when you call a `state setter` function?
  the data is updated and a re render is triggered
- When does the local `state variable` get updated with the new value?
  during re render

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
