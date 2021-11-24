import React, { Component } from "react";

import "./display.css";

export default class Display extends Component {
  render() {
    return (
      <div className="Display_Box">
        <div className="Employee_Number">1/25</div>
        <div className="Employee_Info_Box">
          <h2 className="Employee_Name">Name Big</h2>
          <ul className="Employee_Info_List">
            <li className="Employee_List_Item">From:</li>
            <li className="Employee_List_Item">Job Title:</li>
            <li className="Employee_List_Item">Employer:</li>
          </ul>
        </div>
        <div className="Fav_Movies_Box">
          <span className="Fav_Movies_Title">Favorite Movies:</span>
          <ol className="Movies_List">
            <li className="Movies_List_Item">Fathom</li>
            <li className="Movies_List_Item">Strange Magic</li>
            <li className="Movies_List_Item">Martian Child</li>
          </ol>
        </div>
      </div>
    );
  }
}
