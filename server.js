const express = require('express');
const cors = require('cors');
const auth = require('./routes/auth');
const postRoute = require('./routes/postRoute');
const likecomment= require('./routes/likecomment');
require('./db/connection');
const app = express();
const PORT =process.env.PORT|| 8000;
require('dotenv').config()
const path = require("path")

app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Parse JSON request bodies
app.use(auth);
app.use(postRoute)
app.use(likecomment)
app.use(express.static(path.join(__dirname,"./frontend/build")))


app.use('*',(req,res)=>{
res.sendFile(path.join(__dirname,"./frontend/build/index.html"))
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
