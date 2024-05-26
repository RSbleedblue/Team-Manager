import { useContext } from "react";
import EmployeeContext from "../Utils/EmployeeContext";
import employees from "../Utils/Data";

const Left = () => {
    const { state, dispatch } = useContext(EmployeeContext);
    const handleAdd = (each) => {
        dispatch({type: "ADD_EMPLOYEE", payload: each});
    }
    console.log(state.employee);
    return (
        <>
            <div className="w-[60%] p-10 m-10 shadow-xl rounded-lg flex flex-col items-center">
                <p className="text-3xl font-semibold text-emerald-800">EMPLOYEES</p>
                <table className="w-[80%] overflow-auto mt-5">
                    <thead>
                        <tr className="text-left text-gray-700">
                            <th className="p-2">ID</th>       
                            <th className="p-2">First Name</th>
                            <th className="p-2">Age</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((each, idx) => (
                                <tr key={idx} className="border-b">
                                    <td className="p-2">{each.id}</td>
                                    <td className="p-2">{each.first_name}</td>
                                    <td className="p-2">{each.age}</td>
                                    <td className="p-2">{each.email}</td>
                                    <td className="p-2">{each.gender}</td>
                                    <button className="p-1 bg-emerald-400 rounded-lg text-white text-xs hover:bg-emerald-600 transition-all ml-10" onClick={()=>handleAdd(each)}>ADD</button>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Left;
