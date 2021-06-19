require('dotenv').config()
const express = require('express');
require('./config/mongodb.config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, () => console.log(`App listen on PORT ${process.env.PORT}`));
