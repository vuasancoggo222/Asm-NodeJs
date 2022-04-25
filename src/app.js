import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import productRoute from "./Routes/product";
import categoryRoute from './Routes/category'
import authRoute from "./Routes/auth"
const app = express();
// middleware

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.static('src'))
app.use("/api",productRoute)
app.use("/api",categoryRoute)
app.use("/api",authRoute)
//connect Database
mongoose.connect("mongodb://localhost:27017/assignment")
    .then(() => console.log("Ket noi DB thanh cong"))
    .catch(error => console.log(error))
    
// connect PORT
const PORT = 8001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng ", PORT);
});

