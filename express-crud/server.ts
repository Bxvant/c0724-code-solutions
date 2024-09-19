import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
    select *
    from "grades";
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'a valid gradeId is required');
    }
    const sql = `
    select *
    from "grades"
    where "gradeId" = $1;
    `;
    const result = await db.query(sql, [gradeId]);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, 'must be a valid gradeId');
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (name === undefined || course === undefined || score === undefined) {
      throw new ClientError(400, 'Name, Course, and Score are required');
    }
    if (!Number.isInteger(score)) {
      throw new ClientError(400, 'Score must be an integer');
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, 'Score must be a number between 1 and 100');
    }
    const sql = `
    insert into "grades" ("name", "course", "score")
    values($1, $2, $3)
    returning *;
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const newGrade = result.rows[0];
    res.status(201).json(newGrade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (name === undefined || course === undefined || score === undefined) {
      throw new ClientError(400, 'Name, Course, Score are all required');
    }
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'gradeId must be a number');
    }
    if (!Number.isInteger(score)) {
      throw new ClientError(400, 'score must be an integer');
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, 'score must be a number between 1 and 100');
    }
    const sql = `
    update "grades
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *;
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (!updatedGrade) {
      throw new ClientError(404, 'gradeId does not exist');
    }
    res.json(updatedGrade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'GradeId must be a number');
    }
    const sql = `
    delete
    from "grades"
    where "gradeId" = $1
    returning *;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, 'GradeId does not exist');
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080, its working');
});
