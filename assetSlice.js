import {createSlice} from '@reduxjs/toolkit';


const initialState = [
    {
        id:"1",
        employee_id : "11",
        name: "silla",
        type: "matias",
        code : "351111111",
        marca: "lenovo",
        description:"jefe",
        purchase_date: "20/10/1998 ",
    },
    {
        id:"2",
        employee_id : "12",
        name: "silla 2",
        type: "matias",
        code : "351111111",
        marca: "lenoo",
        description:"jefe",
        purchase_date: "20/10/1998 ",
},
    {
        id:"3",
        employee_id : "13",
        name: "silla 3",
        type: "matias",
        code : "351111111",
        marca: "1",
        description:"jefe",
        purchase_date: "20/10/1998 ",
    },

];

export const assetSlice = createSlice ({
    name: "assets",
    initialState,
    reducers : {
        addAsset:(state,action) => {
        state.push(action.payload);
        },
        deleteAsset: (state,action) => {
            const assetFound=state.find(asset => asset.id === action.payload)
            if (assetFound) {
                state.splice(state.indexOf(assetFound),1)
            }
        },
    
        editAsset: (state,action) => {
            const{id,employee_id,name,type,code,marca,description,purchase_date}= action.payload
            const foundAsset = state.find(asset=> asset.id===id)
            if (foundAsset){
                foundAsset.employee_id= employee_id
                foundAsset.name= name
                foundAsset.type= type
                foundAsset.code= code
                foundAsset.marca= marca
                foundAsset.description= description
                foundAsset.purchase_date= purchase_date

            }
        },

    },
});

export const {addAsset , deleteAsset,editAsset} = assetSlice.actions;
export default assetSlice.reducer;