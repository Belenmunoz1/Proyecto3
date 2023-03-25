import { useSelector , useDispatch} from "react-redux";
import {deleteEmployee} from "../features/employeeSlice"
import {Link} from 'react-router-dom'
import { useEffect } from "react";

import axiosInstance from "../http-common";

function EmployeesList () {

    const employees = useSelector ( state => state.employees)
    const dispatch= useDispatch()


    const getEmployee =async ()=>{
        const response= await axiosInstance.get('/employees')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }

    const handleDelete = (id) => {
        dispatch (deleteEmployee(id))
    }
    useEffect(async()=>{
        await getEmployee()
    } ,[])
    return (
        <div> 
            <header>
                <h1>Empleados Actuales {employees.length}</h1>
             <Link to={'/create-employee'}  color='primary'>
             Agregar Empleado 
             </Link> 
            
            </header>
            { employees.map (employee =>(
                <div key= {employee.id}>
                    <h1>employee id {employee.id}</h1>
                    <h1> Firs name: {employee.first_name}</h1>
                    <h3> last name :{employee.last_name}</h3>
                    <h3> cuit: {employee.cuit}</h3>
                    <h3> team_id: {employee.team_id}</h3>
                    <h3> join_date :{employee.join_date}</h3>
                    <h3> rol :{employee.rol}</h3>
                    <button onClick={() =>handleDelete (employee.id)} >Delete</button>
                    <Link to={`/edit-employee/${employee.id}`}>Edit</Link>
                    
                </div>
            ))};
            </div>
    );

};

export default EmployeesList