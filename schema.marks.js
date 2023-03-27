const mongoose = require("mongoose");

let teacher = require("./schema.teacher")

const MarksSchema = new mongoose.Schema({   
  
  date: Date,
  mark: Number,
  student_first_name: String,
  student_last_name: String,
  group_name: String,
  subject_name: String,
  teachers : [TeacherSchema]

})


module.exports= mongoose.model("Marks", MarksSchema);