import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date());

  next();
});
app.get('/', (req, res) => {
  res.send('test number one, slash');
});

app.get('/notes', (req, res) => {
  res.send('test number two , notes');
});

app.post('/notes/123', (req, res) => {
  res.send('test number three, 123');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
  console.log(Date());
});
