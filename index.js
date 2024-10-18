const express = require('express')
const app = express();
const allCatagory=require('./routes/allCatagory');
require("dotenv").config();

//home route
app.get('/', function (req, res) {
  res.send('Hello World')
})

// Allcatagry routes using route and middleware
app.use('/catagory/api/', allCatagory);


app.listen(process.env.PORT|| 3001,()=>{
   console.log(`app running on port 3001`);
   
})