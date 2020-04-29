const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAllSortByDate: function(req, res) {
    db.Employee
      .find({})
      .sort({ hireddate: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllSortByLastName: function(req, res) {
      db.Employee
       .find({})
        .sort({lastname: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAllSortByPosition: function(req, res) {
      db.Employee
        .find({})
        .sort({position: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAllManagers: function(req, res){
      db.Employee.find({position:"manager"})
      .sort({lastname: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
  findOneEmployee: function(req, res){
    console.log(req.body);
    db.Employee.findOne(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

    deleteOne:function(req, res){
      console.log(req.params.id)
      db.Employee.findByIdAndDelete({_id:req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      
    },
  findById: function(req, res) {
    db.Employee
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Employee
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Employee
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Employee
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
