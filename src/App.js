import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
// import CardContainer from "./components/card-container/card-container";

const App = () => {
  console.log('render')
  /* 
    inside the useState() method is passed the inital value
    the destructured variable searcField is the value, 
    and variable setSearchField is the function 
    that can change the searchField value. 
  */
  const [searchField, setSearchField]           = useState('') // [value, setValue]
  const [monsters, setMonsters]                 = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  /*
  When the value inside the dependency array [] change, run the code inside the {}
  useEffect(() => { //effect we want to happen }, [//contains state values or prop values] )
  */

  //Only run this .fetch() when the initial component has been rendered and never again denoted by the empty array
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users)    => setMonsters(users));
  }, [])

  //Only run the filteredMonsters arry method when monsters or searchField state has changed.
  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    //Set the filteredMonsters state to the new array returned by .filter()
    setFilteredMonsters(filteredMonsters)
  },[monsters, searchField])


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  }

  return (    
    <div className="App">
    <h1 className="app-title">Bastard Monsters</h1>

    <SearchBox 
      onChangeHandler ={ onSearchChange } 
      placeholder     ='Search Monsters'
      className       ='monsters-search-box'
    />
      
    <CardList monsters ={ filteredMonsters }/>
  </div>
  )
}


// class App extends Component {
//   //constructor method runs first no matter what
//   constructor() {
//     super();
//     this.state = {
//       searchFieldText: "",
//       monsters: [],
//     };
//   }

//   //************** METHODS ***************//
//   //lifecycle method runs after render. 
  // componentDidMount() {
  //   fetch("http://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) =>
  //       this.setState(
  //         () => {
  //           return { monsters: users };
  //         }));
  // }

//   //method to update text that is input into search
//   onSearchChange = (event) => {
//     const searchFieldText = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchFieldText };
//     });
//   }

//   //******** RENDER ***********//
//   //render method runs after constructor, and runs every time the DOM needs updated.
//   render() {
//     const{monsters, searchFieldText} = this.state;
//     const{onSearchChange}            = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchFieldText);
//     });

//     // We pass our return into our render()
//     return (
//       <div className="App">
//         <h1 className="app-title">Bastard Monsters</h1>
//         <SearchBox 
//           onChangeHandler ={onSearchChange} 
//           placeholder     ='Search Monsters'
//           className       ='monsters-search-box'
//         />
          
//         <CardList monsters ={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
