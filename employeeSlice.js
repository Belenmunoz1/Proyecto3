import {createSlice} from '@reduxjs/toolkit';
// import api from '../http-common';



const initialState = [
    {
        id:"5",
        employee_id : "11",
        first_name: "MATIAS",
        last_name: "matias",
        cuit : "351111111",
        team_id: "1",
        join_date: "20/10/1998 ",
        rol:"jefe",
    },
    {
        id:"6",
        employee_id : "12",
        first_name: "aaaa",
        last_name: "aaaas",
        cuit : "351111111",
        team_id: "2",
        join_date: "20/10/1998 ",
        rol:"jefe",
},
    {
        id:"8",
        employee_id : "13",
        first_name: "bbbb",
        last_name: "bbbb",
        cuit : "351111111",
        team_id: "3",
        join_date: "20/10/1998 ",
        rol:"jefe",
    },

];

export const employeeSlice = createSlice ({
    name: "employees",
    initialState,
    reducers : {
        addEmployee:(state,action) => {
        state.push(action.payload);
        },
        deleteEmployee: (state,action) => {
            const employeeFound=state.find(employee => employee.id === action.payload)
            if (employeeFound) {
                state.splice(state.indexOf(employeeFound),1)
            }
        },
    
        editEmployee: (state,action) => {
            const{id,first_name,last_name,cuit,team_id,join_date,rol}= action.payload
            const foundEmployee = state.find(employee=> employee.id===id)
            if (foundEmployee){
                foundEmployee.first_name= first_name
                foundEmployee.last_name= last_name
                foundEmployee.cuit= cuit
                foundEmployee.team_id= team_id
                foundEmployee.join_date= join_date
                foundEmployee.rol= rol

            }
        },

    },
});

export const {addEmployee , deleteEmployee,editEmployee} = employeeSlice.actions;
export default employeeSlice.reducer;