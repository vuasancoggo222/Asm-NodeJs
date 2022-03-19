import mongoose,{Schema} from "mongoose";
const {ObjectId} = mongoose.Types
const ProductSchema = new Schema({
    name :{
        type : String,
        minLength : 5,
        required : true,
        unique : true
    },
    price :{
        type : Number,
        required : true
    },
    // category:{
    //     type : ObjectId,
    //     ref: "Category"
    // }
},{timestamps: true})
export default  mongoose.model('Product',ProductSchema)