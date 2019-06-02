import React, { useState, useEffect } from 'react';
import './App.css';
import StarWarCharacterList from './components/StartWarCharacterList';
import Spinner from './components/UI/Spinner/Spinner';
import Pagination from './components/Pagination/Pagination'

const App = () => {
  const initialState = {
    starwarsChars: [],
    previous: null,
    next: null,
  };
  const [state, setState] = useState(initialState);
  useEffect(() => {
    getCharacters('https://swapi.co/api/people/');
    //eslint-disable-next-line 
  }, [])

  const getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setState({
          ...state,
          starwarsChars: data.results, previous: data.previous, next: data.next
        });
      })
      .catch(err => {
        //
      });
  };
  const handlePagination = (event) => {
    const type = event.target.dataset.type;
    const paginationUrl = state[type];
    if (paginationUrl) {
      getCharacters(paginationUrl);
    }
  }

  let dataToRender = <Spinner />;
  if (state.starwarsChars.length) {
    dataToRender = (
      <React.Fragment>
        <StarWarCharacterList
          starWarCharacters={state.starwarsChars}
        />
        <Pagination
          handlePagination={handlePagination}
          hasNext={state.next}
          hasPrev={state.previous}
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

export default App;
