const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

// Book routes
// router.get("/employees",employeeController.findAllSortByLastName)
router.route("/employees")
  .get(employeeController.findAllSortByLastName)
  .post(employeeController.create);

router.route("/login")
.post(employeeController.findOneEmployee)
router.route("/employee/:id")
.delete(employeeController.deleteOne)

  router.route("/managers")
  .get(employeeController.findAllManagers);

  router.route("/employeesPosition")
  .get(employeeController.findAllSortByPosition);

  router.route("/employeesDate")
  .get(employeeController.findAllSortByDate);
  


module.exports = router;





