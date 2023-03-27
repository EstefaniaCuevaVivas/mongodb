const mongoose = require("mongoose");

let photo = require("./schema.photo");


mongoose.connect('mongodb+srv://estefaniacuevavivas:estefaniacueva@estefania.7nmdywh.mongodb.net/codenotch', 
{useNewUrlParser: false,useUnifiedTopology:false})


let photo1 = {

  nombre: "Maria",
  url:"https://media.traveler.es/photos/6137759232d932c80fcb98b3/master/w_1800,h_1083,c_limit/112270.jpg",
  title:"Mi playa favorita",
  descripcion:"Mi nombre es Maria, soy de cadiz y mi playa favorita es la playa de bolonia"

}

let photo2 = {

  nombre: "Almudena",
  url:"https://media-cdn.tripadvisor.com/media/photo-s/04/b6/c5/6a/thailandia.jpg",
  title:"Viaje a Bangkok",
  descripcion:"Mi nombre es Almudena, os dejo una foto de mi ultimo viaje a tailandia"

}

let photo3 = {

  nombre: "Ramon",
  url:"https://villaadejebeachhotel.com/wp-content/uploads/2022/04/LOS-GIGANTES-ATARDECER.jpg",
  title:"Atardecer en tenerife",
  descripcion:"Mi nombre es Ramon, soy de la isla de tenerife, en esta foto se puede apreciar un atardecer en el acantilado de los gigantes"

}

let photo4 = {

  nombre: "Oscar",
  url:"https://www.telefloristeria.es/blog/wp-content/uploads/2016/10/Flor-margarita.jpg",
  title:"Margaritas",
  descripcion:"Mi nombre es Oscar, me dedico a la fotografia y aqui os muestro una foto de mi utlimo trabajo sobre flores"

}


//  function subirFotos(a){
//   photo.insertMany([a])
//   .then ( function(resp){
//     console.log("documentos insertados correctamente");
//     console.log(resp);
//   })
//   .catch(function(){
//     console.log("Error al insertar los documentos")
//   })

//  }

//  subirFotos(photo1)


//  function obtenerFotos(name){
//   photo.find({nombre:name})
//               .then(function(user){
//                 console.log(user)
//                 console.log(user[0].url)
//               })
//               .catch(function(){
//                 console.log("Error")
//               })

//  }

// obtenerFotos(photo3.nombre)



// function modificarFotos(titulo){
// photo.updateOne({ title: titulo }, { descripcion: 'playa de bolonia,cadiz' } )
//   .then(result => {
//    console.log(`Se ha modificado la descripción de la foto con título 'mi playa favorita'`);
//    console.log(result)
//   })
//   .catch(error => {
//    console.error('Error al modificar la descripción de la foto:', error);
//   });


// }
// modificarFotos(params)

// function eliminarFoto(params){
//   photo.deleteOne({nombre:params.nombre , title:params.title })
//   .then(function(result) {
//       console.log('Foto eliminada:', result);
//      })
//        .catch(function(err) {
//       console.error(err);
  
//     });
// }

// eliminarFoto(photo1)


// function eliminarTodas(params){
//   photo.delete({nombre:params.nombre , title:params.title })
//   .then(function(result) {
//       console.log('Fotos eliminadas:', result);
//      })
//        .catch(function(err) {
//       console.error(err);
  
//     });
// }

// eliminarTodas(photo2)