const express=require('express');
const path=require('path');
const dotenv = require('dotenv').config();
require("./config/database").connect();
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cors = require('cors');

// intialize express instance
const app = express();


// declare routing section
const authRouter = require('./routes/authRoute');

const port = process.env.PORT || 5000;

const corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// view engine setup
app.use(express.static(path.join(__dirname, 'public')));

// Api endpoint setup
app.use('/api/v1', authRouter);

app.get('/', (req,res) => {
  return res.json({
    welcome_note: 'Welcome to Payout Backend Infrastructure mongodb version...',
  });
});

app.listen(port, () => {
         console.log('Server is running on ' + '--' + port);        
})




