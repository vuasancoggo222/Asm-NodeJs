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
    sale_price:{
        type : Number,
        default : 0
    },
    category_id:{
        type : ObjectId,
        ref: "Category",
        required : true
    },
    description: {
        type : String,
        minLength: 30,
        required : true,
    },
    image: {
        type : String,
        required : true,
    },
    status:{
        type : Boolean,
    } 
},{timestamps: true})
export default  mongoose.model('Product',ProductSchema)