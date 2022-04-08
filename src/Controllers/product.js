import Product  from "../Models/product"
import path from "path";
//GetAll
export const get = async (req, res) => {
    const {limit,page,sortBy} = req.query
    const start = (page - 1) * limit
    try {
    const product = await Product.find({}).limit(limit).skip(start).sort(sortBy)
    res.json(product)
    }
    catch (error){
res.status(400).json({
    message: "Không lấy được danh sách sản phẩm"
})
    }
}
//Create
export const create = async (req, res) => {
console.log(req.file.path);
    try {
        const product = await new Product({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            status: req.body.status,
            image: req.file
        }).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}
//GetOne
export const getOne = async (req, res) => {
   try {
    const product = await Product.findOne({ _id : req.params.id}).populate('category').exec()
    res.json(product)
   }
   catch (error) {
      res.status(400).json({
          message: "Không lấy được sản phẩm"
      })
   }
}
//Update
export const update =  async (req, res) => {
    const condition = { _id : req.params.id }
    const update = req.body
    const options = {new:true}
    try {
        const product = await Product.findOneAndUpdate(condition,update,options).exec()
        res.json(product)
       }
       catch (error) {
          res.status(400).json({
              message: `Không thể cập nhật sản phẩm`
          })
       }
}
//Delete
export const remove = async (req, res) => {
    const condition = { _id: req.params.id }
  try{
  const product = await Product.findOneAndDelete(condition)
  res.json(product)
  }
  catch (error) {
res.status(400).json({
    message: "Không thể xoá sản phẩm"
})
  }
}
// Get latest product
export const getLatest = async (req, res) => {
const limit = req.query.limit
try {
    const product = await Product.find().sort({_id : -1}).limit(limit)
    res.json(product)
} catch (error) {
    res.status(400).json({
        message: "Không thể lấy sản phẩm mới nhất"
    })
}
}
export const search = async (req, res) => {
    const keyword = req.query.q
    console.log(keyword);
    try {
       if(keyword ==""){
        return res.status(400).json({
            message: "Vui lòng nhập từ khoá"
        }) 
       }
       if(keyword){
        const product = await Product.find({name:{ $regex : keyword,$options : "i"}})
        if(product==""){
            return res.status(400).json({
                message: `Không có sản phẩm phù hợp với từ khoá : ${keyword}`
            })
        }
        return res.json(product)
       }
       
    } catch (error) {
       res.status(400).json({
        message : "Không thể tìm kiếm"
       })
    }
}
export const filter = async (req, res) => {
    const {lte,gte} = req.query
    try {
        if(gte > lte){
            res.status(400).json({
                message : "Giá trị gte không thể l"
            })
        }
        const product = await Product.find({ price :{$lte:lte,$gte : gte}})
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message : "Không lọc được sản phẩm"
        })
    }
}