# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  Create - POST
  Read - GET
  Update - PUT
  Delete - DELETE
- What is Express middleware?
  Express middleware is an array of functions held by the express process
- What is Express middleware useful for?
  Express middleware can be useful for things such as logging request and responses
- How do you mount a middleware with an Express application?
  by using the app.use method
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  it passes the req, res and next() objects.

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
