import { useReducer } from 'react';
import {createContext} from 'react';

const EmployeeContext = createContext();

const initialState = {
    employee : [{}]
};

const employeeReducer = (state,action) =>{
    switch(action.type){
        case "ADD_EMPLOYEE" : 
            return {
                ...state,
                employee: [...state.employee, action.payload],
            }
        case "REMOVE_EMPLOYEE" :
            return {
                ...state,
                employee : state.employee.filter(each => each.id !== action.payload),
            };
        default:
            return state;
    }
}

export const EmployeeProvider = ({children}) =>  {
    const [state, dispatch] = useReducer(employeeReducer, initialState);
    return (
        <EmployeeContext.Provider value={{state,dispatch}}>
            {children}
        </EmployeeContext.Provider>
    );
};
export default EmployeeContext;