import React, { Component } from 'react';
import Character from './components/Character';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div>
          {this.state.starwarsChars.map((character, index) => {
            return (
              <Character
                name={character.name}
                birth_year={character.birth_year}
                gender={character.gender}
                height={character.height}
                mass={character.mass}
                // species={character.species}
                // homeworld={character.homeworld}
                // starships={character.starships}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
