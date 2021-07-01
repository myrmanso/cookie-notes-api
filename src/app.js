require('dotenv').config()
const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/auth/auth.routes');
const userRouter = require('./routes/user/user.routes');
const recipesRouter = require('./routes/recipes/recipes.routes');

require('./config/mongodb.config');

const app = express();

app.use(cors({
  origin: process.env.FRONT_END_URL,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const prefix = 'api';

app.use(`/${prefix}/auth`, authRouter);
app.use(`/${prefix}/user`, userRouter);
app.use(`/${prefix}`, recipesRouter);

app.listen(process.env.PORT, () => console.log(`App listen on PORT ${process.env.PORT}`));
