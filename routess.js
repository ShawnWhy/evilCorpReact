const router = require("express").Router();
const db = require("./models");
const path = require("path");


router.get("/api/employees",function(req,res){
    db.Employee
        .find({})
        // .sort({lastName: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));


})

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

module.exports = router;