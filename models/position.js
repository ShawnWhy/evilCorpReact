const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema = new Schema({
  name: { type: String, required: true },
  
  employees:[
      {
      type: this.schema.Types.ObjectId,
      ref:"Employee"
  }

  ]

  
});

const Position = mongoose.model("Post", positionSchema);

module.exports = Position;


// strengthexcs: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "StrengthExc"
//     }
//   ]
// });
