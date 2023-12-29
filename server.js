require('dotenv').config()
const express = require('express');
const cors = require('cors');
const connectWithDB = require('./db');
const bodyParser=require("body-parser");


connectWithDB();

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin:process.env.CLIENT_URL,
   credentials: true,
 }));

app.use('/products', require('./Routes/products'));
app.use('/offers', require('./Routes/offers'));



app.listen(process.env.PORT || 3000, (error) => {
    if (error) {
      console.log('Error in connecting to server: ', err);
    }
    console.log(`Server is running on port ${process.env.PORT}`);
  });