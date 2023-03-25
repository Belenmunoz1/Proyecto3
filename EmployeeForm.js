import {useState, useEffect}from 'react';
import { useDispatch,useSelector} from 'react-redux'
import { addEmployee, editEmployee} from '../features/employeeSlice'
import {v4 as uuid} from 'uuid'
import { useNavigate , useParams} from 'react-router-dom';


function EmployeeForm () {

    const [employee, setEmployee] = useState ({
        employee_id:"",
        first_name:"",
        last_name:"",
        cuit:"",
        team_id:"",
        join_date:"",
        rol:""
    });

    const dispatch = useDispatch ();
    const navigate = useNavigate ();
    const params = useParams()
    const employees = useSelector ( state => state.employees)

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
            if (params.id) {
                dispatch(editEmployee(employee))

            } else {
                dispatch(
                    addEmployee({
                    ...employee,
                    id: uuid(),
                   } ,alert ('Usuario agregado exitosamente :)'),
                   ),
                )
            }
       
      navigate ('/');
    };

    useEffect(() => {
        if (params.id) {
           setEmployee( employees.find((employee) => employee.id === params.id));
        }

    }, []);

    return (
        <form onSubmit={handleSubmit}>
             < input type = "number" placeholder="employee id" name="employee_id" onChange={handleChange} value={employee.employee_id}/>
            < input type = "text" placeholder="ingrese nombre" name="first_name" onChange={handleChange} value={employee.first_name}/>
            < input type = "text" placeholder= "ingrese apellido" name="last_name" onChange={handleChange} value={employee.last_name}/>
            < input type = "number" placeholder="ingrese cuit" name="cuit" onChange={handleChange} value={employee.cuit}/>
            < input type = "number" placeholder="ingrese team id" name="team_id" onChange={handleChange} value={employee.team_id}/>
            < input type = "date" placeholder="ingrese join date" name="join_date" onChange={handleChange} value={employee.join_date}/>
            < input type = "text" placeholder="ingrese rol" name="rol" onChange={handleChange} value={employee.rol}/>
            <button> save</button>
            <button> cancel</button>
            
        </form>


    )

}

export default EmployeeForm