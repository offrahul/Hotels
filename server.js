const express=require("express")
const mongoose=require("mongoose");
const app = express()

const db=require("./db");
const MenuItem=require("./models/menuItem");

const Person=require("./models/person");
const bodyParser=require("body-parser");
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello hotel')
})


// app.get("/idl",(req,res)=>{
//   var customized={
//     name:"rahul",
//     size:5.10,
//     student:false,
//     collage:"iter collage"

//   }
//   // res.send(customized);
//   res.json(customized)
// // res.send("student info")
// })




// app.post("/person",(req,res)=>{
//   const data=new req.body;
//   const newPerson=new Person(data);
//   // newPerson.name=data.name;
//   // newPerson.age=data.age;//this type we can also write or we can pass data in person



//   //save data of person
// //   newPerson.save((error,savePerson)=>{
// //     if(error)
// // {
// //   console.log("error in message",error);
// // res.status(500).json({error:"internal error"});
// // }else{
// // console.log("request success");
// // res.status(200).json({savePerson})
// // }
// //   });
  

  

// })



// industry level post rooute








//menu






app.delete("/menu",(req,res)=>{

})
app.put("/menu",(req,res)=>{

})




const personRoute=require("./routes/personRoutes");
const menuRoute=require("./routes/menuItem");
app.use("/person",personRoute)
app.use("/menu",menuRoute)



app.listen(3000,()=>{
  console.log("listening on server 3000")
})