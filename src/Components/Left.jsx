import { useContext, useState } from "react";
import EmployeeContext from "../Utils/EmployeeContext";
import employees from "../Utils/Data";

const Left = () => {
    const { state, dispatch } = useContext(EmployeeContext);
    const [currentPage, setCurrentPage] = useState(1);
    const employeesPerPage = 5;

    const handleAdd = (each) => {
        dispatch({ type: "ADD_EMPLOYEE", payload: each });
    };

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

    const totalPages = Math.ceil(employees.length / employeesPerPage);

    const handleClick = (event, pageNumber) => {
        event.preventDefault();
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="w-[50%] p-10 m-10 shadow-xl rounded-lg flex flex-col items-center">
                <p className="text-3xl font-semibold text-emerald-800">EMPLOYEES</p>
                <table className="w-[80%] overflow-auto mt-5 text-xs">
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
                            currentEmployees.map((each, idx) => (
                                <tr key={idx} className="border-b">
                                    <td className="p-2">{each.id}</td>
                                    <td className="p-2">{each.first_name}</td>
                                    <td className="p-2">{each.age}</td>
                                    <td className="p-2">{each.email}</td>
                                    <td className="p-2">{each.gender}</td>
                                    <td>
                                        <button
                                            className="p-1 bg-emerald-400 rounded-lg text-white text-xs hover:bg-emerald-600 transition-all ml-10"
                                            onClick={() => handleAdd(each)}
                                        >
                                            ADD
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`p-2 mx-1 text-xs ${currentPage === index + 1 ? 'bg-emerald-400' : 'bg-gray-200'} rounded-lg`}
                            onClick={(event) => handleClick(event, index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Left;
