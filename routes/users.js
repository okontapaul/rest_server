const express = require('express')
const router = express.Router()

router.get('/users', (req, res)=>{
    res.send('welcome to users page')
})

router.get('/users/:id', (req, res)=>{
    res.send("welcome a one user")
})

router.post('/users', (req, res)=>{
    res.send('new user added')
})
router.put('/users', (req, res)=>{
    res.send('update one user')
})

router.delete('/users', (req, res)=>{
    res.send('user deleted')
})



module.exports = router