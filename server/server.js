export const express = require('express')
export const bodyParser = require('body-parser')

const mongoose = require("mongoose");

const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const categorySchema = new mongoose.Schema({
    name: String,
    desc: String,
    icon: String,
  });
  
  const categoryModel = mongoose.model("Category", categorySchema);

  //Get by ID

app.get('/api/product/:id',async(req,res)=>{
    const {id} = req.params
    const productID = await productModel.findById(id)
    res.status(200).send(productID)
})

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});