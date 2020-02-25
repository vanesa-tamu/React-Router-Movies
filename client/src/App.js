import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import SavedList from './Movies/SavedList';

import Movie from './Movies/Movie.js'
import MovieList from './Movies/MovieList.js'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>

      <Route exact path='/'>
        <MovieList />
      </Route>
      <Route path='/movies/:movieID'>
        <Movie/>
      </Route>
    </div>
  );
};

export default App;
