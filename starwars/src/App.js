import React, { Component } from 'react';
import './App.css';
import StarWarCharacterList from './components/StartWarCharacterList';
import Spinner from './components/UI/Spinner/Spinner';
import Pagination from './components/Pagination/Pagination'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      previous: null,
      next: null,
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
        this.setState({ starwarsChars: data.results, previous: data.previous, next: data.next });
      })
      .catch(err => {
        alert('Oops, internal sever error')
      });
  };
  handlePagination = (event) => {
    const type = event.target.dataset.type;
    const paginationUrl = this.state[type];
    if (paginationUrl) {
      this.getCharacters(paginationUrl);
    }
  }
  render() {
    let dataToRender = <Spinner />;
    if (this.state.starwarsChars.length) {
      dataToRender = (
        <React.Fragment>
          <StarWarCharacterList
            starWarCharacters={this.state.starwarsChars}
          />
          <Pagination
            handlePagination={this.handlePagination}
            hasNext={this.state.next}
            hasPrev={this.state.previous}
          />
        </React.Fragment>
      )
    }
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {dataToRender}
      </div>
    );
  }
}
export default App;
