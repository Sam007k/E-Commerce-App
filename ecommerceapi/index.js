const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=> 
console.log('DBConnection Successfull'))
.catch((err)=>{
    console.log(err)
})

app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)


app.listen(process.env.PORT||5000, ()=>{
    console.log('Backend server is running')
})