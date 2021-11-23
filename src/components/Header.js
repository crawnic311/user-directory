import React, {Component} from "react";

import './Header.css'

export default class Header extends Component {
    render() {
        return (
           <div div className="header">
               <a 
                 className="home_link" 
                 href="http://localhost:3001/">
                 
                 Home
               </a>
           </div> 
        )
    }
}