const mongoose = require("mongoose");


const credentialsSchema = new mongoose.Schema({
  address: {
    type: String,

  },
  phone: {
    type: Number,
    validate:[
      function(phone){
        return String(phone).length >=6;
      },
      'El telefono debe contener minimo 6 digitos'],
      select:false
    
  },
  email: {
    type: String,
    require:true
   
  }

});

credentialsSchema.pre('save', function(next){
  console.log("middleware de entrada");
  if(this.phone.length < 6){
    console.log("El telefono contiene menos de 6 digitos")
    next()
  }else{
    console.log("El telefono es correcto")
  }
})

module.exports = mongoose.model('Credentials', credentialsSchema);