const express = require('express');
const app = express()
const port = 1717

// introducing user routes to server
const userRouter = require('./routes/users')
app.use(userRouter)


app.listen(port, ()=>{
    console.log("server is successful")
})