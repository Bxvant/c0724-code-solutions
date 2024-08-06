# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  they check for truthy or falsy values
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  A short-circuit evaluation stops once it finds the boolean value its looking for. it will not continue to evaluate the remaining operands
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  the ?? operator checks for null values
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  the ?: operator allows for concise conditional expressions. The '?' take ths place of the if and the ':' takes the place of else.
- What is the `?.` (optional chaining) operator? When would you use it?
  it allows to you safely access properties on an object that may not exist. You could use it when trying to access a property deep within an object but are unsure if the intermediate objects exist
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  the '...' syntax is useful for cloning or merging objects or arrays. Array syntax involves brackets where object syntax uses curly braces
- What data types can be spread into an array? Into an object?
  any kind of data
- How does spread syntax differ from rest syntax?
  spread is used to expand elements or properties, rest is used to collect elements or properties

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
