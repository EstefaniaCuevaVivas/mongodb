const mongoose = require("mongoose");
let User = require("./schema.user");
let Credentials = require("./schema.credentials");
let Profile = require("./schema.profile");

mongoose.connect('mongodb+srv://estefaniacuevavivas:estefaniacueva@estefania.7nmdywh.mongodb.net/codenotch', 
{useNewUrlParser: false,useUnifiedTopology:false})

let userDocument = new User({
  login :"Maria@gmail.com",
  password : "Maria123456"
})

userDocument.save()
.then((data)=>
{
  console.log(data);
  
})
.catch((err)=>{
  console.log
})




let credentialsDocument = new Credentials({
  address: "calle mariana",
  phone: 8790657656757,
  email: "Maria@gmail.com"
})

credentialsDocument.save()
.then((data)=>
{
  console.log(data);
  
})
.catch((err)=>{
  console.log(err)
})



let profileDocument = new Profile({
  name: "Maria",
  surname: "garcia",
  dateOfBirth:'1990-12-09',
  comments: "Hola me llamo maria",
  rol: "informatica"
  
});

profileDocument.save()
.then((data)=>
{
  console.log(data);
 
})
.catch((err)=>{
  console.log
})

