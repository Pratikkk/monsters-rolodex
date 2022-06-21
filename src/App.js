import { Component } from "react";
import CardList from "./components/card-list/card-list-component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monster) => {
        this.setState({ monsters: monster });
      }
      );
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="Search Monsters" onChange={onSearchChange} />
        {
          filteredMonsters.map((monster) => { return <h1 key={monster.id}>{monster.name}</h1> })
        }
        <CardList />
      </div>
    );
  }
}

export default App;
