import React, {Component} from 'react'

//Saved for reference
import './App.css';

//Components
import Header from './components/Header'

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

    </div>
    )
  }
}

export default App;
