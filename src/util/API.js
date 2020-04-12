import axios from "axios";

export default {
  getAllEmployees: function() {
    return axios.get("/api/employees");
  },
  getAllManagers: function() {
    return axios.get("/api/managers/");
  },

  getAllEngineers: function() {
    return axios.get("/api/Engineers/");
  },

  getAllDesigners: function(id) {
    return axios.get("/api/Designers/");
  },


  fireEmployee: function(id) {
    return axios.delete("/api/employee/" + id);
  },

  hireEmployee:function(newEmployee){
    return axios.post("/api/employee", newEmployee)
  },
  // Saves a book to the database

};
