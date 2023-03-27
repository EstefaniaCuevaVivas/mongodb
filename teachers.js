const mongoose = require("mongoose");

// let teacher= require("./schema.teacher")

// let marks = require("./schema.marks")


const TeacherSchema = new mongoose.Schema({

  teacher_first_name: String,
  teacher_last_name: String,
 
})
const MarksSchema = new mongoose.Schema({   
  
  date: Date,
  mark: Number,
  student_first_name: String,
  student_last_name: String,
  group_name: String,
  subject_name: String,
  teachers: [TeacherSchema]

})


let marks= mongoose.model("Marks", MarksSchema)
let teacher = mongoose.model("Teacher", TeacherSchema);

mongoose.connect(
  "mongodb+srv://estefaniacuevavivas:estefaniacueva@estefania.7nmdywh.mongodb.net/estudiantes",
  { useNewUrlParser: false, useUnifiedTopology: false }
);


    let teacher1 = new teacher({teacher_first_name: "Sofia", teacher_last_name: "Perez"})
    let teacher2 = new teacher({teacher_first_name: "Juan", teacher_last_name: "garcia"})
    let teacher3 = new teacher({teacher_first_name: "Ana", teacher_last_name: "Hernández"})
    let teacher4 = new teacher({teacher_first_name: "Pedro", teacher_last_name: " Ramírez"})
    let teacher5 = new teacher({teacher_first_name: "Maria", teacher_last_name: "Lopez"})
    let teacher6 = new teacher({teacher_first_name: "Carlos ", teacher_last_name: "Gonzalez"})
    let teacher7 = new teacher({teacher_first_name: "Laura", teacher_last_name: "Sanchez"})
    let teacher8 = new teacher({teacher_first_name: "Luisa", teacher_last_name: "Martinez"})
    let teacher9 = new teacher({teacher_first_name: "Javier", teacher_last_name: "Rodriguez"})
    let teacher10 = new teacher({teacher_first_name: "Carmen", teacher_last_name: "Fernandez"})



    let marks1 = new marks({date:("2021-10-02"), mark: 7, student_first_name: "Roberto", student_last_name: "Castro", group_name: "1", subject_name: "Historia", teachers: [teacher1, teacher2]})
    let marks2 = new marks({date:("2021-05-08"), mark: 8, student_first_name: "Mónica", student_last_name: "Ruiz", group_name: "1", subject_name: "Matematicas", teachers: [teacher2,teacher3]})
    let marks3 = new marks({date:("2021-09-10"), mark: 9, student_first_name: "Pablo", student_last_name: "Moreno", group_name: "2", subject_name: "Historia", teachers: [teacher3, teacher4]})
    let marks4 = new marks({date:("2020-12-11"), mark: 8, student_first_name: "Raul", student_last_name: "Navarro", group_name: "2", subject_name: "Matematicas", teachers: [teacher4,teacher5]})
    let marks5 = new marks({date:("2020-10-01"), mark: 9, student_first_name: "Lucia", student_last_name: "Garcia", group_name: "3", subject_name: "Historia", teachers: [teacher5,teacher6]})
    let marks6 = new marks({date:("2021-08-03"), mark: 6, student_first_name: "Emilio", student_last_name: "Romero", group_name: "3", subject_name: "Ciencias", teachers: [teacher6,teacher7]})
    let marks7 = new marks({date:("2022-03-01"), mark: 4, student_first_name: "Teresa", student_last_name: "Alvarez", group_name: "4", subject_name: "Dibujo tecnico", teachers: [teacher7, teacher8]})
    let marks8 = new marks({date:("2022-05-14"), mark: 10, student_first_name: "Ignacio", student_last_name: "Torres", group_name: "4", subject_name: "Ciencias", teachers: [teacher8, teacher9]})
    let marks9 = new marks({date:("2023-03-29"), mark: 5, student_first_name: "Silvia", student_last_name: "Gomez", group_name: "5", subject_name: "Dibujo tecnico", teachers: [teacher9,teacher10]})
    let marks10 = new marks({date:("2023-02-12"), mark: 5, student_first_name: "Daniel", student_last_name: "Soto", group_name: "5", subject_name: "Dibujo tecnico", teachers: [teacher10]})





  

// teacher.insertMany([teacher1, teacher2, teacher3, teacher4, teacher5, teacher6, teacher7, teacher8, teacher9, teacher10])
//   .then(function(data) {
//     console.log("Teachers insertados: " + data);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });




//   marks.insertMany([marks1, marks2, marks3, marks4, marks5, marks6, marks7, marks8, marks9, marks10])
//     .then((data) => {
//       console.log("Notas insertadas");
//     })
//     .catch((err) => {
//       console.error(err);
//     });




