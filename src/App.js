import React, {Component} from 'react'

//Saved for reference
import "./App.css";

//Components
import Header from "./components/Header/Header"
import Display from "./components/Display/display";
import Nav from "./components/Nav/nav"

class App extends Component {
  constructor() {
    super()

    this.state = {
      
    }
  }
  render () {
    return (
    <div className="App_Parent">
      <Header />
      <Display />
      <Nav />

    </div>
    )
  }
}

export default App;
