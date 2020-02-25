import React, { useState } from 'react';
import { Route , Switch , Link} from 'react-router-dom'
import SavedList from './Movies/SavedList';

import Movie from './Movies/Movie.js'
import MovieList from './Movies/MovieList.js'

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Switch >
      <Route path='/movies/:movieID'>
        <Movie/>
      </Route> 

      <Route exact path='/'>
        <MovieList />
      </Route>
     

      </Switch>
    </div>
  );
};

export default App;
