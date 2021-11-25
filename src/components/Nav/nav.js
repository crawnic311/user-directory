import React, {Component} from "react";

import "./nav.css"

import App from "../../App";

export default class Nav extends Component {
    render() {
        const {id, nextEmployeeFn} = this.props

        return (
            <div className="Nav_Bar">
                <button className="Nav_Buttons Previous_Button">&lt; Previous</button>
                <button className="Blue_Buttons Edit_Button">Edit</button>
                <button className="Blue_Buttons Delete_Button">Delete</button>
                <button className="Blue_Buttons New_Button">New</button>
                <button className="Nav_Buttons Next_Button" onClick={() => nextEmployeeFn(id)}>
                    Next &gt; </button>
            </div>
        )
    }
}