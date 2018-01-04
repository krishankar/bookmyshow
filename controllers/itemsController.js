var db=require("../db.js");
require("dotenv").load();

// list
exports.listItems = async (req, res) => {
  var qry={};
  var items;
  if(req.params.limit){
    items = await db.Item.find().skip(0).limit(parseInt(req.params.limit));
   }
  else{
     items = await db.Item.find(qry);
  }
  res.status(200).json(items);
}


exports.addItem = async (req, res) =>{
  var item = await (new db.Item(req.body)).save();
  res.status(200).json(item);
}

exports.deleteItem = async (req, res) =>  {
  var item= await db.Item.findOneAndRemove({_id:req.params.id})
  res.status(200).json("item delete successfully")
}
