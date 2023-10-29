const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const userRoute = require('./routes/user')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')


const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=> 
console.log('DBConnection Successfull'))
.catch((err)=>{
    console.log(err)
})

app.use(cors(
    {
        origin: ["https://e-commerce-app-frontend-henna.vercel.app"],
        methods:["POST", "PUT", "PATCH","GET","DELETE"],
        credentials: true
    }
))
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/orders', orderRoute)
app.use('/api/carts', cartRoute)
app.use('/api/checkout', stripeRoute)




app.listen(process.env.PORT||5001, ()=>{
    console.log('Backend server is running')
})
