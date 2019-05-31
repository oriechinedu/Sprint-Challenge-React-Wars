import React, { Component } from 'react';
import './App.css';
import StarWarCharacterList from './components/StartWarCharacterList'
import Spinner from './components/UI/Spinner/Spinner'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        alert('Oops, internal sever error')
      });
  };
  render() {
    let dataToRender = <Spinner />;
    if (this.state.starwarsChars.length) {
      dataToRender = (<StarWarCharacterList 
      starWarCharacters={this.state.starwarsChars} 
      />)
    }
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
          { dataToRender} 
      </div>
    );
  }
}

export default App;
