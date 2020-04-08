const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema = new Schema({
  name: { type: String, required: true },
  
  employees:

  
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;


// strengthexcs: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "StrengthExc"
//     }
//   ]
// });
