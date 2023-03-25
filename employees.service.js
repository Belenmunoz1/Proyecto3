import http from "../http-common";


class EmployeesDataService {
    getAll() {
      return http.get("/employees");
    }
  
    get(id) {
      return http.get(`/employee/${id}`);
    }
  
    create(data) {
      return http.post("/employees", data);
    }
  
    update(id, data) {
      return http.put(`/employee/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/employee/${id}`);
    }
  

  
    findById(id) {
      return http.get(`/employee${id}`);
    }
  }
  
  export default new EmployeesDataService();