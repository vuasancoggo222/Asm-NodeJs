import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import productRoute from './Server/Routes/product';
const app = express();
// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use("/api",productRoute)
mongoose.connect("mongodb://localhost:27017/assignment")
    .then(() => console.log("Ket noi DB thanh cong"))
    .catch(error => console.log(error))
// connect
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng ", PORT);
});