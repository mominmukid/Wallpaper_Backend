const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT|| 3001,()=>{
   console.log(`app running on port 3001`);
   
})