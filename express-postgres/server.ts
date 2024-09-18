import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
    select "title",
           "fimId",
    from "films"
    order by "replacementCost" desc;
    `;
    const result = await db.query(sql);
    res.send(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, ' filmID is required');
    }
    const sql = `
    select *
    from "films"
    where "filmId" = $1`;
    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(400, 'filmID does not exist ');
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/films', async (req, res, next) => {
  try {
    const { filmId, title } = req.query;
    if (filmId === undefined || title === undefined) {
      throw new ClientError(400, 'filmId and title are required');
    }
    const sql = `
    update
      "films"
    set
      "title" = $2
    where "filmId" = $1
    `;

    const params = [filmId, title];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(400, 'filmId not found');
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
