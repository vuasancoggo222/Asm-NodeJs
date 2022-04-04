import Product  from "../Models/product"

//GetAll
export const list = async (req, res) => {
    try {
    const product = await Product.find({})
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
    console.log(req.body)
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }
}
//GetOne
export const get = async (req, res) => {
   try {
    const product = await Product.findOne({ _id : req.params.id}).exec()
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
const limit = req.params.limit
try {
    const product = await Product.find().sort({_id : -1}).limit(limit)
    res.json(product)
} catch (error) {
    res.status(400).json({
        message: "Không thể lấy sản phẩm mới nhất"
    })
}
}