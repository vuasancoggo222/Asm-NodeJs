import Product  from "../Models/product"

//GetAll
export const list = async (req, res) => {
    try {
    const product = await Product.find({})
    res.json(product)
    }
    catch (error){
console.log(error);
    }
}
//Create
export const create = async (req, res) => {
 try {
    const product = await new Product(req.body).save()
    res.json(product);
 }
 catch(error){
     res.status(400).json({
         error:"Khong thanh cong"
     })
 }
}
//GetOne
export const get = async (req, res) => {
   try {
    const product = await Product.findOne({ _id : req.params.id}).exec()
    res.json(product)
   }
   catch (err) {
       console.log(err);
   }
}
//Update
export const update =  async (req, res) => {
    const condition = { _id : req.params.id }
    const update = req.body
    try {
        const product = await Product.findOneAndUpdate(condition,update).exec()
        res.json(product)
       }
       catch (err) {
           console.log(err);
       }
}
//Delete
export const remove = async (req, res) => {
    const condition = { _id: req.params.id }
  try{
  const product = await Product.findOneAndDelete(condition)
  res.json(product)
  }
  catch (err) {
console.log(err);
  }
}