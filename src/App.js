import { Component } from "react";
import "./App.css";

class App extends Component {

    constructor() {
      super();
      this.state = {
        name: {firstName: 'Sasa', lastName: 'Catumeta'},
        company: 'PetStore'
      }


    }
  render() {
    return <div className="App"><p>Hii, my name is {this.state.name.firstName}</p>
    <p>I work at {this.state.company}</p>
    <button onClick={() => {this.setState({name: {firstName: "Mani"}})}}>Change Name</button>
    </div>;
  }
 
}

export default App;
