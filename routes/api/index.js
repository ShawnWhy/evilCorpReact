const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

// Book routes
// router.get("/employees",employeeController.findAllSortByLastName)
router.route("/employees")
  .get(employeeController.findAllSortByLastName)
  .post(employeeController.create);

  router.route("/managers")
  .get(employeeController.findAllManagers);
  
  router.get("/employees/date",employeeController.findAllSortByDate);
//   router.get("/api/")

router
  .route("/api/employees/:id")
  .get(employeeController.findById)
  .put(employeeController.update)
  .delete(employeeController.remove);

module.exports = router;





