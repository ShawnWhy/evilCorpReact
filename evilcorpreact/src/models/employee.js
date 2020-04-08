const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password : String,
  hireddate: { type: Date, default: Date.now },
  
  isRobot:{type: Boolean, default:false},
  isAlien:{type:Boolean, default:false},
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
