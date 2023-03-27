let mongoose = require("mongoose");

mongoose.connect("mongodb+srv://estefaniacuevavivas:estefaniacueva@estefania.7nmdywh.mongodb.net/photo",
{useNewUrlParser: true,useUnifiedTopology:true})


.then((db)=>{
  console.log("database connected on " + db.connection.host)
})
.catch((error)=>{
  console.log(error)
})