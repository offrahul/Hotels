const express=require("express");
const router=express.Router();
const MenuItem=require("../models/menuItem");


router.post("/",async(req,res)=>{
    try{
  const data=req.body;
  const menuData=new MenuItem(data);
  const saveMenu=await menuData.save();
  console.log("we are saved the menu");
  res.status(200).json(saveMenu);
    }catch(err){
      console.log(err);
      res.status(500).json({err:"Internal server error"})
    }
  })


  router.get("/",async(req,res)=>{
    try{
    const menuData=await MenuItem.find();
    console.log("we got items names")
    res.status(200).json(menuData);
    }catch(err){
      console.log(err);
        res.status(500).json({err:"Internal server error"})
    }
    })


router.get("/:taste",async (req,res)=>{
    try{
    const data=req.params.taste;
    if(data=="sweet" ||  data=="spicy"||   data=="sour"){
        const findTaste=await MenuItem.find({taste:data});

        console.log("we got a item of taste");
        res.status(200).json(findTaste);
    }else{
        res.status(400).jsaon({err:"write the correct taste"})
    }
    }catch(err){
        console.log(err);
        res.status(500).json({err:"Internal server error"})
    }
})


router.put("/:id",async(req,res)=>{
  try{
  const data=req.params.id;
  const UpdateMenu=req.body;
  const response=await MenuItem.findByIdAndUpdate(data,UpdateMenu,{
    new:true,// return update document
    runvalidator:true,//run mongoose validators
})
if(!response){
  return res.status(404).json({err:"menu not found"})

}
console.log("updated");
res.status(200).json(response)
  }catch(err){
    console.log(err);
    res.status(500).json({err:"Internal server error"})
  }

})




router.delete("/:id",async(req,res)=>{
  try{
  const data=req.params.id;
  const response=await MenuItem.findByIdAndDelete(data);
  if(!response){
    return res.status(404).json({err:"person not found"})

}
 console.log("delete");
 res.status(200).json(response)
  }catch(err){
    console.log(err);
    res.status(500).json({err:"Internal server error"})
  }
})
    module.exports=router;