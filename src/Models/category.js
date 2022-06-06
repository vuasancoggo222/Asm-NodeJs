import mongoose, { Schema } from "mongoose";
const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status : {
        type :Number,
        default : 0
        // 0 =>> Availiable
        // 1 =>> Soldout
    }

}, { timestamps: true })
export default mongoose.model("Category", CategorySchema)