// marks.aggregate([
//     { $match: { subject_name: "Historia" } }, 
//     { $group: { _id: null, media: { $avg: "$mark" } } }
//   ])
//   .then((result) => {
//     console.log("La nota media es " + result[0].media);
//   })
//   .catch(error => {
//     console.error(error);
//   });


// marks.aggregate([
//     { $group: { _id: null, total: { $sum: 1 } } }
//   ])
//   .then(result => {
//     console.log("Número total de alumnos: " + result[0].total); 
//   })
//   .catch(err => {
//     console.log(err);
//   });

//   marks.aggregate([
//     {
//         $group: {
//             _id: { student_first_name: "$student_first_name", student_last_name: "$student_last_name" }
//         }
//     },
//     {
//         $project: {
//             _id: 0, student_first_name: "$_id.student_first_name", student_last_name: "$_id.student_last_name",
            
//         }
//     }
// ]).then((result) => {
//     console.log(result); 
// }).catch((err) => {
//     console.log(err);
// });


// marks.aggregate([
//     {
//         $group: {
//             _id: { teacher_first_name: "$teacher_first_name", teacher_last_name: "$teacher_last_name" },
//             sumatorio: { $sum: 1 }
//         }
//     },
//     {
//         $project: {
//             _id: 0,
//             teacher_first_name: "$_id.teacher_first_name", teacher_last_name: "$_id.teacher_last_name"
//         }
//     }
// ]).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


// marks.aggregate([
//     {
//       $group: {
//         _id: "$group_name", total: { $sum: 1 }
//       }
//     },
//     {
//       $sort: { _id: -1 }
//     }
//   ]).then(result => {
//     console.log(result);
//   }).catch(err => {
//     console.log(err);
//   });



  // marks.aggregate([
  //   {
  //     $group: {
  //       _id: "$subject_name",
  //       media: { $avg: "$mark" }
  //     }
  //   },
  //   {
  //     $match: {
  //       media: { $gt: 5 }
  //     }
  //   },
  //   {
  //     $sort: {
  //       media: -1
  //     }
  //   },
  //   {
  //     $limit:5
  //   },
   
  //   {
  //     $project: {
  //       _id: 0,
  //       subject: "$_id",
  //       media: 1
  //     }
  //   }
  // ]).then(result => {
  //   console.log(result);
  // }).catch(err => {
  //   console.log(err);
  // });


  // marks.aggregate([
  //   {
  //     $unwind: "$teachers" 
  //   },
  //   {
  //     $group: {
  //       _id: { subject_name: "$subject_name" },
  //       total: { $sum: 1 }
  //     }
  //   }
  // ]).then(result => {
  //   console.log(result);
  // }).catch(err => {
  //   console.log(err);
  // });
 

  // marks.find({
  //   $or: [
  //     { mark: { $gt: 8 } },
  //     { date: { $lt: new Date("2022-01-01") } }
  //   ]
  // }, {
  //   student_first_name: 1,
  //   student_last_name: 1,
  //   mark: 1,
  //   _id: 0
  // }).then((result) => {
  //   console.log(result);
  // }).catch((err) => {
  //   console.log(err);
  // });
  


  // marks.aggregate([
  //   {
  //     $match: {
  //       date: { $gte: new Date("2022-01-01") }
  //     }
  //   },
  //   {
  //     $group: {
  //       _id: "$subject_name",
  //       media: { $avg: "$mark" } 
  //     }
  //   },
  //   {
  //     $project: {
  //       _id: 0,
  //       subject_name: "$_id",
  //       media: 1
  //     }
  //   }
  // ])
  // .then(result => {
  //   console.log("Media de notas por asignatura en el último año:");
  //   console.log(result);
  // })
  // .catch(error => {
  //   console.error(error);
  // });


  // marks.aggregate([
  //   {
  //     $match: {
  //       date: {
  //           $gte: new Date("2022-01-01")
  //       }
  //     }
  //   },
  //   {
  //     $group: {
  //       _id: { student_first_name: "$student_first_name", student_last_name: "$student_last_name" },
  //       media: { $avg: "$mark" }
  //     }
  //   }
  // ]).then(result => {
  //   console.log(result);
  // }).catch(err => {
  //   console.log(err);
  // });



  marks.aggregate([
    {
      $unwind: "$teachers" 
    },
    {
      $match: {
        "teachers.teacher_first_name": "Juan" 
      }
    },
    {
      $group: {
        _id: { student_first_name: "$student_first_name", student_last_name: "$student_last_name" },
        total: { $sum: 1 } 
      }
    }
    
  ]).then(result => {
    console.log(result);
  }).catch(err => {
    console.log(err);
  });

  