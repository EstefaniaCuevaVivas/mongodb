const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://estefaniacuevavivas:estefaniacueva@estefania.7nmdywh.mongodb.net/alumnos",
  { useNewUrlParser: false, useUnifiedTopology: false }
);

const teachersSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  groups: [String],
});

const subjectsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  teachers: [teachersSchema],
});

const marksSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  mark: {
    type: Number,
  },

  subjects: [subjectsSchema],
});

const studentsSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },

  lastName: {
    type: String,
  },

  marks: [marksSchema],
});

let teachers = mongoose.model("teachers", teachersSchema);
let subjects = mongoose.model("subjects", subjectsSchema);
let marks = mongoose.model("marks", marksSchema);
let students = mongoose.model("students", studentsSchema);

let teacher1 = new teachers({
  firstName: "Ramona",
  lastName: "Lopez",
  groups: ["a", "b"],
});
let teacher2 = new teachers({
  firstName: "Ruben",
  lastName: "Fernandez",
  groups: ["b", "c"],
});
let teacher3 = new teachers({
  firstName: "Ana",
  lastName: "Ramirez",
  groups: ["c", "d"],
});
let teacher4 = new teachers({
  firstName: "Octavio",
  lastName: "Martin",
  groups: ["d", "e"],
});
let teacher5 = new teachers({
  firstName: "Lorena",
  lastName: "Escribano",
  groups: ["a", "c"],
});

let subject1 = new subjects({
  title: "Lengua",
  teachers: [teacher1, teacher2],
});
let subject2 = new subjects({
  title: "Matematicas",
  teachers: [teacher2, teacher3],
});
let subject3 = new subjects({
  title: "Sociales",
  teachers: [teacher3, teacher4],
});
let subject4 = new subjects({
  title: "Dibujo tecnico",
  teachers: [teacher4, teacher5],
});
let subject5 = new subjects({
  title: "ingles",
  teachers: [teacher5, teacher1],
});

let mark1 = new marks({ date: "2021-03-14", mark: 4, subjects: subject1 });
let mark2 = new marks({ date: "2023-01-02", mark: 6, subjects: subject2 });
let mark3 = new marks({ date: "2022-08-06", mark: 7, subjects: subject3 });
let mark4 = new marks({ date: "2020-11-11", mark: 10, subjects: subject4 });
let mark5 = new marks({ date: "2022-04-06", mark: 8, subjects: subject5 });

let student1 = new students({
  firstName: "Ramiro",
  lastName: "Perez",
  marks: [mark1, mark2],
});
let student2 = new students({
  firstName: "Silvia",
  lastName: "Rodriguez",
  marks: [mark5, mark3],
});
let student3 = new students({
  firstName: "Esther",
  lastName: "Marin",
  marks: [mark2, mark4],
});
let student4 = new students({
  firstName: "Manuel",
  lastName: "Gallego",
  marks: [mark5, mark4],
});
let student5 = new students({
  firstName: "Jorge",
  lastName: "Martin",
  marks: [mark3, mark1],
});

// teachers.insertMany([teacher1, teacher2, teacher3, teacher4,teacher5])
// .then(function(datos) {
//   console.log("Profesores insertados :" + datos);
// })
// .catch(function(err) {
//   console.error(err);
// });

// subjects.insertMany([subject1, subject2, subject3, subject4,subject5])
// .then(function(datos) {
//   console.log("Materias insertadas: " + datos);
// })
// .catch(function(err) {
//   console.error(err);
// });

// marks.insertMany([mark1, mark2, mark3, mark4,mark5])
// .then((result) => {
//     console.log("Las notas se han insertado correctamente");
//   })
// .catch((err) => {
//     console.error(err);
//   });

// students.insertMany([student1, student2, student3, student4,student5])
// .then(function(datos) {
//     console.log("Estudiantes insertados: " + datos);
//   })
// .catch(function(err) {
//     console.error(err);
//   });

students
  .findOne({ firstName: "Ramiro" })
  .then(({ marks }) => {
    console.log("NOTAS");
    for (let i = 0; i < marks.length; i++) {
      console.log(marks[i].mark);
    }
  })
  .catch((err) => {
    console.log(err);
  });

students
  .findOne({ firstName: "Ramiro" })
  .then(({ marks }) => {
    console.log("ASIGNATURAS");
    for (let i = 0; i < marks.length; i++) {
      marks[i].subjects.forEach((subject) => console.log(subject.title));
    }
  })
  .catch((err) => {
    console.log(err);
  });

students
  .findOne({ firstName: "Ramiro" })
  .then(({ marks }) => {
    console.log("PROFESORES");
    for (let i = 0; i < marks.length; i++) {
      marks[i].subjects[0].teachers.forEach((teacher) =>
        console.log(`${teacher.firstName} ${teacher.lastName}`)
      );
    }
  })
  .catch((err) => {
    console.log(err);
  });
