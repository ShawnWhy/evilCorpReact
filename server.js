const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/employeeReview", { useCreateIndex: true,
useNewUrlParser: true,useUnifiedTopology: true},);
db.Employee.deleteMany({})

.then(db.Employee.create({firstname:"Shawn",lastname:"Yu",password:"password",race:"robot",position:"manager"})
.then(db.Employee.create({firstname:"Xandor",lastname:"schmore",password:"password",race:"alien",position:"manager"})
.then(db.Employee.create({firstname:"Lando",lastname:"Griffin",password:"password",race:"human",position:"manager"})
.then(db.Employee.create({firstname:"George",lastname:"Stapp",password:"password",race:"human",position:"worker"})
.then(db.Employee.create({firstname:"Gerald",lastname:"Whitcherson",password:"password",race:"alien",position:"engineer"})
.then(db.Employee.create({firstname:"Kirstin",lastname:"Dunster",password:"password",race:"robot",position:"henchman"})
.then(db.Employee.create({firstname:"Bardo",lastname:"Darkerstone",password:"password",race:"human",position:"designer"})
.then(db.Employee.create({firstname:"Shyster",lastname:"Dusterton",password:"password",race:"human",position:"manager"})
)))))))).then(dbemployees=>
    console.log(dbemployees)
).catch(err=>console.log(err))

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
