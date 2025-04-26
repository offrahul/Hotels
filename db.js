// const mongoose=require("mongoose");

// //connection of mongodb

// const mongourl= "mongodb://localhost:27017/Backend"

// //connect mongo


// mongoose.connect(mongourl,
//     {useNewUrlParser:true,
//     useUnifiedTopology:true});


// //get default connection
// const db=mongoose.connection;

// //event listerner database connection
// db.on("conected",()=>{
//     console.log("mongo connected")
// })

// db.on("error",()=>{
//     console.log("mongo error")
// })
// db.on("disconected",()=>{
//     console.log("mongo disconnected")
// })

// //export connection

// module.exports=db;







const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB URL
// const mongourl = process.env.LOCAL_URL;

const Atlas_URL=process.env.DB_URL;

const mongourl=Atlas_URL;

// Connect to MongoDB (no need for deprecated options)
mongoose.connect(mongourl);

// Get default connection
const db = mongoose.connection;

// Event listeners
db.on("connected", () => {
  console.log("✅ MongoDB connected");
});

db.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("⚠️ MongoDB disconnected");
});

// Export the connection
module.exports = db;
