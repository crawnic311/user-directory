import React, { Component } from "react";

//Saved for reference
import "./App.css";

//Components
import Header from "./components/Header/Header";
import Display from "./components/Display/display";
import Nav from "./components/Nav/nav";
import data from "./data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      employees: [data[4]],

      /*  
      id: null,
      name: {first: "", last: ""}, 
      city: "",
      country: "",
      employer: "",
      favMovies: [
        "",
        "",
        ""
      ]
    */
    };

    this.nextEmployee = this.nextEmployee.bind( this )
  }

  nextEmployee(id) {
    this.setState({employees: data[id]})
  }

  render() {
    const {employees} = this.state
    return (
      <div className="App_Parent">
        <Header />

        {
          employees.map(employee => (
          <Display
            id={employee.id}
            name={employee.name}
            city={employee.city}
            country={employee.country}
            employer={employee.employer}
            title={employee.title}
            favMovies={[employee.favoriteMovies]}
          />
        ))}

        <Nav 
          id={employees.id}
          nextEmployeeFn={this.nextEmployee}
        />
      </div>
    );
  }
}

export default App;
