const express = require('express');
const config = require('config');
const cors = require('cors');
const app = express();

const { connectDb } = require('./services/db/db');
const { prodMidleware } = require('./middlewares/prodMidleware');


connectDb();
prodMidleware(app);


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));


const port = config.get('PORT') || 3000;
app.listen(port, () => console.log('listening on port ' + port))