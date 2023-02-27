import React, { Component } from "react";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      employee_code: "",
      employee_name: "",
      department: "",
    };
  }

  addData = (event) => {
    event.preventDefault();
    
      this.props.addEmployeeHandler(this.state);
      this.setState({ employee_code: "", employee_name: "", department: "" });
    
  };


  render() {
    return (
      <div >
        <div >
          <h2>Manage Employee</h2>
          <form onSubmit={this.addData}>
            <div >
              <label>Employee Code:</label>
              <input
                type="text"
                name="employee_code"
                value={this.state.employee_code}
                onChange={(event) =>
                  this.setState({ employee_code: event.target.value })
                }
              ></input>
            </div>
            <div >
              <label>Employee Name</label>
              <input
                type="text"
                name="employee_name"
                value={this.state.employee_name}
                onChange={(event) =>
                  this.setState({ employee_name: event.target.value })
                }
              ></input>
            </div>
            <div >
              <label>Department</label>
              <select
                name="department"
                value={this.state.department}
                onChange= {(event) => 
                    this.setState({department: event.target.value})
                }
              >
                <option value="QA">QA</option>
                <option value="Development">Development</option>
                <option value="IT">IT</option>
              </select>
            </div>
            <button >Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Employee;