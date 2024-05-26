import { useContext, useEffect, useState } from "react";
import EmployeeContext from "../Utils/EmployeeContext";

const Right = () => {
    const { state,dispatch } = useContext(EmployeeContext);
    const [addedEmployee, setAddedEmployee] = useState([]);
    useEffect(() => {
        const addData = () => {
            setAddedEmployee(state.employee);
        };
        addData();
    }, [state.employee])
    const handleRemove = (idx)=> {
        dispatch({type:"REMOVE_EMPLOYEE",payload : idx});
    }
    const handleSort = ()=> {
        dispatch({type:"SORT_EMPLOYEE"});
    }
    return (
        <>

            <div className="w-[100%] shadow-xl rounded-lg m-10 p-10 flex flex-col gap-2 items-center">
                <p className="text-3xl text-emerald-900 font-semibold">
                    TEAM
                </p>
                <button className="text-[10px] font-semibold ml-[50%] bg-emerald-500 p-1 rounded-lg text-white hover:bg-emerald-600 transition-all" onClick={handleSort}>SORT</button>
                <table className="w-full overflow-auto mt-5 text-xs">
                    <thead>
                        <tr className="text-left text-gray-700">
                            <th className="p-2">ID</th>
                            <th className="p-2">First Name</th>
                            <th className="p-2">Age</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Gender</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           addedEmployee.length > 0 && addedEmployee.map((each, idx) => (
                                <tr key={idx} className="border-b">
                                    <td className="p-2">{each.id}</td>
                                    <td className="p-2">{each.first_name}</td>
                                    <td className="p-2">{each.age}</td>
                                    <td className="p-2">{each.email}</td>
                                    <td className="p-2">{each.gender}</td>
                                    <td>
                                        <button
                                            className="p-1 bg-rose-400 rounded-lg text-white text-xs hover:bg-rose-600 transition-all ml-10"
                                            onClick={() => handleRemove(each.id)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default Right;
