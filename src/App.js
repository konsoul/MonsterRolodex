import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
// import CardContainer from "./components/card-container/card-container";

class App extends Component {
  //constructor method runs first no matter what
  constructor() {
    super();
    this.state = {
      searchFieldText: "",
      monsters: [],
    };
  }

  //************** METHODS ***************//
  //lifecycle method runs after render. 
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }));
  }

  //method to update text that is input into search
  onSearchChange = (event) => {
    const searchFieldText = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchFieldText };
    });
  }

  //******** RENDER ***********//
  //render method runs after constructor, and runs every time the DOM needs updated.
  render() {
    const{monsters, searchFieldText} = this.state;
    const{onSearchChange}            = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFieldText);
    });

    // We pass our return into our render()
    return (
      <div className="App">
        <h1 className="app-title">Bastard Monsters</h1>
        <SearchBox 
          onChangeHandler ={onSearchChange} 
          placeholder     ='Search Monsters'
          className       ='monsters-search-box'
        />
          
        <CardList monsters ={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
