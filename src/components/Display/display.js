import React, { Component } from "react";

import "./display.css";

export default class Display extends Component {
  render() {
    const {id, name, city, country, employer, title, favMovies} = this.props


    return (
      <div className="Display_Box">
        <div className="Employee_Number">{id}/25</div>
        <div className="Employee_Info_Box">
          <h2 className="Employee_Name">Name</h2>
          <ul className="Employee_Info_List">
            <li className="Employee_List_Item">From: <span className="Employee_Array_Text">{city}, {country}</span></li>
            <li className="Employee_List_Item">Job Title: <span className="Employee_Array_Text">{title}</span></li>
            <li className="Employee_List_Item">Employer: <span className="Employee_Array_Text">{employer}</span></li>
          </ul>
        </div>
        <div className="Fav_Movies_Box">
          <span className="Fav_Movies_Title">Favorite Movies:</span>
          <ol className="Movies_List">
            <li className="Movies_List_Item">{favMovies[0]}</li>
            <li className="Movies_List_Item">{favMovies}</li>
            <li className="Movies_List_Item">{favMovies}</li>
          </ol>
        </div>
      </div>
    );
  }
}
