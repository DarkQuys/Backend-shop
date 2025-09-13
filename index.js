const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use(cors({
    origin : "https://frontend-shop-bice.vercel.app" ,
    credentials : true
}))

// app.use(cors({
//   origin: "https://frontend-shop-bice.vercel.app", // Lấy từ .env
//   methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"], // Liệt kê header cụ thể
//   credentials: true // Nếu dùng cookie hoặc Authorization
// }));
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = process.env.PORT || 8080


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB " + process.env.MONGODB_URI)
        console.log("Server is running "+PORT)
    })
})
