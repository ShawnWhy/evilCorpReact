import axios from "axios";

export default {
  getAllEmployees: function() {
    return axios.get("/api/employees");
  },

  getAllEmployeesPositionSort:function(){
    return axios.get("/api/employeesPosition")
  },
  getAllEmployeesDateSort:function(){
    return axios.get("/api/employeesDate")
  },

  getEmployee:function(newbody){
    console.log("lls")
    console.log(newbody)
    return axios.post("/api/login", newbody);

  },
  getAllManagers: function() {
    return axios.get("/api/managers/");
  },



  fireEmployee: function(id) {
    console.log(id)
    return axios.delete("/api/employee/" + id);
  },

  hireEmployee:function(newEmployee){
    console.log(newEmployee)
    return axios.post("/api/employees", newEmployee)
  },
  // Saves a book to the database

};
