const express=require("express")
const router=express.Router();
const Person=require("../models/person");//.. mean two folder up


router.post("/",async(req,res)=>{
    try{
    const data=req.body;
    const newPerson=new Person(data);
    const response=await newPerson.save();
    console.log("data saved");
    res.status(200).json(response)
    }catch(err){
      console.log(err);
    res.status(500).json({err:"Internal server error"})
    }
  })


  router.get("/",async(req,res)=>{
    try{
  const data=await Person.find();
  console.log("data fetch");
  res.status(200).json(data)
    }catch(err){
      console.log(err);
      res.status(500).json({err:"Internal server error"})
    }
  })


  
router.get("/:work",async(req,res)=>{
    try{
    const Workdata=req.params.work;
    if(Workdata=="chef" || Workdata=="waiter" ||Workdata=="manager"){
    const findWork=await Person.find({work:Workdata});
    console.log("data fetch");
    res.status(200).json(findWork)
    }else{
    res.status(404).json({err:"Invalid workData"})
  
  }
    
  }catch(err){
    console.log(err);
  
    res.status(500).json({err:"Internal server error"})
  
  }
  })



  router.put("/:id",async(req,res)=>{
        try{
            const personId=req.params.id;
            const updatepersonData=req.body;
            const response=await Person.findByIdAndUpdate(personId,updatepersonData,{
                new:true,// return update document
                runvalidator:true,//run mongoose validators
            })

            if(!response){
                return res.status(404).json({err:"person not found"})

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
    const response=await Person.findByIdAndDelete(data);
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