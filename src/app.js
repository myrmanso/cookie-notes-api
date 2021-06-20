require('dotenv').config()
const express = require('express');

const recipesRouter = require('./routes/recipes/recipes.routes');

require('./config/mongodb.config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const prefix = 'cook-notes-api';

app.use(`/${prefix}`, recipesRouter);

app.listen(process.env.PORT, () => console.log(`App listen on PORT ${process.env.PORT}`));
