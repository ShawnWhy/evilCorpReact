const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password : String,
  position: String,
  hireddate: { type: Date, default: Date.now },
  race:{type:String, default:"human"}
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
