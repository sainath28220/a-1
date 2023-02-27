import React, { Component } from "react";

class EmployeesList extends Component {
  render() {
    return (
      < >
        <div >
          <h2>Employee List</h2>
          <br></br>
          <div >
            <label>Filter by Employee Name</label>
            <br></br>
            <input
              type="text"
              name="employee name"
              placeholder="Filter By Name"
            ></input>
          </div>
          <br></br>
          <div >
            <table>
              <thead>
                <tr>
                  <td>
                    <h2>Employee Code</h2>
                  </td>
                  <td>
                    <h2>Employee Name</h2>
                  </td>
                  <td>
                    <h2>Department</h2>
                  </td>
                  <td>
                    <h2>Edit</h2>
                  </td>
                </tr>
              </thead>

              <tbody>
                {this.props.employees.map((val) => {
                  return (
                    <tr >
                      <td>{val.employee_code}</td>
                      <td>{val.employee_name}</td>
                      <td>{val.department}</td>
                      <td>edit</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default EmployeesList;