import React, { Fragment, useEffect, useState } from 'react';
import SelectEmployee from './SelectEmployee';
import Comments from './Comments.jsx';

const Main = () => {

    const [employees, setEmployees] = useState([]);

    const getEmployees = async () => {
        try {
            const response = await fetch('http://localhost:5000/admin/employees');
            const jsonData = await response.json();
            // console.log(jsonData);
            setEmployees(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    };
    useEffect(() => {
        getEmployees()
    }, []);

    return (
        <Fragment>
            <div className="container-fluid main">
                <h2>Main</h2>
                <table className="table mt-5 text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr> 
                    */}
                        {employees.map(employee => (
                            <tr key={employee.todo_id}>
                                <td>{employee.first_name + ' ' + employee.last_name}</td>
                                <td>{employee.role}</td>
                                <td>{employee.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Comments/>
            </div>
            
        </Fragment>
    );
};

export default Main;

