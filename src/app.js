require('dotenv').config()
const express = require('express');
const cors = require('cors');

const apiRoutes = require('./routes/api.routes');


require('./config/mongodb.config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRoutes);

app.listen(process.env.PORT, () => console.log(`App listen on PORT ${process.env.PORT}`));
