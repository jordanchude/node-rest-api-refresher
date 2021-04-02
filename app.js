// add CORS
// add status codes

const express = require('express');
const mongoose = require ('mongoose');
const app = express();
const postsRoute = require('./routes/posts');
const cors = require('cors');
require('dotenv/config');

//MIDDLEWARE
app.use(express.json());

// using the cors middleware lets other domains talk to your api. before it would have only allowed requests from localhost to hit localhost, but adding cors allowed codesandbox to hit localhost
// app.use(cors());

app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => {console.log('connected to DB!');
});

// LISTENING TO THE SERVER
app.listen(3000);